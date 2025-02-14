<template>
	<view class="container">
		<view class="sku-list">
			<view class="item-wrap" v-for="(item, index) in outputList" :key="index">
				<view class="form-wrap">
					<text class="label">{{ $t('goods.output.specification') }}</text>
					<text class="value">{{ item.sku_name }}</text>
				</view>
				<view class="form-wrap">
					<text class="label">{{ $t('goods.output.sale_price') }}</text>
					<text class="value">{{ item.price }}</text>
					<text class="unit">{{ $t('goods.output.currency') }}</text>
				</view>
				<view class="form-wrap">
					<view class="label">
						<text class="required color-base-text">*</text>
						<text>{{ $t('goods.output.stock') }}</text>
					</view>
					<input class="uni-input" v-model="item.stock" type="number" :placeholder="$t('goods.output.placeholder_stock')" />
					<text class="unit">{{ $t('goods.output.unit') }}</text>
				</view>
			</view>
		</view>
		<view class="footer-wrap"><button type="primary" @click="save()">{{ $t('goods.output.save') }}</button></view>
		<loading-cover ref="loadingCover"></loading-cover>
	</view>
</template>

<script>
export default {
	data() {
		return {
			goodsId: 0,
			outputList: []
		};
	},
	onLoad(option) {
		this.goodsId = option.goods_id || 0;
		this.getOutputList();
	},
	onShow() {},
	methods: {
		getOutputList() {
			this.$api.sendRequest({
				url: '/shopapi/goods/getOutputList',
				data: { goods_id: this.goodsId },
				success: res => {
					if (res.data) {
						this.outputList = res.data;
						if (this.$refs.loadingCover) this.$refs.loadingCover.hide();
					}
				}
			});
		},
		verify() {
			var flag = true;
			for (var i = 0; i < this.outputList.length; i++) {
				var item = this.outputList[i];

				if (item.stock.length == 0) {
					this.$util.showToast({ title: this.$t('goods.output.enter_stock', { index: i + 1 }) });
					flag = false;
					break;
				}

				if (isNaN(item.stock) || !this.$util.data().regExp.number.test(item.stock)) {
					this.$util.showToast({ title: this.$t('goods.output.invalid_stock_format', { index: i + 1 }) });
					flag = false;
					break;
				}
			}
			return flag;
		},
		save() {
			if (!this.verify()) return;
			var sku_list = [];
			this.outputList.forEach(item => {
				sku_list.push({ sku_id: item.sku_id, stock: item.stock });
			});
			this.$api.sendRequest({
				url: '/shopapi/goods/editGoodsStock',
				data: { sku_list: JSON.stringify(sku_list) },
				success: res => {
					this.$util.showToast({
						title: res.message
					});
					if (res.code == 0) {
						setTimeout(() => {
							this.$util.redirectTo('/pages/goods/list', {}, 'redirectTo');
						}, 1000);
					}
				}
			});
		}
	}
};
</script>

<style lang="scss">
@import './css/edit.scss';
.sku-list {
	margin-bottom: 160rpx;
	.item-wrap {
		background: #fff;
		margin: $margin-updown $margin-both;
		.form-wrap {
			.value {
				vertical-align: middle;
				display: inline-block;
				flex: 1;
				text-align: right;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: pre;
			}
		}
	}
}
</style>
