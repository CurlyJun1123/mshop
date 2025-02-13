<template>
	<view>
		<!-- 售后申请拒绝 -->
		<view class="item-wrap">
			<view class="form-wrap">
				<text class="label">{{ $t('order.refund.refuse.refund_type') }}</text>
				<text class="value">{{ detail.refund_type == 1 ? $t('order.refund.refuse.refund_only') : $t('order.refund.refuse.refund_and_return') }}</text>
			</view>
			<view class="form-wrap">
				<text class="label">{{ $t('order.refund.refuse.refund_amount') }}</text>
				<text class="value color-base-text money">
					￥{{ detail.refund_apply_money }}{{ detail.refund_delivery_money > 0 ? $t('order.refund.refuse.include_shipping', { money: detail.refund_delivery_money }) : '' }}
				</text>
			</view>
			<view class="form-wrap reason">
				<text class="label">{{ $t('order.refund.refuse.refuse_reason') }}</text>
				<textarea class="uni-input" v-model="refundRefuseReason" :placeholder="$t('order.refund.refuse.reason_placeholder')" maxlength="200" />
			</view>
		</view>
		<view class="tips color-base-text">{{ $t('order.refund.refuse.tips') }}</view>
		<view class="footer-wrap">
			<button type="default" @click="cancel()">{{ $t('order.refund.refuse.cancel') }}</button>
			<button type="primary" @click="save()">{{ $t('order.refund.refuse.confirm') }}</button>
		</view>
		<loading-cover ref="loadingCover"></loading-cover>
	</view>
</template>

<script>
import refundAction from '../js/refund_action.js';
export default {
	data() {
		return {
			refundRefuseReason: ''
		};
	},
	mixins: [refundAction],
	methods: {
		save() {
			if (this.refundRefuseReason.length == 0) {
				this.$util.showToast({
					title: this.$t('order.refund.refuse.reason_required')
				});
				return;
			}

			if (this.repeatFlag) return;
			this.repeatFlag = true;

			this.$api.sendRequest({
				url: '/shopapi/orderrefund/refuse',
				data: {
					order_goods_id: this.orderGoodsId,
					refund_refuse_reason: this.refundRefuseReason
				},
				success: res => {
					if (res.code == 0) {
						setTimeout(() => {
							this.cancel();
						}, 1000);
					}
					this.repeatFlag = false;
					this.$util.showToast({
						title: res.message
					});
				}
			});
		}
	}
};
</script>

<style lang="scss">
@import '../css/refund_action.scss';
</style>
