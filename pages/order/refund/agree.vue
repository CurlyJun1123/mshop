<template>
  <view>
    <!-- 售后申请同意 -->
    <view class="item-wrap">
      <view class="form-wrap">
        <text class="label">{{ $t('order.refund.agree.refund_type') }}</text>
        <text class="value">{{ detail.refund_type == 1 ? $t('order.refund.agree.refund_only') : $t('order.refund.agree.refund_with_goods') }}</text>
      </view>
      <view class="form-wrap">
        <text class="label">{{ $t('order.refund.agree.refund_amount') }}</text>
        <text class="value color-base-text money">￥{{ detail.refund_apply_money }}{{ detail.refund_delivery_money > 0 ? $t('order.refund.agree.including_shipping', {money: detail.refund_delivery_money}) : '' }}</text>
      </view>
    </view>
    <view class="tips color-base-text">{{ $t('order.refund.agree.online_payment_notice') }}</view>
    <view class="footer-wrap">
      <button type="default" @click="cancel()">{{ $t('common.cancel') }}</button>
      <button type="primary" @click="save()">{{ $t('order.refund.agree.confirm_refund') }}</button>
    </view>
    <loading-cover ref="loadingCover"></loading-cover>
  </view>
</template>

<script>
import refundAction from '../js/refund_action.js'
export default {
  data() {
    return {}
  },
  mixins: [refundAction],
  methods: {
    save() {
      if (this.repeatFlag) return
      this.repeatFlag = true
      this.$api.sendRequest({
        url: '/shopapi/orderrefund/agree',
        data: {
          order_goods_id: this.orderGoodsId
        },
        success: (res) => {
          if (res.code == 0) {
            setTimeout(() => {
              this.cancel()
            }, 1000)
          }
          this.repeatFlag = false
          this.$util.showToast({
            title: res.message
          })
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '../css/refund_action.scss';
</style>
