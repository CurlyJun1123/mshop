<template>
  <view class="withdrawal">
    <mescroll-uni ref="mescroll" @getData="getList" :fixed="!1">
      <block slot="list">
        <view class="withdrawal_item margin-top">
          <view class="withdrawal_title">
            <text class="line color-base-bg margin-right"></text>
            <text>{{ $t('property.dashboard.account_overview') }}</text>
          </view>
          <view class="withdrawal_content">
            <view class="flex_two">
              <view class="flex_two-item">
                <view class="tip">{{ $t('property.dashboard.shop_total_income') }}</view>
                <view class="num">{{ base_info.total }}</view>
              </view>
              <view class="flex_two-item">
                <view class="tip">
                  {{ $t('property.dashboard.available_balance') }}
                  <text class="margin-left font-size-tag color-base-text" @click="$util.redirectTo('/pages/property/withdraw/index')">{{ $t('property.dashboard.withdraw') }}</text>
                </view>
                <view class="num">{{ base_info.account }}</view>
              </view>
              <view class="flex_two-item">
                <view class="tip">
                  {{ $t('property.dashboard.pending_settlement') }}
                  <text class="margin-left font-size-tag color-base-text" @click="$util.redirectTo('/pages/property/dashboard/orderlist')">{{ $t('property.dashboard.view_details') }}</text>
                </view>
                <view class="num">{{ base_info.order_apply }}</view>
              </view>
              <view class="flex_two-item">
                <view class="tip">{{ $t('property.dashboard.entry_fee') }}</view>
                <view class="num">{{ base_info.shop_info.shop_open_fee }}</view>
              </view>
              <view class="flex_two-item">
                <view class="tip">{{ $t('property.dashboard.shop_deposit') }}</view>
                <view class="num">{{ base_info.shop_info.shop_baozhrmb }}</view>
              </view>
              <view class="flex_two-item">
                <view class="tip">
                  {{ $t('property.dashboard.withdrawn') }}
                  <text class="margin-left font-size-tag color-base-text" @click="$util.redirectTo('/pages/property/withdraw/list')">{{ $t('property.dashboard.withdrawal_records') }}</text>
                </view>
                <view class="num">{{ base_info.account_withdraw }}</view>
              </view>
              <view class="flex_two-item border_none">
                <view class="tip">{{ $t('property.dashboard.withdrawing') }}</view>
                <view class="num">{{ base_info.account_withdraw_apply }}</view>
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
            <view class="search_btn color-tip" @click="search"><text class="iconfont iconsousuo"></text></view>
            <view class="date">
              <picker mode="date" @change="bindStartDateChange" class="start">
                <view class="uni-input font-size-tag">{{ dateObj.startDate ? dateObj.startDate : '开始时间' }}</view>
              </picker>
              <text class="">-</text>
              <picker mode="date" @change="bindEndDateChange" class="end">
                <view class="uni-input font-size-tag">{{ dateObj.endDate ? dateObj.endDate : '结束时间' }}</view>
              </picker>
              <text class="clear iconfont iconqingkong1" @click="clearTime"></text>
            </view>
          </view>
        </view>

        <view class="withdrawal_item">
          <block v-if="dashboard_list.length > 0">
            <view class="withdrawal_content" :class="{ 'margin-top': index > 0 }" v-for="(item, index) in dashboard_list" :key="index">
              <view class="withdrawal_list">
                <view class="withdrawal_list_title">
                  <view class="tip color-tip">{{ item.account_no }}</view>
                </view>
                <view class="withdrawal_list_info">
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.dashboard.income_source') }}</view>
                    <view>{{ item.type_name }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.dashboard.amount') }}</view>
                    <view :class="{ red: item.account_data > 0, green: item.account_data < 0 }">{{ item.account_data > 0 ? '+' : '' }}{{ item.account_data }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.dashboard.transaction_type') }}</view>
                    <view>{{ item.account_data >= 0 ? '收入' : '支出' }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.dashboard.time') }}</view>
                    <view>{{ $util.timeStampTurnTime(item.create_time) }}</view>
                  </view>
                  <view class="margin-top color-tip mark">{{ $t('property.dashboard.description') }}：{{ item.remark }}</view>
                </view>
              </view>
            </view>
          </block>
          <ns-empty v-else :text="$t('property.dashboard.no_account_data')"></ns-empty>
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
        { type: 0, type_name: this.$t('property.dashboard.all') },
        { type: 1, type_name: this.$t('property.dashboard.income') },
        { type: 2, type_name: this.$t('property.dashboard.expense') }
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
    if (!this.$util.checkToken('/pages/property/dashboard/index')) return

    this.selectType = [
      { type: 0, type_name: this.$t('property.dashboard.all') },
      { type: 1, type_name: this.$t('property.dashboard.income') },
      { type: 2, type_name: this.$t('property.dashboard.expense') }
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
    //清空时间
    clearTime() {
      this.dateObj.startDate = ''
      this.dateObj.endDate = ''
    },
    search() {
      this.$refs.mescroll.refresh()
    },
    getBaseInfo() {
      this.$api.sendRequest({
        url: '/shopapi/account/index',
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
        type: this.selectTypeCurr
      }
      if (this.dateObj.startDate) {
        data.start_time = this.$util.timeTurnTimeStamp(this.dateObj.startDate)
      }
      if (this.dateObj.endDate) {
        data.end_time = this.$util.timeTurnTimeStamp(this.dateObj.endDate)
      }
      if (data.start_time && data.end_time && data.start_time > data.end_time) {
        this.$util.showToast({
          title: this.$t('property.dashboard.start_time_error')
        })
        this.dateObj.endDate = ''
        return false
      }
      this.$api.sendRequest({
        url: '/shopapi/account/dashboard',
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
