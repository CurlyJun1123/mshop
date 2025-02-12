<template>
  <view>
    <view class="form-title">{{ $t('order.logistics.logistics_info') }}</view>
    <view class="item-wrap">
      <view class="form-wrap">
        <text class="label">{{ $t('order.logistics.shipping_address') }}</text>
        <text class="value">{{ order.full_address }} {{ order.address }}</text>
      </view>
      <view class="form-wrap delivery-way">
        <text class="label">{{ $t('order.logistics.delivery_method') }}</text>
        <button :type="data.delivery_type == 1 ? 'primary' : 'default'" size="mini" @click="data.delivery_type = 1">{{ $t('order.logistics.logistics_delivery') }}</button>
        <button :type="data.delivery_type == 0 ? 'primary' : 'default'" size="mini" @click="data.delivery_type = 0">{{ $t('order.logistics.no_logistics') }}</button>
      </view>
      <template v-if="data.delivery_type == 1">
        <view class="form-wrap more-wrap">
          <text class="label">{{ $t('order.logistics.logistics_company') }}</text>
          <picker class="selected" @change="bindPickerChange" :value="picker.index" :range="picker.arr">
            <view class="uni-input" :class="{ 'color-tip': !company_name }">{{ company_name ? company_name : $t('order.logistics.select_logistics_company') }}</view>
          </picker>
          <text class="iconfont iconright"></text>
        </view>
        <view class="form-wrap">
          <view class="label">{{ $t('order.logistics.tracking_number') }}</view>
          <input class="uni-input" v-model="data.delivery_no" :placeholder="$t('order.logistics.enter_tracking_number')" />
        </view>
      </template>
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
        package_id: 0,
        delivery_type: 1,
        express_company_id: 0,
        delivery_no: ''
      },
      expressCompany: [],
      company_name: '',
      picker: {
        index: 0,
        arr: []
      },
      logistics: {}
    }
  },
  async onLoad(option) {
    this.logistics = uni.getStorageSync('editLogistics') ? JSON.parse(uni.getStorageSync('editLogistics')) : {}
    if (this.logistics.id) {
      this.data.order_id = this.logistics.order_id
      this.data.package_id = this.logistics.id
      this.data.delivery_type = this.logistics.delivery_type
      this.data.delivery_no = this.logistics.delivery_no
      this.data.express_company_id = this.logistics.express_company_id
      this.company_name = this.logistics.express_company_name
      this.getShopExpressCompanyList()
      await this.getOrderInfo()
    } else {
      this.$util.showToast({
        title: this.$t('order.logistics.order_not_exist')
      })
      setTimeout(() => {
        uni.navigateBack({
          delta: 1
        })
      }, 1000)
    }
  },
  onShow() {},
  methods: {
    // 获取订单信息
    async getOrderInfo() {
      var res = await this.$api.sendRequest({
        url: '/shopapi/order/getOrderInfo',
        data: {
          order_id: this.data.order_id
        },
        async: false
      })

      if (res.code == 0) {
        this.order = res.data
        if (this.$refs.loadingCover) this.$refs.loadingCover.hide()
      } else {
        this.$util.showToast({
          title: res.message
        })
        setTimeout(() => {
          this.$util.redirectTo('/pages/order/list', {}, 'redirectTo')
        }, 1000)
      }
    },
    // 获取物流公司
    getShopExpressCompanyList() {
      this.$api.sendRequest({
        url: '/shopapi/express/expressCompany',
        success: (res) => {
          if (res.code == 0) {
            this.expressCompany = res.data
            this.expressCompany.forEach((item, key) => {
              if (this.express_company_id == item.company_id) this.picker.index = key
              this.picker.arr.push(item.company_name)
            })
          }
        }
      })
    },
    // 绑定物流公司切换事件
    bindPickerChange(e) {
      if (this.expressCompany.length == 0) return
      this.picker.index = e.target.value
      this.data.express_company_id = this.expressCompany[this.picker.index].company_id
      this.company_name = this.expressCompany[this.picker.index].company_name
    },
    verify() {
      var count = 0

      if (this.data.delivery_type == 1) {
        if (this.data.express_company_id == 0) {
          this.$util.showToast({
            title: this.$t('order.logistics.please_select_logistics_company')
          })
          return false
        }
        if (this.data.delivery_no.length == 0) {
          this.$util.showToast({
            title: this.$t('order.logistics.please_enter_tracking_number')
          })
          return false
        }
      }

      return true
    },
    save() {
      if (!this.verify()) return

      // 无需物流，清空物流公司id、快递单号
      if (this.data.delivery_type == 0) {
        this.data.express_company_id = 0
        this.data.delivery_no = ''
      }

      if (this.repeatFlag) return
      this.repeatFlag = true

      this.$api.sendRequest({
        url: '/shopapi/order/editOrderDelivery',
        data: this.data,
        success: (res) => {
          if (res.code == 0) {
            uni.removeStorageSync('editLogistics')
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
.form-title {
  margin: $margin-updown $margin-both;
  color: $color-tip;
}
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
    &.delivery-way {
      .label {
        flex: 1;
      }
      button:last-child {
        margin-left: 20rpx !important;
      }
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
    &.more-wrap {
      .selected {
        vertical-align: middle;
        display: inline-block;
        flex: 1;
        text-align: right;
        color: $color-tip;
        overflow: hidden;
        white-space: pre;
        text-overflow: ellipsis;
        &.have {
          color: $color-title;
        }
      }
      .iconfont {
        color: $color-tip;
        margin-left: 20rpx;
      }
    }
  }
}
.footer-wrap {
  width: 100%;
  padding: 40rpx 0;
}
</style>
