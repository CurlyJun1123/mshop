<template>
  <view class="withdrawal">
    <mescroll-uni ref="mescroll" @getData="getList" :fixed="!1">
      <block slot="list">
        <view class="withdrawal_item margin-top">
          <view class="withdrawal_title">
            <text class="line color-base-bg margin-right"></text>
            {{ $t('property.withdraw.list.amount') }}
          </view>
          <view class="withdrawal_content">
            <view class="flex_two">
              <view class="flex_two-item border_none">
                <view class="tip">
                  {{ $t('property.withdraw.list.withdrawn') }}
                  <text class="margin-left font-size-tag color-base-text" @click="$util.redirectTo('/pages/property/withdraw/index')">{{ $t('property.withdraw.list.apply') }}</text>
                </view>
                <view class="num">{{ base_info.account_withdraw }}</view>
              </view>
              <view class="flex_two-item border_none">
                <view class="tip">{{ $t('property.withdraw.list.processing') }}</view>
                <view class="num">{{ base_info.account_withdraw_apply }}</view>
              </view>
            </view>
          </view>
        </view>
        <view class="search">
          <view class="search_input">
            <view class="search_btn color-tip" @click="search"><text class="iconfont iconsousuo"></text></view>
            <view class="date">
              <picker mode="date" @change="bindStartDateChange" class="margin-right">
                <view class="uni-input font-size-tag">{{ dateObj.startDate ? dateObj.startDate : $t('common.start_time') }}</view>
              </picker>
              <text class="margin-right">-</text>
              <picker mode="date" @change="bindEndDateChange">
                <view class="uni-input font-size-tag">{{ dateObj.endDate ? dateObj.endDate : $t('common.end_time') }}</view>
              </picker>
              <text class="clear iconfont iconqingkong1" @click="clearTime"></text>
            </view>
          </view>
        </view>

        <view class="withdrawal_item">
          <block v-if="dashboard_list.length > 0">
            <view class="withdrawal_content" :class="{ 'margin-top': index > 0 }" v-for="(item, index) in dashboard_list" :key="index">
              <view class="withdrawal_list" @click="todetail(item.id)">
                <view class="withdrawal_list_title">
                  <view class="tip color-tip">{{ item.withdraw_no }}</view>
                  <view class="color-base-text">{{ $t('common.view') }}</view>
                </view>
                <view class="withdrawal_list_info">
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.withdraw.list.amount_yuan') }}</view>
                    <view class="red">￥{{ item.money }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('common.name') }}</view>
                    <view>{{ item.name }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('common.phone') }}</view>
                    <view>{{ item.mobile }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('property.withdraw.list.account_type') }}</view>
                    <view>{{ $t(`withdraw.type_${item.bank_type}`) }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('common.status') }}</view>
                    <view :class="{ red: item.status != 2, green: item.status == 2 }">{{ item.status == 2 ? $t('property.withdraw.list.status_completed') : $t('property.withdraw.list.status_processing') }}</view>
                  </view>
                  <view class="withdrawal_list_base">
                    <view class="tip">{{ $t('common.time') }}</view>
                    <view>{{ item.apply_time ? $util.timeStampTurnTime(item.apply_time) : '--' }}</view>
                  </view>
                </view>
              </view>
            </view>
          </block>
          <ns-empty v-else :text="$t('property.withdraw.list.no_data')"></ns-empty>
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
      dateObj: {
        startDate: '',
        endDate: ''
      },
      base_info: {},
      dashboard_list: []
    }
  },
  onShow() {
    if (!this.$util.checkToken('/pages/property/withdraw/list')) return
    this.getBaseInfo()
  },
  methods: {
    todetail(id) {
      this.$util.redirectTo('/pages/property/withdraw/detail', { id: id })
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
        url: '/shopapi/shopwithdraw/info',
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
        page_size: mescroll.size
      }
      if (this.dateObj.startDate) {
        data.start_time = this.$util.timeTurnTimeStamp(this.dateObj.startDate)
      }
      if (this.dateObj.endDate) {
        data.end_time = this.$util.timeTurnTimeStamp(this.dateObj.endDate)
      }
      if (data.start_time && data.end_time && data.start_time > data.end_time) {
        this.$util.showToast({
          title: this.$t('property.withdraw.list.time_error')
        })
        this.dateObj.endDate = ''
        return false
      }

      this.$api.sendRequest({
        url: '/shopapi/shopwithdraw/lists',
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
