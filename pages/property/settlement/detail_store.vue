<template>
  <view class="withdrawal">
    <mescroll-uni ref="mescroll" @getData="getList" :fixed="!1">
      <block slot="list">
        <view class="operate_tip">
          <view @click="tipShow = !tipShow">
            {{ $t('property.settlement.detail_store.operation_tips') }}
            <text class="iconfont iconiconangledown"></text>
          </view>
          <view class="operate_content" v-if="tipShow">
            <view class="font-size-tag margin-top">
              <text class="margin-right color-tip">●</text>
              <view class="color-tip font-size-tag">
                {{ $t('property.settlement.detail_store.account_period') }}：
                <text class="color-base-text">
                  <block v-if="base_info.start_time">{{ $util.timeStampTurnTime(base_info.start_time) }}</block>
                  <block v-else>{{ $util.timeStampTurnTime(base_info.create_time) }}</block>
                </text>
                {{ $t('property.settlement.detail_store.to') }}
                <text class="color-base-text">{{ $util.timeStampTurnTime(base_info.end_time) }}</text>
              </view>
            </view>
            <view class="font-size-tag">
              <text class="margin-right color-tip">●</text>
              <view class="color-tip font-size-tag">
                {{ $t('property.settlement.detail_store.online_settlement') }} = {{ $t('property.settlement.detail_store.shop_total') }}(
                <text class="color-base-text">￥{{ base_info.shop_money ? base_info.shop_money : '0.00' }}</text>
                ) - {{ $t('property.settlement.detail_store.refund_amount') }}(
                <text class="color-base-text">￥{{ base_info.refund_shop_money ? base_info.refund_shop_money : '0.00' }}</text>
                ) - {{ $t('property.settlement.detail_store.commission_amount') }}(
                <text class="color-base-text">￥{{ base_info.commission ? base_info.commission : '0.00' }}</text>
                ) + {{ $t('property.settlement.detail_store.platform_coupon') }}(
                <text class="color-base-text">￥{{ base_info.platform_coupon_money ? base_info.platform_coupon_money : '0.00' }}</text>
                ) - {{ $t('property.settlement.detail_store.platform_coupon_refund') }}(
                <text class="color-base-text">￥{{ base_info.refund_platform_coupon_money ? base_info.refund_platform_coupon_money : '0.00' }}</text>
                )
              </view>
            </view>
            <view class="font-size-tag">
              <text class="margin-right color-tip">●</text>
              <view class="color-tip font-size-tag">
                {{ $t('property.settlement.detail_store.offline_settlement') }} = {{ $t('property.settlement.detail_store.offline_order') }}(
                <text class="color-base-text">￥{{ base_info.offline_order_money ? base_info.offline_order_money : '0.00' }}</text>
                ) - {{ $t('property.settlement.detail_store.refund_amount') }}(
                <text class="color-base-text">￥{{ base_info.offline_refund_money ? base_info.offline_refund_money : '0.00' }}</text>
                ) + {{ $t('property.settlement.detail_store.platform_coupon') }}(
                <text class="color-base-text">￥{{ base_info.offline_platform_coupon_money ? base_info.offline_platform_coupon_money : '0.00' }}</text>
                ) - {{ $t('property.settlement.detail_store.platform_coupon_refund') }}(
                <text class="color-base-text">￥{{ base_info.offline_refund_platform_coupon_money ? base_info.offline_refund_platform_coupon_money : '0.00' }}</text>
                )
              </view>
            </view>
            <view class="font-size-tag">
              <text class="margin-right color-tip">●</text>
              <view class="color-tip font-size-tag">
                {{ $t('property.settlement.detail_store.platform_deduction') }}(
                <text class="color-base-text">
                  ￥{{ base_info.platform_money - base_info.refund_platform_money ? base_info.platform_money - base_info.refund_platform_money : '0.00' }}
                </text>
                ) = {{ $t('property.settlement.detail_store.platform_total_deduction') }}(
                <text class="color-base-text">￥{{ base_info.platform_money ? base_info.platform_money : '0.00' }}</text>
                ) - {{ $t('property.settlement.detail_store.platform_refund_deduction') }}(
                <text class="color-base-text">￥{{ base_info.refund_platform_money ? base_info.refund_platform_money : '0.00' }}</text>
                )
              </view>
            </view>
            <view class="font-size-tag">
              <text class="margin-right color-tip">●</text>
              <view class="color-tip font-size-tag">
                {{ $t('property.settlement.detail_store.offline_payment') }}
                <text class="color-base-text">￥{{ base_info.offline_order_money ? base_info.offline_order_money : '0.00' }}</text>
              </view>
            </view>
            <view class="font-size-tag">
              <text class="margin-right color-tip">●</text>
              <view class="color-tip font-size-tag">
                {{ $t('property.settlement.detail_store.offline_refund') }}
                <text class="color-base-text">￥{{ base_info.offline_refund_money ? base_info.offline_refund_money : '0.00' }}</text>
              </view>
            </view>
          </view>
        </view>

        <view class="withdrawal_item">
          <block v-if="dashboard_list.length > 0">
            <view class="withdrawal_content margin-top" v-for="(item, index) in dashboard_list" :key="index">
              <view class="withdrawal_list">
                <view class="withdrawal_list_title">
                  <view class="tip color-tip">{{ item.order_no }}</view>
                  <!-- <view class="color-tip"><text class="iconfont iconreview"></text></view> -->
                </view>
                <view class="withdrawal_list_info">
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.settlement.detail_store.payment_method') }}</view>
                    <view>{{ item.pay_type_name }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.settlement.detail_store.order_sales') }}</view>
                    <view>{{ item.order_money }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.settlement.detail_store.order_refund') }}</view>
                    <view>{{ item.refund_money }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.settlement.detail_store.commission') }}</view>
                    <view>{{ item.commission }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.settlement.detail_store.platform_coupon_amount') }}</view>
                    <view>{{ item.platform_coupon_money }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.settlement.detail_store.platform_coupon_refund_amount') }}</view>
                    <view>{{ item.refund_platform_coupon_money }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.settlement.detail_store.store_income') }}</view>
                    <view>{{ item.shop_money }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.settlement.detail_store.platform_commission') }}</view>
                    <view>{{ item.platform_money }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.settlement.detail_store.order_complete_time') }}</view>
                    <view>{{ item.finish_time ? $util.timeStampTurnTime(item.finish_time) : '--' }}</view>
                  </view>
                </view>
              </view>
            </view>
          </block>
          <ns-empty v-else :text="$t('property.settlement.no_order_data')"></ns-empty>
        </view>
      </block>
    </mescroll-uni>
    <loading-cover ref="loadingCover"></loading-cover>
  </view>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      tipShow: true,
      base_info: {},
      dashboard_list: []
    }
  },
  onShow() {
    if (!this.$util.checkToken('/pages/property/settlement/settlement/detail_store?id=' + this.id)) return
  },
  onLoad(option) {
    if (option.id) {
      this.id = option.id
      this.getBaseInfo()
    } else {
      this.$util.goBack('/pages/property/settlement/list_store')
    }
  },
  methods: {
    search() {
      this.$refs.mescroll.refresh()
    },
    getBaseInfo() {
      this.$api.sendRequest({
        url: '/store/shopapi/settlement/info',
        data: {
          settlement_id: this.id
        },
        success: (res) => {
          if (res.code >= 0) {
            this.base_info = res.data
          } else {
            this.$util.showToast({
              title: res.message
            })
          }
        }
      })
    },
    getList(mescroll) {
      var data = {
        page: mescroll.num,
        page_size: mescroll.size,
        settlement_id: this.id
      }
      this.$api.sendRequest({
        url: '/store/shopapi/settlement/detail',
        data: data,
        success: (res) => {
          let newArr = []
          let msg = res.message
          if (res.code == 0 && res.data) {
            if (res.data.page_count == 0) {
              this.emptyShow = true
            }
            newArr = res.data.list
          } else {
            this.$util.showToast({
              title: msg
            })
          }
          mescroll.endSuccess(newArr.length)
          //设置列表数据
          if (mescroll.num == 1) this.dashboard_list = [] //如果是第一页需手动制空列表
          this.dashboard_list = this.dashboard_list.concat(newArr) //追加新数据
          if (this.$refs.loadingCover) this.$refs.loadingCover.hide()
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '../css/common.scss';

.withdrawal {
  padding: 30rpx 0;

  .withdrawal_item {
    margin: 0 $margin-both;
    .withdrawal_title {
      font-size: $font-size-toolbar;
      font-weight: bold;
      .line {
        display: inline-block;
        height: 28rpx;
        width: 4rpx;
        border-radius: 4rpx;
      }
    }
    .withdrawal_content {
      background-color: #fff;
      border-radius: $border-radius;
      &.margin-top {
        margin-top: $margin-both !important;
      }
      .flex_two {
        display: flex;
        flex-wrap: wrap;
        .flex_two-item {
          padding: 40rpx 30rpx;
          width: calc(50% - 60rpx - 1px);
          border-bottom: 1px solid $color-line;
          &:nth-child(2n + 1) {
            border-right: 1px solid $color-line;
          }
          &.border_none {
            border-bottom: 0;
          }
          .tip {
            font-size: $font-size-tag;
          }
          .num {
            font-size: 36rpx;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      .withdrawal_list {
        .withdrawal_list_title {
          padding: 30rpx;
          border-bottom: 1px solid $color-line;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .withdrawal_list_info {
          padding: 30rpx;
          .withdrawal_list_base {
            display: flex;
            .tip {
              width: 260rpx;
            }
          }
          .mark {
            word-wrap: break-word;
            word-break: break-all;
            font-size: $font-size-tag;
          }
        }
      }
    }
  }
}
</style>
