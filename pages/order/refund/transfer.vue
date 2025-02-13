<template>
	<view>
		<!-- 维权转账 -->
		<view class="item-wrap">
			<view class="form-wrap">
				<text class="label">{{ $t('order.refund.transfer.refund_method') }}</text>
				<text class="value">{{ detail.refund_type == 1 ? $t('order.refund.transfer.refund_only') : $t('order.refund.transfer.refund_and_return') }}</text>
			</view>
			<view class="form-wrap">
				<text class="label">{{ $t('order.refund.transfer.refund_amount') }}</text>
				<text class="value color-base-text money">
					￥{{ detail.refund_apply_money }}{{ detail.refund_delivery_money > 0 ? $t('order.refund.transfer.including_shipping', { money: detail.refund_delivery_money }) : '' }}
				</text>
			</view>
		</view>
		<view class="tips color-base-text">{{ $t('order.refund.transfer.confirm_notice') }}</view>
		<view class="footer-wrap">
			<button type="default" @click="cancel()">{{ $t('order.refund.transfer.cancel') }}</button>
			<button type="primary" @click="save()">{{ $t('order.refund.transfer.confirm_transfer') }}</button>
		</view>
		<loading-cover ref="loadingCover"></loading-cover>
	</view>
</template>

<script>
import refundAction from '../js/refund_action.js';
export default {
	data() {
		return {};
	},
	mixins: [refundAction],
	methods: {
		save() {
			if (this.repeatFlag) return;
			this.repeatFlag = true;

			this.$api.sendRequest({
				url: '/shopapi/orderrefund/complete',
				data: {
					order_goods_id: this.orderGoodsId
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
