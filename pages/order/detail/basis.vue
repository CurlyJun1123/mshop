<template>
  <view class="order-detail-wrap">
    <!-- 订单状态 -->
    <view class="status-wrap color-base-bg" :style="{ backgroundImage: 'url(' + $util.img('upload/uniapp/order/status-wrap-bg.png') + ')' }">
      <view class="container">
        <image :src="$util.img(orderDetail.order_status_action.icon)"></image>
        <view class="status-name">
          <view>{{ orderDetail.order_status_name }}</view>
          <view class="time" v-if="orderDetail.order_status == 3">
            <text>{{ $t('order.detail.basis.auto_receive') }}</text>
            <uni-count-down
              :day="orderDetail.take_delivery_execute_time.d"
              :hour="orderDetail.take_delivery_execute_time.h"
              :minute="orderDetail.take_delivery_execute_time.i"
              :second="orderDetail.take_delivery_execute_time.s"
              color="#fff"
              splitorColor="#fff"
              :showColon="false"
              borderColor="transparent"
              backgroundColor="transparent"
            />
            <text>{{ $t('order.detail.basis.auto_receive_time') }}</text>
          </view>
        </view>
      </view>
    </view>

    <!-- 地址信息 -->
    <view class="address-wrap">
      <view class="icon"><view class="iconfont iconlocation"></view></view>
      <view class="address-info">
        <view class="info">{{ orderDetail.name }} {{ orderDetail.mobile }}</view>
        <view class="detail">{{ $t('order.detail.basis.shipping_address') }}{{ orderDetail.full_address }} {{ orderDetail.address }}</view>
      </view>
    </view>

    <!-- 店铺 -->
    <view class="block-wrap">
      <view class="goods-item" v-for="(goods, goodsIndex) in orderDetail.order_goods" :key="goodsIndex">
        <view class="goods-img"><image :src="$util.img(goods.sku_image, { size: 'mid' })" mode="widthFix" @error="imgError(goodsIndex)"></image></view>
        <view class="info-wrap">
          <view class="name-wrap">{{ goods.goods_name }}</view>
          <view class="spec-wrap" v-if="goods.sku_spec_format">
            <block v-for="(x, i) in goods.sku_spec_format" :key="i">{{ x.spec_value_name }} {{ i < goods.sku_spec_format.length - 1 ? '; ' : '' }}</block>
          </view>
          <view class="more-wrap">
            <view class="goods-class">{{ goods.goods_class_name }}</view>
            <text class="present-label color-base-bg" v-if="goods.is_present == 1">{{ $t('order.detail.basis.gift') }}</text>
            <view class="price-wrap">
              <view class="price">
                <text class="unit">￥</text>
                <text>{{ goods.price }}</text>
              </view>
              <view class="num">x{{ goods.num }}</view>
            </view>
          </view>
          <view class="delivery-status-name color-base-text">{{ goods.delivery_status_name }}</view>
        </view>
        <view class="action-wrap" v-if="goods.refund_status != 0" @click.stop="goRefund(goods.order_goods_id)">
          <button type="primary" size="mini">{{ goods.refund_status_name }}</button>
        </view>
      </view>
    </view>

    <!-- 订单信息 -->
    <view class="block-wrap">
      <view class="title">{{ $t('order.detail.basis.order_info') }}</view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.detail.basis.order_number') }}</text>
        <view class="box">{{ orderDetail.order_no }}</view>
        <view class="copy color-base-text" @click="$util.copy(orderDetail.order_no)">{{ $t('order.detail.basis.copy') }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.detail.basis.order_type') }}</text>
        <view class="box">{{ orderDetail.order_type_name }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.detail.basis.order_source') }}</text>
        <view class="box">{{ orderDetail.order_from_name }}</view>
      </view>
      <view class="order-cell" v-if="orderDetail.pay_status > 0">
        <text class="tit">{{ $t('order.detail.basis.payment_method') }}</text>
        <view class="box">{{ orderDetail.pay_type_name }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.detail.basis.buyer') }}</text>
        <view class="box">{{ orderDetail.nickname }}</view>
      </view>
      <view class="order-cell" v-if="orderDetail.delivery_type_name">
        <text class="tit">{{ $t('order.detail.basis.delivery_method') }}</text>
        <view class="box">{{ orderDetail.delivery_type_name }}</view>
      </view>
      <view class="order-cell" v-if="orderDetail.promotion_type_name != ''">
        <text class="tit">{{ $t('order.detail.basis.marketing_activity') }}</text>
        <view class="box">{{ orderDetail.promotion_type_name }}</view>
      </view>
      <view class="order-cell" v-if="orderDetail.buyer_message != ''">
        <text class="tit">{{ $t('order.detail.basis.buyer_message') }}</text>
        <view class="box">{{ orderDetail.buyer_message }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.detail.basis.create_time') }}</text>
        <view class="box">{{ $util.timeStampTurnTime(orderDetail.create_time) }}</view>
      </view>
      <view class="order-cell" v-if="orderDetail.close_time > 0">
        <text class="tit">{{ $t('order.detail.basis.close_time') }}</text>
        <view class="box">{{ $util.timeStampTurnTime(orderDetail.close_time) }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.detail.basis.payment_time') }}</text>
        <view class="box">{{ $util.timeStampTurnTime(orderDetail.pay_time) }}</view>
      </view>
      <view class="order-cell" v-if="orderDetail.remark">
        <text class="tit">{{ $t('order.detail.basis.seller_note') }}</text>
        <view class="box">{{ orderDetail.remark }}</view>
      </view>
    </view>

    <!-- 发票信息 -->
    <template v-if="orderDetail.is_invoice == 1">
      <view class="block-wrap">
        <view class="title">{{ $t('order.detail.basis.invoice_info') }}</view>
        <view class="order-cell">
          <text class="tit">{{ $t('order.detail.basis.invoice_type') }}</text>
          <view class="box">
            {{ orderDetail['invoice_type'] == 1 ? $t('order.detail.basis.paper') : $t('order.detail.basis.electronic') }}
            {{ orderDetail['is_tax_invoice'] == 1 ? $t('order.detail.basis.special') : $t('order.detail.basis.general') }}
          </view>
        </view>
        <view class="order-cell">
          <text class="tit">{{ $t('order.detail.basis.invoice_title') }}</text>
          <view class="box">{{ orderDetail.invoice_title }}</view>
        </view>
        <view class="order-cell">
          <text class="tit">{{ $t('order.detail.basis.title_type') }}</text>
          <view class="box">{{ orderDetail.invoice_title_type == 1 ? $t('order.detail.basis.personal') : $t('order.detail.basis.enterprise') }}</view>
        </view>
        <view class="order-cell" v-if="orderDetail.invoice_title_type == 2">
          <text class="tit">{{ $t('order.detail.basis.taxpayer_number') }}</text>
          <view class="box">{{ orderDetail.taxpayer_number }}</view>
        </view>
        <view class="order-cell">
          <text class="tit">{{ $t('order.detail.basis.invoice_content') }}</text>
          <view class="box">{{ orderDetail.invoice_content }}</view>
        </view>
        <view class="order-cell" v-if="orderDetail.invoice_title_type == 1">
          <text class="tit">{{ $t('order.detail.basis.mailing_address') }}</text>
          <view class="box">{{ orderDetail.invoice_full_address }}</view>
        </view>
        <view class="order-cell" v-else>
          <text class="tit">{{ $t('order.detail.basis.receiving_email') }}</text>
          <view class="box">{{ orderDetail.invoice_email }}</view>
        </view>
      </view>

      <view class="block-wrap">
        <view class="title">{{ $t('order.detail.basis.invoice_cost') }}</view>
        <view class="order-cell">
          <text class="tit">{{ $t('order.detail.basis.invoice_fee') }}</text>
          <view class="box align-right money">￥{{ orderDetail.invoice_money }}</view>
        </view>
        <view class="order-cell">
          <text class="tit">{{ $t('order.detail.basis.invoice_tax_rate') }}</text>
          <view class="box align-right money">{{ orderDetail.invoice_rate }}%</view>
        </view>
        <view class="order-cell">
          <text class="tit">{{ $t('order.detail.basis.shipping_fee') }}</text>
          <view class="box align-right money">￥{{ orderDetail.invoice_delivery_money }}</view>
        </view>
      </view>
    </template>

    <view class="block-wrap tit-auto" v-if="orderDetail.pay_status > 0">
      <view class="title">{{ $t('order.detail.basis.settlement_info') }}</view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.detail.basis.shop_settlement') }}</text>
        <view class="box align-right money">￥{{ orderDetail.shop_money }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.detail.basis.platform_settlement') }}</text>
        <view class="box align-right money">￥{{ orderDetail.platform_money }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.detail.basis.settlement_status') }}</text>
        <view class="box align-right money">{{ orderDetail.is_settlement == 1 ? $t('order.detail.basis.settled') : $t('order.detail.basis.pending_settlement') }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.detail.basis.shop_refund') }}</text>
        <view class="box align-right money">￥{{ orderDetail.refund_shop_money }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.detail.basis.platform_refund') }}</text>
        <view class="box align-right money">￥{{ orderDetail.refund_platform_money }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.detail.basis.platform_coupon_amount') }}</text>
        <view class="box align-right money">￥{{ orderDetail.platform_coupon_money }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.detail.basis.platform_coupon_refund') }}</text>
        <view class="box align-right money">￥{{ orderDetail.refund_platform_coupon_money }}</view>
      </view>
      <view class="order-cell">
        <text class="tit">{{ $t('order.detail.basis.total_commission') }}</text>
        <view class="box align-right money">￥{{ orderDetail.commission }}</view>
      </view>
    </view>

    <!-- 订单金额 -->
    <view class="block-wrap">
      <view class="order-cell">
        <text class="tit">{{ $t('order.detail.basis.goods_amount') }}</text>
        <view class="box align-right money bold">
          <text class="font-size-goods-tag">￥</text>
          <text class="color-title">{{ orderDetail.goods_money }}</text>
        </view>
      </view>
      <view class="order-cell" v-if="orderDetail.coupon_money > 0">
        <text class="tit">{{ $t('order.detail.basis.shop_coupon') }}</text>
        <view class="box align-right money bold">
          <text class="operator">-</text>
          <text class="font-size-goods-tag">￥</text>
          <text>{{ orderDetail.coupon_money }}</text>
        </view>
      </view>
      <view class="order-cell" v-if="orderDetail.promotion_money > 0">
        <text class="tit">{{ $t('order.detail.basis.shop_discount') }}</text>
        <view class="box align-right money bold">
          <text class="operator">-</text>
          <text class="font-size-goods-tag">￥</text>
          <text>{{ orderDetail.promotion_money }}</text>
        </view>
      </view>
      <view class="order-cell" v-if="orderDetail.adjust_money != 0">
        <text class="tit">{{ $t('order.detail.basis.order_adjustment') }}</text>
        <view class="box align-right money bold">
          <text class="operator" v-if="orderDetail.adjust_money < 0">-</text>
          <text class="operator" v-else>+</text>
          <text class="font-size-goods-tag">￥</text>
          <text>{{ orderDetail.adjust_money | abs }}</text>
        </view>
      </view>
      <view class="order-cell" v-if="orderDetail.delivery_money > 0">
        <text class="tit">{{ $t('order.detail.basis.shipping') }}</text>
        <view class="box align-right money bold">
          <text class="font-size-goods-tag">￥</text>
          <text>{{ orderDetail.delivery_money }}</text>
        </view>
      </view>
      <view class="order-cell" v-if="orderDetail.platform_coupon_total_money > 0">
        <text class="tit">{{ $t('order.detail.basis.platform_coupon') }}</text>
        <view class="box align-right money bold">
          <text class="operator">-</text>
          <text class="font-size-goods-tag">￥</text>
          <text>{{ orderDetail.platform_coupon_total_money }}</text>
        </view>
      </view>
      <view class="order-cell" v-if="orderDetail.balance_money > 0">
        <text class="tit">{{ $t('order.detail.basis.balance_used') }}</text>
        <view class="box align-right money bold">
          <text class="operator">-</text>
          <text class="font-size-goods-tag">￥</text>
          <text>{{ orderDetail.balance_money }}</text>
        </view>
      </view>
      <view class="order-cell">
        <view class="box align-right money bold">
          <text>{{ $t('order.detail.basis.total_items') }}{{ orderDetail.goods_num }}{{ $t('order.detail.basis.items') }}</text>
          <text class="font-size-goods-tag color-base-text">￥</text>
          <text class="font-size-base color-base-text">{{ orderDetail.order_money }}</text>
        </view>
      </view>
    </view>
    <view class="block-wrap log" v-if="log.length">
      <view class="title color-base-text">{{ $t('order.detail.basis.order_log') }}</view>
      <view class="item" v-for="(item, index) in log" :key="index">
        <view class="action">
          <view class="title">
            <text class="font-size-base">{{ $t('order.detail.basis.operation') }}{{ item.action }}</text>
            <text class="color-sub time">{{ $util.timeStampTurnTime(item.action_time, 1) }}</text>
          </view>
          <view>
            <text class="color-tip">{{ $t('order.detail.basis.operator') }}{{ item.nick_name }}</text>
            <br />
            <text class="color-tip">{{ $t('order.detail.basis.operation_port') }}{{ item.module }}</text>
            <br />
            <text class="color-tip">{{ $t('order.detail.basis.order_status') }}{{ item.order_status_name }}</text>
          </view>
        </view>
      </view>
    </view>
    <view class="block-wrap tips">
      <view class="title color-base-text">{{ $t('order.detail.basis.reminder') }}</view>
      <text>{{ $t('order.detail.basis.reminder_text_1') }}</text>
      <text>{{ $t('order.detail.basis.reminder_text_2') }}</text>
      <text>{{ $t('order.detail.basis.reminder_text_3') }}</text>
    </view>

    <view class="placeholder-height"></view>

    <view class="footer-wrap">
      <view class="container">
        <button type="primary" size="mini" plain @click="orderRemark()">{{ $t('order.detail.basis.note') }}</button>
        <button type="primary" size="mini" plain @click="goLogistics()" v-if="orderDetail.package_list && orderDetail.package_list.length">{{ $t('order.detail.basis.view_logistics') }}</button>
        <button type="primary" size="mini" v-for="(actionItem, actionIndex) in orderDetail.order_status_action.action" :key="actionIndex" @click="orderAction(actionItem.action, orderId)">
          {{ actionItem.title }}
        </button>
        <button v-if="orderDetail.order_status == 0" type="primary" size="mini" @click="offlinePay(orderId)">{{ $t('order.detail.basis.offline_payment') }}</button>
      </view>
    </view>
    <ns-order-remark ref="orderRemark" :order="tempOrder"></ns-order-remark>
    <loading-cover ref="loadingCover"></loading-cover>
  </view>
</template>

<script>
import uniCountDown from '@/components/uni-count-down/uni-count-down.vue'
import nsOrderRemark from '@/components/ns-order-remark/ns-order-remark'
import action from '../js/action.js'
import detail from '../js/detail.js'
export default {
  components: {
    uniCountDown,
    nsOrderRemark
  },
  mixins: [action, detail]
}
</script>

<style lang="scss">
@import '../css/detail.scss';
</style>
<style scoped>
.time >>> .uni-countdown {
  margin: 0;
}
.time >>> .uni-countdown__number {
  border-radius: 0;
  padding: 0 4rpx;
  margin: 0;
  border: none;
  font-size: 14px;
  line-height: 1;
}
.time >>> .uni-countdown__splitor {
  font-size: 14px;
  line-height: 1;
}
</style>
