<template>
  <view class="withdrawal">
    <mescroll-uni ref="mescroll" @getData="getList" :fixed="!1">
      <block slot="list">
        <view class="operate_tip">
          <view @click="tipShow = !tipShow">
            {{ $t('property.operation_tips') }}
            <text class="iconfont iconiconangledown"></text>
          </view>
          <view class="operate_content" v-if="tipShow">
            <view class="color-tip font-size-tag margin-top">
              <text class="margin-right">●</text>
              <view class="color-tip font-size-tag">
                {{ $t('property.shop_income_formula') }}
              </view>
            </view>
            <view class="color-tip font-size-tag">
              <text class="margin-right">●</text>
              <view class="color-tip font-size-tag">{{ $t('property.platform_commission_formula') }}</view>
            </view>
          </view>
        </view>
        <view class="withdrawal_item margin-top">
          <view class="withdrawal_title">
            <text class="line color-base-bg margin-right"></text>
            {{ $t('property.shop_settlement') }}
          </view>
          <view class="withdrawal_content">
            <view class="flex_two">
              <view class="flex_two-item">
                <view class="tip">{{ $t('property.shop_income_amount') }}</view>
                <view class="num">￥{{ base_info.shop_money ? base_info.shop_money : '0.00' }}</view>
              </view>
              <view class="flex_two-item">
                <view class="tip">{{ $t('property.shop_total_settlement') }}</view>
                <view class="num">￥{{ base_info.info.shop_money ? base_info.info.shop_money : '0.00' }}</view>
              </view>
              <view class="flex_two-item">
                <view class="tip">{{ $t('property.shop_refund_amount') }}</view>
                <view class="num">{{ base_info.info.refund_shop_money ? base_info.info.refund_shop_money : '0.00' }}</view>
              </view>
              <view class="flex_two-item">
                <view class="tip">{{ $t('property.commission_amount') }}</view>
                <view class="num">￥{{ base_info.info.commission ? base_info.info.commission : '0.00' }}</view>
              </view>
              <view class="flex_two-item">
                <view class="tip">{{ $t('property.platform_commission_amount') }}</view>
                <view class="num">￥{{ base_info.money ? base_info.money : '0.00' }}</view>
              </view>
              <view class="flex_two-item">
                <view class="tip">{{ $t('property.platform_total_commission') }}</view>
                <view class="num">￥{{ base_info.info.platform_money ? base_info.info.platform_money : '0.00' }}</view>
              </view>
              <view class="flex_two-item">
                <view class="tip">{{ $t('property.platform_refund_commission') }}</view>
                <view class="num">￥{{ base_info.info.refund_platform_money ? base_info.info.refund_platform_money : '0.00' }}</view>
              </view>
              <view class="flex_two-item">
                <view class="tip">{{ $t('property.platform_coupon_amount') }}</view>
                <view class="num">￥{{ base_info.info.platform_coupon_money ? base_info.info.platform_coupon_money : '0.00' }}</view>
              </view>
              <view class="flex_one-item border_none">
                <view class="tip">{{ $t('property.platform_refund_coupon_amount') }}</view>
                <view class="num">￥{{ base_info.info.refund_platform_coupon_money ? base_info.info.refund_platform_coupon_money : '0.00' }}</view>
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
                </view>
                <view class="withdrawal_list_info">
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.order_sales') }}</view>
                    <view>{{ item.order_money }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.order_refund') }}</view>
                    <view>{{ item.refund_money }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.commission') }}</view>
                    <view>{{ item.commission }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.platform_coupon') }}</view>
                    <view>{{ item.platform_coupon_money }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.platform_refund_coupon') }}</view>
                    <view>{{ item.refund_platform_coupon_money }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.shop_income') }}</view>
                    <view>{{ item.shop_money }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.platform_commission') }}</view>
                    <view>{{ item.platform_money }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.order_complete_time') }}</view>
                    <view>{{ $util.timeStampTurnTime(item.finish_time) }}</view>
                  </view>
                </view>
              </view>
            </view>
          </block>
          <ns-empty v-else :text="$t('property.no_settlement_data')"></ns-empty>
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
      base_info: {
        info: {
          shop_money: '0.00',
          refund_shop_money: '0.00',
          commission: '0.00',
          platform_money: '0.00',
          refund_platform_money: '0.00',
          platform_coupon_money: '0.00',
          refund_platform_coupon_money: '0.00'
        },
        money: '0.00'
      },
      dashboard_list: []
    }
  },
  onShow() {
    if (!this.$util.checkToken('/pages/property/settlement/detail?id=' + this.id)) return
  },
  async onLoad(option) {
    if (option.id) {
      this.id = option.id
      await this.getBaseInfo()
    } else {
      this.$util.goBack('/pages/property/settlement/list')
    }
  },
  methods: {
    search() {
      this.$refs.mescroll.refresh()
    },
    async getBaseInfo() {
      var res = await this.$api.sendRequest({
        url: '/shopapi/settlement/info',
        data: {
          id: this.id
        },
        async: false
      })
      if (res.code >= 0) {
        this.base_info = res.data
      } else {
        this.$util.showToast({
          title: res.message
        })
      }
    },
    getList(mescroll) {
      var data = {
        page: mescroll.num,
        page_size: mescroll.size,
        id: this.id
      }
      this.$api.sendRequest({
        url: '/shopapi/settlement/detail',
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
</style>
