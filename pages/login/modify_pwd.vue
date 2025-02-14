<template>
	<view>
		<view class="item-wrap">
			<view class="form-wrap">
				<view class="label">{{ $t('login.modify_pwd.old_password') }}</view>
				<input class="uni-input" :placeholder="$t('login.modify_pwd.enter_old_password')" v-model="formData.old_pass" maxlength="100" password="true" />
			</view>
			<view class="form-wrap">
				<view class="label">{{ $t('login.modify_pwd.new_password') }}</view>
				<input class="uni-input" :placeholder="$t('login.modify_pwd.enter_new_password')" v-model="formData.new_pass" maxlength="100" password="true" />
			</view>
			<view class="form-wrap">
				<view class="label">{{ $t('login.modify_pwd.confirm_password') }}</view>
				<input class="uni-input" :placeholder="$t('login.modify_pwd.enter_confirm_password')" v-model="formData.repeat_pass" maxlength="100" password="true" />
			</view>
		</view>
		<button type="primary" @click="save()">{{ $t('login.modify_pwd.save_button') }}</button>
	</view>
</template>

<script>
import validate from '@/common/js/validate.js';
export default {
	data() {
		return {
			formData: {
				old_pass: '',
				new_pass: '',
				repeat_pass: ''
			}
		};
	},
	onShow() {
		if (!this.$util.checkToken('/pages/my/index')) return;
	},
	methods: {
		save() {
			if (!this.vertify()) return;
			this.$api.sendRequest({
				url: '/shopapi/login/modifyPassword',
				data: {
					new_pass: this.formData.new_pass,
					old_pass: this.formData.old_pass
				},
				success: res => {
					this.$util.showToast({
						title: res.message
					});
					if (res.code == 0) {
						setTimeout(() => {
							uni.navigateBack({
								delta: 1
							});
						}, 1000);
					}
				}
			});
		},
		//表单验证
		vertify() {
			let rule = [
				{ name: 'old_pass', checkType: 'required', errorMsg: this.$t('login.modify_pwd.enter_old_password') },
				{ name: 'new_pass', checkType: 'required', errorMsg: this.$t('login.modify_pwd.enter_new_password') },
				{ name: 'repeat_pass', checkType: 'required', errorMsg: this.$t('login.modify_pwd.enter_confirm_password') }
			];
			var checkRes = validate.check(this.formData, rule);
			if (checkRes) {
				if (this.formData.new_pass != this.formData.repeat_pass) {
					this.$util.showToast({
						title: this.$t('login.modify_pwd.password_mismatch')
					});
					return false;
				}
				return true;
			} else {
				this.$util.showToast({ title: validate.error });
				return false;
			}
		}
	}
};
</script>

<style lang="scss">
.item-wrap {
	background: #fff;
	margin-top: $margin-updown;
	.form-wrap {
		display: flex;
		align-items: center;
		margin: 0 $margin-both;
		border-bottom: 1px solid $color-line;
		min-height: 100rpx;
		line-height: 100rpx;
		&:last-child {
			border-bottom: none;
		}
		.label {
			vertical-align: middle;
			margin-right: $margin-both;
		}
		input {
			vertical-align: middle;
			display: inline-block;
			flex: 1;
			text-align: right;
		}
	}
}
button {
	margin-top: 40rpx;
}
</style>
