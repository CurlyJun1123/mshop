<template>
  <view>
    <view class="item-wrap">
      <view class="form-wrap">
        <text class="label">{{ $t('order.local.delivery_address') }}</text>
        <text class="value">{{ order.full_address }} {{ order.address }}</text>
      </view>
      <view class="form-wrap">
        <text class="label">{{ $t('order.local.delivery_method') }}</text>
        <text class="value">{{ $t('order.local.merchant_self_delivery') }}</text>
      </view>
      <view class="form-wrap">
        <view class="label">
          <text class="required color-base-text">*</text>
          <text>{{ $t('order.local.deliverer') }}</text>
        </view>
        <input class="uni-input" v-model="data.deliverer" :placeholder="$t('order.local.please_enter_deliverer')" />
      </view>
      <view class="form-wrap">
        <view class="label">
          <text class="required color-base-text">*</text>
          <text>{{ $t('order.local.phone_number') }}</text>
        </view>
        <input class="uni-input" v-model="data.deliverer_mobile" type="number" :placeholder="$t('order.local.please_enter_phone')" />
      </view>
    </view>
    <view class="footer-wrap"><button type="primary" @click="save()">{{ $t('common.confirm') }}</button></view>
    <loading-cover ref="loadingCover"></loading-cover>
  </view>
</template>

<script>
export default {
  data() {
    return {
      order: {},
      repeatFlag: false,
      data: {
        order_id: 0,
        deliverer: '',
        deliverer_mobile: ''
      }
    }
  },
  onLoad(option) {
    this.data.order_id = option.order_id || 0
    this.getOrderInfo()
  },
  onShow() {},
  methods: {
    getOrderInfo() {
      this.$api.sendRequest({
        url: '/shopapi/order/getOrderInfo',
        data: {
          order_id: this.data.order_id
        },
        success: (res) => {
          if (res.code == 0) {
            this.order = res.data
            if (this.$refs.loadingCover) this.$refs.loadingCover.hide()
          } else {
            this.$util.showToast({
              title: res.message
            })
            setTimeout(() => {
              uni.navigateBack({
                delta: 1
              })
            }, 1000)
          }
        }
      })
    },
    save() {
      if (this.data.deliverer.length == 0) {
        this.$util.showToast({
          title: this.$t('order.local.please_enter_deliverer')
        })
        return
      }
      if (this.data.deliverer.deliverer_mobile == 0) {
        this.$util.showToast({
          title: this.$t('order.local.please_enter_phone')
        })
        return
      }

      if (this.repeatFlag) return
      this.repeatFlag = true

      this.$api.sendRequest({
        url: '/shopapi/localorder/delivery',
        data: this.data,
        success: (res) => {
          if (res.code == 0) {
            setTimeout(() => {
              uni.navigateBack({
                delta: 1
              })
            }, 1000)
          } else {
            this.repeatFlag = false
          }
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
.item-wrap {
  background: #fff;
  margin-top: $margin-updown;
  .form-wrap {
    display: flex;
    align-items: center;
    margin: 0 $margin-both;
    border-bottom: 1px solid $color-line;
    height: 100rpx;
    line-height: 100rpx;
    &:last-child {
      border-bottom: none;
    }
    .label {
      vertical-align: middle;
      margin-right: $margin-both;
    }
    .value {
      vertical-align: middle;
      display: inline-block;
      flex: 1;
      text-align: right;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: pre;
    }
    input {
      vertical-align: middle;
      display: inline-block;
      flex: 1;
      text-align: right;
    }
  }
}
.footer-wrap {
  width: 100%;
  padding: 40rpx 0;
}
</style>
