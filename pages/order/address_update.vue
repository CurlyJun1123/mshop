<template>
  <view>
    <view class="item-wrap">
      <view class="form-wrap">
        <view class="label">
          <text class="required color-base-text">*</text>
          <text>{{ $t('order.address.receiver') }}</text>
        </view>
        <input class="uni-input" :placeholder="$t('order.address.please_enter_receiver')" v-model="order.name" />
      </view>
      <view class="form-wrap">
        <view class="label">
          <text class="required color-base-text">*</text>
          <text>{{ $t('order.address.mobile_number') }}</text>
        </view>
        <input class="uni-input" :placeholder="$t('order.address.please_enter_mobile')" v-model="order.mobile" />
      </view>
      <view class="form-wrap more-wrap">
        <view class="label">
          <text class="required color-base-text">*</text>
          <text>{{ $t('order.address.shipping_address') }}</text>
        </view>
        <text class="selected" @click="selectAddress" v-if="order.order_type == 3">{{ order.full_address ? order.full_address : $t('order.address.please_select') }}</text>
        <view class="selected" v-else>
          <pick-regions :default-regions="defaultRegions" @getRegions="handleGetRegions">
            <text class="select-address" :class="{ 'color-tip': !order.full_address }">{{ order.full_address ? order.full_address : $t('order.address.please_select_region') }}</text>
          </pick-regions>
        </view>
        <text class="iconfont iconright" v-if="order.order_type == 3" @click="selectAddress"></text>
      </view>
      <view class="form-wrap">
        <view class="label">
          <text class="required color-base-text">*</text>
          <text>{{ $t('order.address.detailed_address') }}</text>
        </view>
        <input class="uni-input" :placeholder="$t('order.address.please_enter_address')" v-model="order.address" />
      </view>
    </view>
    <view class="footer-wrap"><button type="primary" @click="save()">{{ $t('order.address.confirm') }}</button></view>
    <loading-cover ref="loadingCover"></loading-cover>
  </view>
</template>

<script>
import validate from 'common/js/validate.js'
import Config from '@/common/js/config.js'
export default {
  data() {
    return {
      orderId: 0,
      order: {},
      repeatFlag: false,
      defaultRegions: [],
      formData: {},
      addressValue: '',
      option: {}
    }
  },
  onLoad(option) {
    this.orderId = option.order_id || 0
    if (option.name) this.option = option
    this.getOrderInfo()
  },
  onShow() {},
  methods: {
    getOrderInfo() {
      this.$api.sendRequest({
        url: '/shopapi/order/getOrderInfo',
        data: {
          order_id: this.orderId
        },
        success: (res) => {
          if (res.code == 0) {
            this.order = res.data
            this.defaultRegions = [res.data.province_id, res.data.city_id, res.data.district_id]
            //选地址跳转回来的操作
            if (this.option.name) {
              this.order.address = this.option.name
              if (uni.getStorageSync('addressInfo')) this.order = JSON.parse(uni.getStorageSync('addressInfo'))
              this.order.address = this.option.name
              this.getAddress(this.option.latng)
              var tempArr = this.option.latng.split(',')
              this.order.latitude = tempArr[0]
              this.order.longitude = tempArr[1]
            }
            if (this.$refs.loadingCover) {
              setTimeout(() => {
                this.$refs.loadingCover.hide()
              }, 100)
            }
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
    // 获取选择的地区
    handleGetRegions(regions) {
      this.order.full_address = ''
      this.order.full_address += regions[0] != undefined ? regions[0].label : ''
      this.order.full_address += regions[1] != undefined ? '-' + regions[1].label : ''
      this.order.full_address += regions[2] != undefined ? '-' + regions[2].label : ''
      this.addressValue = ''
      this.addressValue += regions[0] != undefined ? regions[0].value : ''
      this.addressValue += regions[1] != undefined ? '-' + regions[1].value : ''
      this.addressValue += regions[2] != undefined ? '-' + regions[2].value : ''
    },
    //获取详细地址
    getAddress(value) {
      this.$api.sendRequest({
        url: '/api/memberaddress/tranAddressInfo',
        data: {
          latlng: value
        },
        success: (res) => {
          if (res.code == 0) {
            this.order.full_address = ''
            this.order.full_address += res.data.province != undefined ? res.data.province : ''
            this.order.full_address += res.data.city != undefined ? '-' + res.data.city : ''
            this.order.full_address += res.data.district != undefined ? '-' + res.data.district : ''
            this.addressValue = ''
            this.addressValue += res.data.province_id != undefined ? res.data.province_id : ''
            this.addressValue += res.data.city_id != undefined ? '-' + res.data.city_id : ''
            this.addressValue += res.data.district_id != undefined ? '-' + res.data.district_id : ''
          } else {
            this.$util.showToast({
              title: this.$t('order.address.data_error')
            })
          }
        }
      })
    },
    selectAddress() {
      // #ifdef MP
      uni.chooseLocation({
        success: (res) => {
          this.order.latitude = res.latitude
          this.order.longitude = res.longitude
          this.order.address = res.name
          this.getAddress(res.latitude + ',' + res.longitude)
        },
        fail(res) {
          uni.getSetting({
            success: function (res) {
              var statu = res.authSetting
              if (!statu['scope.userLocation']) {
                uni.showModal({
                  title: this.$t('order.address.location_auth_title'),
                  content: this.$t('order.address.location_auth_content'),
                  success(tip) {
                    if (tip.confirm) {
                      uni.openSetting({
                        success: function (data) {
                          if (data.authSetting['scope.userLocation'] === true) {
                            this.$util.showToast({
                              title: this.$t('order.address.auth_success')
                            })
                            //授权成功之后，再调用chooseLocation选择地方
                            setTimeout(function () {
                              uni.chooseLocation({
                                success: (data) => {
                                  this.order.latitude = res.latitude
                                  this.order.longitude = res.longitude
                                  this.order.address = res.name
                                  this.getAddress(res.latitude + ',' + res.longitude)
                                }
                              })
                            }, 1000)
                          }
                        }
                      })
                    } else {
                      this.$util.showToast({
                        title: this.$t('order.address.auth_failed')
                      })
                    }
                  }
                })
              }
            }
          })
        }
      })
      // #endif
      // #ifdef H5
      var urlencode = this.order
      uni.setStorageSync('addressInfo', JSON.stringify(urlencode))
      let backurl = Config.h5Domain + '/pages/order/address_update?order_id=' + this.order.order_id
      window.location.href = 'https://apis.map.qq.com/tools/locpicker?search=1&type=0&backurl=' + encodeURIComponent(backurl) + '&key=' + Config.mpKey + '&referer=myapp'
      // #endif
    },
    save() {
      if (this.repeatFlag) return
      this.repeatFlag = true
      if (this.vertify()) {
        let addressValueArr = this.addressValue.split('-'),
          data = {
            order_id: this.orderId,
            name: this.order.name,
            mobile: this.order.mobile,
            telephone: this.order.telephone,
            province_id: addressValueArr[0],
            city_id: addressValueArr[1],
            district_id: addressValueArr[2],
            address: this.order.address,
            full_address: this.order.full_address
          }

        if (this.order.order_type == 3) {
          ;(data.latitude = this.order.latitude), (data.longitude = this.order.longitude)
        }

        this.$api.sendRequest({
          url: '/shopapi/order/editAddress',
          data: data,
          success: (res) => {
            this.repeatFlag = false
            if (res.code == 0) {
              this.$util.showToast({
                title: res.message
              })
              uni.removeStorageSync('addressInfo')
              setTimeout(() => {
                uni.navigateBack({
                  delta: 1
                })
              }, 1000)
            }
          }
        })
      } else {
        this.repeatFlag = false
      }
    },
    vertify() {
      this.order.name = this.order.name.trim()
      this.order.mobile = this.order.mobile.trim()
      this.order.address = this.order.address.trim()
      var rule = [
        {
          name: 'name',
          checkType: 'required',
          errorMsg: this.$t('order.address.please_enter_name')
        },
        {
          name: 'mobile',
          checkType: 'required',
          errorMsg: this.$t('order.address.please_enter_mobile')
        },
        {
          name: 'mobile',
          checkType: 'phoneno',
          errorMsg: this.$t('order.address.please_enter_valid_mobile')
        },
        {
          name: 'full_address',
          checkType: 'required',
          errorMsg: this.$t('order.address.please_select_area')
        },
        {
          name: 'address',
          checkType: 'required',
          errorMsg: this.$t('order.address.address_required')
        }
      ]
      var checkRes = validate.check(this.order, rule)
      if (checkRes) {
        return true
      } else {
        this.$util.showToast({
          title: validate.error
        })
        this.flag = false
        return false
      }
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
    .required {
      font-weight: bold;
    }
    .label {
      vertical-align: middle;
      margin-right: $margin-both;
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
