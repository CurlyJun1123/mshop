<template>
  <view class="withdrawal">
    <mescroll-uni ref="mescroll" @getData="getList" :fixed="!1">
      <block slot="list">
        <view class="withdrawal_item margin-top">
          <view class="withdrawal_title">
            <text class="line color-base-bg margin-right"></text>
            {{ $t('property.dashboard.orderlist.transaction_amount') }}
          </view>
          <view class="withdrawal_content">
            <view class="flex_two">
              <view class="flex_two-item">
                <view class="tip">{{ $t('property.dashboard.orderlist.pending_settlement') }}</view>
                <view class="num">{{ base_info.wait_settlement }}</view>
              </view>
              <view class="flex_two-item">
                <view class="tip">{{ $t('property.dashboard.orderlist.in_progress') }}</view>
                <view class="num">{{ base_info.settlement }}</view>
              </view>
              <view class="flex_two-item border_none">
                <view class="tip">{{ $t('property.dashboard.orderlist.settled') }}</view>
                <view class="num">{{ base_info.finish_settlement }}</view>
              </view>
            </view>
          </view>
        </view>
        <view class="search">
          <view class="search_select">
            <picker @change="bindTypeChange" :value="selectTypeCurr" :range="selectType" range-key="type_name">
              <view class="uni-input font-size-tag">{{ selectType[selectTypeCurr].type_name }}</view>
            </picker>
            <text class="iconfont iconiconangledown"></text>
          </view>
          <view class="search_input margin-left">
            <view class="date">
              <picker mode="date" @change="bindStartDateChange" class="margin-right">
                <view class="uni-input font-size-tag">{{ dateObj.startDate ? dateObj.startDate : $t('property.dashboard.orderlist.start_time') }}</view>
              </picker>
              <text class="margin-right">-</text>
              <picker mode="date" @change="bindEndDateChange">
                <view class="uni-input font-size-tag">{{ dateObj.endDate ? dateObj.endDate : $t('property.dashboard.orderlist.end_time') }}</view>
              </picker>
            </view>
            <view class="search_btn color-tip" @click="search"><text class="iconfont iconsousuo"></text></view>
          </view>
        </view>

        <view class="withdrawal_item">
          <block v-if="dashboard_list.length > 0">
            <view class="withdrawal_content" :class="{ 'margin-top': index > 0 }" v-for="(item, index) in dashboard_list" :key="index">
              <view class="withdrawal_list">
                <view class="withdrawal_list_title">
                  <view class="tip color-tip">{{ item.order_no }}</view>
                  <view class="color-tip font-size-tag">
                    {{ $t('property.dashboard.orderlist.order_status') }}
                    <text class="color-base-text">{{ item.order_status_name }}</text>
                  </view>
                </view>
                <view class="withdrawal_list_info">
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.dashboard.orderlist.order_amount') }}</view>
                    <view>{{ item.order_money }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.dashboard.orderlist.shop_refund_amount') }}</view>
                    <view>{{ item.refund_shop_money }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.dashboard.orderlist.platform_commission') }}</view>
                    <view>{{ item.platform_money }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.dashboard.orderlist.shop_amount') }}</view>
                    <view>{{ (item.order_money - item.refund_shop_money - item.platform_money) | moneyFormat }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.dashboard.orderlist.completion_time') }}</view>
                    <view>{{ item.finish_time ? $util.timeStampTurnTime(item.finish_time) : '--' }}</view>
                  </view>
                </view>
              </view>
            </view>
          </block>
          <ns-empty v-else :text="$t('property.dashboard.orderlist.no_order_data')"></ns-empty>
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
      selectType: [
        { order_status: 2, type_name: this.$t('property.dashboard.orderlist.pending_settlement_orders') },
        { order_status: 1, type_name: this.$t('property.dashboard.orderlist.in_progress_orders') },
        { order_status: 3, type_name: this.$t('property.dashboard.orderlist.settled_orders') }
      ],
      isFiexd: {
        fiexd: false,
        top: ''
      },
      dateObj: {
        startDate: '',
        endDate: ''
      },
      selectTypeCurr: 0,
      base_info: {
        shop_info: {
          shop_open_fee: 0
        }
      },
      dashboard_list: []
    }
  },
  onShow() {
    if (!this.$util.checkToken('/pages/property/dashboard/orderlist')) return

    this.selectType = [
      { order_status: 2, type_name: this.$t('property.dashboard.orderlist.pending_settlement_orders') },
      { order_status: 1, type_name: this.$t('property.dashboard.orderlist.in_progress_orders') },
      { order_status: 3, type_name: this.$t('property.dashboard.orderlist.settled_orders') }
    ]

    this.getBaseInfo()
  },
  methods: {
    //监听
    bindTypeChange(e) {
      ;(this.dateObj = {
        startDate: '',
        endDate: ''
      }),
        (this.selectTypeCurr = e.target.value)
      this.$refs.mescroll.refresh()
    },
    bindStartDateChange(e) {
      this.dateObj.startDate = e.detail.value
    },
    bindEndDateChange(e) {
      this.dateObj.endDate = e.detail.value
    },
    search() {
      this.$refs.mescroll.refresh()
    },
    getBaseInfo() {
      this.$api.sendRequest({
        url: '/shopapi/account/orderStat',
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
        order_status: this.selectType[this.selectTypeCurr].order_status
      }
      if (this.dateObj.startDate) {
        data.start_time = this.$util.timeTurnTimeStamp(this.dateObj.startDate)
      }
      if (this.dateObj.endDate) {
        data.end_time = this.$util.timeTurnTimeStamp(this.dateObj.endDate)
      }
      if (data.start_time && data.end_time && data.start_time > data.end_time) {
        this.$util.showToast({
          title: this.$t('property.dashboard.orderlist.start_time_greater')
        })
        this.dateObj.endDate = ''
        return false
      }
      this.$api.sendRequest({
        url: '/shopapi/account/orderList',
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
          this.dashboard_list = this.dashboard_list.concat(newArr) //追加新数
          if (this.$refs.loadingCover) this.$refs.loadingCover.hide()
        }
      })
    }
  },
  filters: {
    /**
     * 金额格式化输出
     * @param {Object} money
     */
    moneyFormat(money) {
      return parseFloat(money).toFixed(2)
    }
  }
}
</script>

<style lang="scss">
@import '../css/common.scss';
</style>
