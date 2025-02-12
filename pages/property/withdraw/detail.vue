<template>
  <view class="withdrawal iphone-safe-area">
    <view class="dl">
      <view class="dt">{{ $t('property.withdraw.detail.store_name') }}</view>
      <view class="dd">{{ base_info.site_name }}</view>
    </view>
    <view class="dl">
      <view class="dt">{{ $t('property.withdraw.detail.contact_person') }}</view>
      <view class="dd">{{ base_info.name }}</view>
    </view>
    <view class="dl">
      <view class="dt">{{ $t('property.withdraw.detail.contact_phone') }}</view>
      <view class="dd">{{ base_info.mobile }}</view>
    </view>
    <view class="dl">
      <view class="dt">{{ $t('property.withdraw.detail.account_type') }}</view>
      <view class="dd">
        <block v-if="base_info.bank_type == 1">{{ $t('property.withdraw.detail.bank') }}</block>
        <block v-else-if="base_info.bank_type == 3">{{ $t('property.withdraw.detail.wechat') }}</block>
        <block v-else>{{ $t('property.withdraw.detail.alipay') }}</block>
      </view>
    </view>
    <block v-if="base_info.bank_type == 1">
      <view class="dl">
        <view class="dt">{{ $t('property.withdraw.detail.account_name') }}</view>
        <view class="dd">{{ base_info.settlement_bank_name }}</view>
      </view>
      <view class="dl">
        <view class="dt">{{ $t('property.withdraw.detail.withdraw_account') }}</view>
        <view class="dd">{{ base_info.settlement_bank_account_number }}</view>
      </view>
      <view class="dl">
        <view class="dt">{{ $t('property.withdraw.detail.account_holder') }}</view>
        <view class="dd">{{ base_info.settlement_bank_account_name }}</view>
      </view>
    </block>
    <block v-if="base_info.bank_type == 3">
      <view class="dl">
        <view class="dt">{{ $t('property.withdraw.detail.wechat_nickname') }}</view>
        <view class="dd">{{ base_info.settlement_bank_address }}</view>
      </view>
      <view class="dl">
        <view class="dt">{{ $t('property.withdraw.detail.wechat_id') }}</view>
        <view class="dd">{{ base_info.settlement_bank_name }}</view>
      </view>
    </block>
    <block v-else>
      <view class="dl">
        <view class="dt">{{ $t('property.withdraw.detail.alipay_username') }}</view>
        <view class="dd">{{ base_info.settlement_bank_account_name }}</view>
      </view>
      <view class="dl">
        <view class="dt">{{ $t('property.withdraw.detail.alipay_account') }}</view>
        <view class="dd">{{ base_info.settlement_bank_account_number }}</view>
      </view>
    </block>
    <view class="dl">
      <view class="dt">{{ $t('property.withdraw.detail.withdraw_amount') }}</view>
      <view class="dd">{{ base_info.money }}{{ $t('property.withdraw.detail.yuan') }}</view>
    </view>
    <view class="dl">
      <view class="dt">{{ $t('property.withdraw.detail.status') }}</view>
      <view class="dd">
        <block v-if="base_info.status == 0">{{ $t('property.withdraw.detail.pending_review') }}</block>
        <block v-else-if="base_info.status == 1">{{ $t('property.withdraw.detail.pending_transfer') }}</block>
        <block v-else-if="base_info.status == 2">{{ $t('property.withdraw.detail.transferred') }}</block>
        <block v-else-if="base_info.status == -1">{{ $t('property.withdraw.detail.rejected') }}</block>
      </view>
    </view>
    <view class="dl">
      <view class="dt">{{ $t('property.withdraw.detail.apply_time') }}</view>
      <view class="dd">{{ $util.timeStampTurnTime(base_info.apply_time) }}</view>
    </view>
    <block v-if="base_info.status == 2">
      <view class="dl">
        <view class="dt">{{ $t('property.withdraw.detail.transfer_time') }}</view>
        <view class="dd">{{ $util.timeStampTurnTime(base_info.payment_time) }}</view>
      </view>
      <view class="dl">
        <view class="dt">{{ $t('property.withdraw.detail.transfer_voucher') }}</view>
        <view class="dd"><image class="img" :src="$util.img(base_info.paying_money_certificate)" @click="previewMedia()" /></view>
      </view>
      <view class="dl">
        <view class="dt">{{ $t('property.withdraw.detail.voucher_description') }}</view>
        <view class="dd">{{ base_info.paying_money_certificate_explain ? base_info.paying_money_certificate_explain : $t('property.withdraw.detail.none') }}</view>
      </view>
    </block>
    <view class="dl">
      <view class="dt">{{ $t('property.withdraw.detail.is_settlement_period') }}</view>
      <view class="dd">{{ base_info.is_period == 0 ? $t('property.withdraw.detail.no') : $t('property.withdraw.detail.yes') }}</view>
    </view>
    <view class="dl">
      <view class="dt">{{ $t('property.withdraw.detail.period_name') }}</view>
      <view class="dd">{{ base_info.period_name }}</view>
    </view>
    <view class="dl">
      <view class="dt">{{ $t('property.withdraw.detail.remark') }}</view>
      <view class="dd">{{ base_info.memo }}</view>
    </view>
    <loading-cover ref="loadingCover"></loading-cover>
  </view>
</template>

<script>
export default {
  data() {
    return {
      id: 0,
      base_info: {}
    }
  },
  onLoad(option) {
    if (option.id) {
      this.id = option.id
      this.getBaseInfo()
    } else {
      this.$util.goBack('/pages/property/withdraw/list')
    }
  },
  onShow() {
    if (!this.$util.checkToken('/pages/property/withdraw/detail?id=' + this.id)) return
  },
  methods: {
    getBaseInfo() {
      this.$api.sendRequest({
        url: '/shopapi/shopwithdraw/detail',
        data: {
          id: this.id
        },
        success: (res) => {
          if (res.code >= 0) {
            this.base_info = res.data
          } else {
            this.$util.showToast({
              title: res.message
            })
          }
          if (this.$refs.loadingCover) this.$refs.loadingCover.hide()
        }
      })
    },
    previewMedia() {
      var paths = [this.base_info.paying_money_certificate]
      uni.previewImage({
        current: 0,
        urls: paths
      })
    }
  }
}
</script>

<style lang="scss">
.withdrawal {
  padding: $padding 0;
  border-radius: $border-radius;
  overflow: hidden;
  margin: 0 $margin-both;
  .dl {
    display: flex;
    justify-content: space-between;
    padding: 30rpx;
    border-bottom: 1px solid $color-line;
    background-color: #fff;
    &:last-child {
      border-bottom: 0 !important;
    }
    .dt {
      min-width: 200rpx;
    }
    .dd {
      flex: 1;
      text-align: right;
      word-break: break-all;
      .img {
        height: 80rpx;
        width: 80rpx;
      }
    }
  }
}
</style>
