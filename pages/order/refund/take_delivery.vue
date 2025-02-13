<template>
	<view>
		<!-- 维权收货 -->
		<view class="item-wrap">
			<view class="form-wrap">
				<text class="label">{{ $t('order.refund.take.refund_type') }}</text>
				<text class="value">{{ detail.refund_type == 1 ? $t('order.refund.take.refund_only') : $t('order.refund.take.refund_and_return') }}</text>
			</view>
			<view class="form-wrap">
				<text class="label">{{ $t('order.refund.take.refund_amount') }}</text>
				<text class="value color-base-text money">
					￥{{ detail.refund_apply_money }}{{ detail.refund_delivery_money > 0 ? $t('order.refund.take.include_shipping', { money: detail.refund_delivery_money }) : '' }}
				</text>
			</view>
			<view class="form-wrap">
				<text class="label">{{ $t('order.refund.take.return_address') }}</text>
				<text class="value">{{ detail.refund_address }}</text>
			</view>
			<view class="form-wrap">
				<text class="label">{{ $t('order.refund.take.is_stock') }}</text>
				<view class="value">
					<view class="radio-wrap" @click="isRefundStock = 0">
						<text class="radio iconfont" :class="isRefundStock == 0 ? 'iconyuan_checked color-base-text' : 'iconyuan_checkbox'"></text>
						<text class="txt">{{ $t('order.refund.take.no') }}</text>
					</view>
					<view class="radio-wrap" @click="isRefundStock = 1">
						<text class="radio iconfont" :class="isRefundStock == 1 ? 'iconyuan_checked color-base-text' : 'iconyuan_checkbox'"></text>
						<text class="txt">{{ $t('order.refund.take.yes') }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="tips color-base-text">{{ $t('order.refund.take.tips') }}</view>
		<view class="footer-wrap">
			<button type="default" @click="cancel()">{{ $t('order.refund.take.cancel') }}</button>
			<button type="primary" @click="save()">{{ $t('order.refund.take.confirm') }}</button>
		</view>
		<loading-cover ref="loadingCover"></loading-cover>
	</view>
</template>

<script>
import refundAction from '../js/refund_action.js';
export default {
	data() {
		return {
			// 是否入库
			isRefundStock: 0
		};
	},
	mixins: [refundAction],
	methods: {
		save() {
			if (this.repeatFlag) return;
			this.repeatFlag = true;

			this.$api.sendRequest({
				url: '/shopapi/orderrefund/receive',
				data: {
					order_goods_id: this.orderGoodsId,
					is_refund_stock: this.isRefundStock
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
