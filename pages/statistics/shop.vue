<template>
  <view class="withdrawal safe-area">
    <view class="withdrawal_item">
      <view class="withdrawal_title">
        <view class="withdrawal_title_info">
          <text class="line color-base-bg margin-right"></text>
          <text>{{ $t('statistics.shop.realtime_overview') }}</text>
        </view>
        <picker :value="pickerCurr.gaikuang" @change="pickerChangeShop" :range="picker.gaikuang" range-key="date_text">
          <view class="select color-tip">
            {{ picker.gaikuang[pickerCurr.gaikuang].date_text }}
            <text class="iconfont iconiconangledown"></text>
          </view>
        </picker>
      </view>
      <view class="withdrawal_content margin-top">
        <view class="flex_two">
          <view class="flex_two-item">
            <view class="tip">{{ $t('statistics.shop.new_goods') }}</view>
            <view class="num">{{ shop_info.add_goods_count }}</view>
          </view>
          <view class="flex_two-item">
            <view class="tip">{{ $t('statistics.shop.goods_views') }}</view>
            <view class="num">{{ shop_info.visit_count }}</view>
          </view>
          <view class="flex_two-item">
            <view class="tip">{{ $t('statistics.shop.goods_favorites') }}</view>
            <view class="num">{{ shop_info.collect_goods }}</view>
          </view>
          <view class="flex_two-item">
            <view class="tip">{{ $t('statistics.shop.order_goods') }}</view>
            <view class="num">{{ shop_info.goods_pay_count }}</view>
          </view>
          <view class="flex_two-item">
            <view class="tip">{{ $t('statistics.shop.shop_favorites') }}</view>
            <view class="num">{{ shop_info.collect_shop }}</view>
          </view>
          <view class="flex_two-item">
            <view class="tip">{{ $t('statistics.shop.order_amount_tip') }}</view>
            <view class="num">{{ shop_info.order_total }}</view>
          </view>
          <view class="flex_two-item border_none">
            <view class="tip">{{ $t('statistics.shop.order_count') }}</view>
            <view class="num">{{ shop_info.order_pay_count }}</view>
          </view>
        </view>
      </view>
    </view>
    <block v-for="(item, index) in arr" :key="index">
      <view class="withdrawal_item margin-top">
        <view class="withdrawal_title">
          <view class="withdrawal_title_info">
            <text class="line color-base-bg margin-right"></text>
            {{ item.title }}
            <text v-if="item.opts.unit">({{ item.opts.unit }})</text>
            <text class="margin-left total">{{ total_money[item.id] }}</text>
          </view>
          <picker :value="pickerCurr.table" @change="bindPickerChange(item.id, $event)" :range="picker.table" range-key="date_text" @click="selectCharts(item.id)">
            <view class="select color-tip color-base-text">
              {{ picker.table[pickerCurr[item.id]].date_text }}
              <text class="iconfont iconiconangledown"></text>
            </view>
          </picker>
        </view>
        <view class="withdrawal_content margin-top">
          <view class="charts">
            <view @click="refCurr = item.id">
              <uCharts
                :scroll="item.opts.enableScroll"
                :show="canvas"
                :canvasId="item.id"
                :chartType="item.chartType"
                :extraType="item.extraType"
                :cWidth="cWidth"
                :cHeight="cHeight"
                :opts="item.opts"
                :ref="item.id"
              />
            </view>
          </view>
        </view>
      </view>
    </block>
    <loading-cover ref="loadingCover"></loading-cover>
  </view>
</template>

<script>
import uCharts from '@/components/u-charts/u-charts.vue'
import shop from './js/shop.js'
export default {
  components: {
    uCharts
  },
  mixins: [shop]
}
</script>

<style lang="scss">
@import './css/overview.scss';
</style>
