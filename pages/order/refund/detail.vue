<template>
  <view class="order-detail-wrap">
    <!-- 订单状态 -->
    <view class="status-wrap color-base-bg" :style="{ backgroundImage: 'url(' + $util.img('upload/uniapp/order/status-wrap-bg.png') + ')' }">
      {{ detail.refund_status_name }}
    </view>

    <view class="block-wrap">
      <view class="goods-item">
        <view class="goods-img"><image :src="$util.img(detail.sku_image, { size: 'mid' })" mode="widthFix" @error="imgError()"></image></view>
        <view class="info-wrap">
          <view class="name-wrap">{{ detail.goods_name }}</view>
          <view class="spec-wrap" v-if="detail.sku_spec_format">
            <block v-for="(x, i) in detail.sku_spec_format" :key="i">{{ x.spec_value_name }} {{ i < detail.sku_spec_format.length - 1 ? '; ' : '' }}</block>
          </view>
          <view class="more-wrap">
            <view class="goods-class">{{ detail.goods_class_name }}</view>
            <view class="price-wrap">
              <view class="price">
                <text class="unit">￥</text>
                <text>{{ detail.price }}</text>
              </view>
              <view class="num">x{{ detail.num }}</view>
            </view>
          </view>
          <view class="delivery-status-name color-base-text">{{ detail.delivery_status_name }}</view>
        </view>
      </view>
    </view>

    <!-- 订单信息 -->
    <view class="block-wrap">
      <view class="title">{{ $t('order.refund.detail.order_info') }}</view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.order_type') }}：</text>
        <view class="box">{{ orderInfo.order_type_name }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.order_no') }}：</text>
        <view class="box">{{ detail.order_no }}</view>
        <view class="copy color-base-text" @click="$util.copy(detail.order_no)">{{ $t('order.refund.detail.copy') }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.refund_no') }}：</text>
        <view class="box">{{ detail.refund_no }}</view>
        <view class="copy color-base-text" @click="$util.copy(detail.refund_no)">{{ $t('order.refund.detail.copy') }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.buyer') }}：</text>
        <view class="box color-base-text">{{ orderInfo.nickname }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.pay_type') }}：</text>
        <view class="box">{{ orderInfo.pay_type_name }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.delivery_type') }}：</text>
        <view class="box">{{ orderInfo.delivery_type_name }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.mobile') }}：</text>
        <view class="box">{{ orderInfo.mobile }}</view>
      </view>
      <view class="order-cell" v-if="orderInfo.promotion_type_name != ''">
        <text class="tit">{{ $t('order.refund.detail.promotion_activity') }}：</text>
        <view class="box">{{ orderInfo.promotion_type_name }}</view>
      </view>
    </view>

    <view class="block-wrap tit-auto">
      <view class="title">{{ $t('order.refund.detail.refund_info') }}</view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.applicant') }}：</text>
        <view class="box align-right money">{{ orderInfo.name }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.apply_time') }}：</text>
        <view class="box align-right money">{{ $util.timeStampTurnTime(detail.refund_action_time) }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.refund_type') }}：</text>
        <view class="box align-right money color-base-text">{{ detail.refund_type == 1 ? '仅退款' : '退货退款' }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.refund_money') }}：</text>
        <view class="box align-right money color-base-text">￥{{ detail.refund_apply_money }}{{ detail.refund_delivery_money > 0 ? '(' + $t('order.refund.detail.include_delivery_fee') + detail.refund_delivery_money + ')' : '' }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.refund_reason') }}：</text>
        <view class="box align-right money">{{ detail.refund_reason }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.refund_remark') }}：</text>
        <view class="box align-right money">{{ detail.refund_remark }}</view>
      </view>
    </view>

    <view class="block-wrap tit-auto" v-if="detail.refund_type == 2 && detail.refund_status > 1 && detail.refund_delivery_no != ''">
      <view class="title">{{ $t('order.refund.detail.refund_delivery') }}</view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.delivery_company') }}：</text>
        <view class="box align-right money">{{ detail.refund_delivery_name }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.delivery_no') }}：</text>
        <view class="box align-right money">{{ detail.refund_delivery_no }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.delivery_remark') }}：</text>
        <view class="box align-right money">{{ detail.refund_delivery_remark }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.is_refund_stock') }}：</text>
        <view class="box align-right money color-base-text">{{ detail.is_refund_stock == 1 ? $t('order.refund.detail.in_stock') : $t('order.refund.detail.not_in_stock') }}</view>
      </view>
    </view>

    <!-- 订单金额 -->
    <view class="block-wrap">
      <view class="order-cell">
        <text class="tit">{{ $t('order.refund.detail.goods_money') }}</text>
        <view class="box align-right money bold">
          <text class="font-size-goods-tag">￥</text>
          <text class="color-title">{{ detail.price }}</text>
        </view>
      </view>
      <view class="order-cell">
        <view class="box align-right money bold">
          <text>{{ $t('order.refund.detail.actual_paid') }}：</text>
          <text class="font-size-goods-tag color-base-text">￥</text>
          <text class="font-size-base color-base-text">{{ detail.real_goods_money }}</text>
        </view>
      </view>
    </view>

    <view class="block-wrap log">
      <view class="title color-base-text">{{ $t('order.refund.detail.refund_log') }}</view>
      <view class="item" v-for="(item, index) in detail.refund_log_list" :key="index">
        <text class="tag" v-if="item.action_way == 1">{{ $t('order.refund.detail.buyer') }}</text>
        <text class="tag color-base-bg" v-else-if="item.action_way == 2">{{ $t('order.refund.detail.merchant') }}</text>
        <text class="tag platform" v-else>{{ $t('order.refund.detail.platform') }}</text>
        <text class="action">{{ item.action }}</text>
        <text class="time">{{ $util.timeStampTurnTime(item.action_time) }}</text>
      </view>
    </view>

    <view class="block-wrap tips">
      <view class="title color-base-text">{{ $t('order.refund.detail.reminder') }}</view>
      <text>{{ $t('order.refund.detail.reminder_text1') }}</text>
      <text>{{ $t('order.refund.detail.reminder_text2') }}</text>
      <text>{{ $t('order.refund.detail.reminder_text3') }}</text>
    </view>

    <template v-if="detail.refund_action && detail.refund_action.length">
      <view class="placeholder-height"></view>
      <view class="footer-wrap">
        <view class="container">
          <button type="primary" size="mini" v-for="(actionItem, actionIndex) in detail.refund_action" :key="actionIndex" @click="orderAction(actionItem.event, orderGoodsId)">
            {{ actionItem.title }}
          </button>
        </view>
      </view>
    </template>
    <loading-cover ref="loadingCover"></loading-cover>
  </view>
</template>

<script>
import uniCountDown from '@/components/uni-count-down/uni-count-down.vue'
import refundAction from '../js/refund_action.js'
export default {
  data() {
    return {}
  },
  components: {
    uniCountDown
  },
  mixins: [refundAction],
  methods: {
    imgError(index) {
      this.detail.sku_image = this.$util.getDefaultImage().default_goods_img
      this.$forceUpdate()
    },
    orderAction(action, order_goods_id) {
      try {
        this[action](order_goods_id)
      } catch (e) {
        console.log('orderAction error：', e)
      }
    }
  }
}
</script>

<style lang="scss">
@import '../css/refund_detail.scss';
</style>
