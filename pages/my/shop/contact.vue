<template>
  <view>
    <view class="container-wrap">
      <view class="item-wrap">
        <view class="form-wrap">
          <view class="label">
            <text class="required color-base-text">*</text>
            <text>{{ $t('my.contact.name') }}</text>
          </view>
          <input class="uni-input" :placeholder="$t('my.contact.name.placeholder')" v-model="shopInfo.name" maxlength="100" />
        </view>
        <view class="form-wrap">
          <view class="label">
            <text class="required color-base-text">*</text>
            <text>{{ $t('my.contact.mobile') }}</text>
          </view>
          <input class="uni-input" :placeholder="$t('my.contact.mobile.placeholder')" type="number" v-model="shopInfo.mobile" maxlength="100" />
        </view>
        <view class="form-wrap">
          <text class="label">{{ $t('my.contact.phone') }}</text>
          <input class="uni-input" :placeholder="$t('my.contact.phone.placeholder')" v-model="shopInfo.telephone" maxlength="100" />
        </view>
        <view class="form-wrap">
          <text class="label">{{ $t('my.contact.address') }}</text>
          <input class="uni-input" :placeholder="$t('my.contact.address.region')" v-model="shopInfo.full_address" maxlength="100" disabled @click="selectAddress" />
        </view>
        <view class="form-wrap">
          <text class="label">{{ $t('my.contact.address.detail') }}</text>
          <input class="uni-input" :placeholder="$t('my.contact.address.detail.placeholder')" v-model="shopInfo.address" maxlength="100" />
        </view>
        <view class="form-wrap">
          <text class="label">{{ $t('my.contact.qq') }}</text>
          <input class="uni-input" :placeholder="$t('my.contact.qq.placeholder')" v-model="shopInfo.qq" maxlength="100" />
        </view>
        <view class="form-wrap">
          <text class="label">{{ $t('my.contact.alibaba') }}</text>
          <input class="uni-input" :placeholder="$t('my.contact.alibaba.placeholder')" v-model="shopInfo.ww" maxlength="100" />
        </view>
        <view class="form-wrap">
          <text class="label">{{ $t('my.contact.email') }}</text>
          <input class="uni-input" :placeholder="$t('my.contact.email.placeholder')" v-model="shopInfo.email" maxlength="100" />
        </view>
        <view class="form-wrap" @click="openWeek()">
          <text class="label">{{ $t('my.contact.days') }}</text>
          <text class="value">{{ shopInfo.work_week ? (work_weekText ? work_weekText : $t('my.config.days.selected')) : $t('my.config.days.placeholder') }}</text>
          <text class="iconfont iconright color-tip"></text>
        </view>
        <view class="form-wrap">
          <text class="label">{{ $t('my.contact.hours') }}</text>
          <view class="time-change">
            <picker mode="time" @change="bindStartDateChange" class="padding-left padding-right" :value="timeHourMinute(shopInfo.start_time)">
              <view class="uni-input">{{ shopInfo.start_time ? timeHourMinute(shopInfo.start_time) : $t('my.contact.hours.start') }}</view>
            </picker>
            -
            <picker mode="time" @change="bindEndDateChange" class="padding-left padding-right" :value="timeHourMinute(shopInfo.end_time)">
              <view class="uni-input">{{ shopInfo.end_time ? timeHourMinute(shopInfo.end_time) : $t('my.contact.hours.end') }}</view>
            </picker>
          </view>
        </view>
      </view>
    </view>

    <view class="footer-wrap">
      <button type="primary" @click="save()">{{ $t('my.config.save') }}</button>
    </view>

    <uni-popup ref="openWeek" type="bottom">
      <view class="week-list iphone-safe-area" @touchmove.prevent.stop>
        <view class="title">{{ $t('my.contact.days.select') }}</view>
        <view class="flex" @click="selectedChange(item.value)" v-for="(item, index) in week_list" :key="index">
          <view class="flex-left">{{ item.name }}</view>
          <view class="flex-right"><text class="iconfont iconyuan_checked" :class="{ 'color-base-text': item.is_select, 'color-tip': !item.is_select }"></text></view>
        </view>
        <button class="btn margin-top" type="primary" @click="selectedChangeBtn">{{ $t('my.contact.confirm') }}</button>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import contact from '../js/contact.js'

export default {
  data() {
    return {}
  },
  mixins: [contact]
}
</script>

<style lang="scss">
@import '../css/edit.scss';
.week-list {
  padding-bottom: 30rpx;
  .title {
    text-align: center;
    padding: $padding;
    font-size: $font-size-sub;
  }
  .flex {
    display: flex;
    margin: 0 $margin-both;
    padding: $padding;
    border-bottom: 1px solid $color-line;
    &:nth-last-of-type(1) {
      border-bottom: 0 !important;
    }
    .flex-left {
      flex: 1;
    }
  }
}
</style>
