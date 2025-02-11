<template>
  <view class="records">
    <view class="search-wrap">
      <view class="search-input-inner">
        <text class="search-input-icon iconfont iconsousuo" @click="search()"></text>
        <input
          class="search-input-text font-size-tag"
          maxlength="50"
          v-model="formData.verifier_name"
          :placeholder="$t('verify.records.placeholder_verifier_name')"
          @confirm="search()"
        />
      </view>
      <view class="screen margin-left" @click="showScreen = true">
        {{ $t('verify.records.filter') }}
        <text class="iconfont iconshaixuan color-tip"></text>
      </view>
    </view>
    <!-- 筛选弹出框 -->
    <uni-drawer :visible="showScreen" mode="right" @close="showScreen = false" class="screen-wrap">
      <view class="title color-tip">{{ $t('verify.records.filter') }}</view>
      <scroll-view scroll-y="true">
        <view class="item-wrap">
          <view class="label">{{ $t('verify.records.verifier_name') }}</view>
          <view class="value-wrap"><input class="uni-input" :placeholder="$t('verify.records.placeholder_verifier_name')" v-model="formData.verifier_name" /></view>
        </view>
        <view class="item-wrap">
          <view class="label">{{ $t('verify.records.verification_type') }}</view>
          <view class="list">
            <block v-for="(item, index) in verifyType" :key="index">
              <uni-tag :inverted="true" :text="item.date_name" :type="index == verify_type ? 'primary' : 'default'" @click="uTag(index)" />
            </block>
          </view>
        </view>
        <view class="item-wrap">
          <view class="label">{{ $t('verify.records.verification_time') }}</view>
          <view class="value-wrap">
            <picker mode="date" @change="bindTimeStartChange" class="picker margin-right">
              <view class="uni-input">{{ formData.start_time ? formData.start_time : $t('verify.records.start_time') }}</view>
            </picker>
            <view class="h-line"></view>
            <picker mode="date" @change="bindTimeEndChange" class="picker margin-left">
              <view class="uni-input">{{ formData.end_time ? formData.end_time : $t('verify.records.end_time') }}</view>
            </picker>
          </view>
        </view>
        <view class="item-wrap">
          <view class="label">{{ $t('verify.records.verification_code') }}</view>
          <view class="value-wrap"><input class="uni-input" :placeholder="$t('verify.records.placeholder_verification_code')" v-model="formData.verify_code" /></view>
        </view>
      </scroll-view>
      <view class="footer">
        <button type="default" @click="resetData">{{ $t('verify.records.reset') }}</button>
        <button type="primary" @click="screenData">{{ $t('verify.records.confirm') }}</button>
      </view>
    </uni-drawer>
    <mescroll-uni class="list-wrap" @getData="getListData" top="140" ref="mescroll" :size="8">
      <block slot="list">
        <block v-if="recordsList.length > 0">
          <view class="list" v-for="(item, index) in recordsList" :key="index">
            <view class="title">
              <text class="time">
                {{ $t('verify.records.verification_code') }}：{{ item.verify_code }}
                <text class="color-base-text" style="margin-left: 10rpx" @click="$util.copy(item.verify_code)">{{ $t('verify.records.copy') }}</text>
              </text>
              <text>{{ item.verify_type_name }}</text>
              <text class="status">{{ item.is_verify == 1 ? $t('verify.records.verified') : $t('verify.records.not_verified') }}</text>
            </view>
            <view class="goods" v-for="(item_c, index_c) in item.item_array" :key="index_c">
              <image class="img" :src="$util.img(item_c.img)" mode="aspectFit" @error="imgError(index, index_c)"></image>
              <view class="info">
                <view class="goods_name">{{ item_c.name }}</view>
                <view class="flex">
                  <view class="flex_left">x{{ item_c.num }}</view>
                  <view class="flex_right">
                    <text class="font-size-tag">￥</text>
                    {{ item_c.price }}
                  </view>
                </view>
              </view>
            </view>
            <view class="other_info">
              <text class="margin-right">{{ $t('verify.records.verifier') }}：{{ item.verifier_name }}</text>
            </view>
            <view class="other_info">{{ $t('verify.records.creation_time') }}：{{ $util.timeStampTurnTime(item.create_time) }}</view>
            <view class="other_info">{{ $t('verify.records.verification_time') }}：{{ $util.timeStampTurnTime(item.verify_time) }}</view>
          </view>
        </block>
        <ns-empty v-else-if="isShow && recordsList.length == 0" :text="$t('verify.records.no_verification_data')"></ns-empty>
      </block>
    </mescroll-uni>
  </view>
</template>

<script>
import records from './js/records.js'
export default {
  mixins: [records]
}
</script>

<style lang="scss">
page {
  overflow: hidden;
}
.search-wrap {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: $margin-updown $margin-both;

  // border-radius: 40rpx;
  .search-input-inner {
    flex: 1;
    display: flex;
    align-items: center;
    height: 70rpx;
    padding: 0 30rpx;
    border-radius: 100rpx;
    box-sizing: border-box;
    border: 1px solid $color-line;
    .search-input-icon {
      margin-right: 10rpx;
      color: $color-tip;
    }
    .search-input-text {
      flex: 1;
    }
  }
  .screen {
    line-height: 70rpx;
  }
  .select {
    height: 66rpx;
    line-height: 66rpx;
    padding: 0 30rpx;
    border-radius: 100rpx;
    margin-left: $margin-both;
    border: 1px solid $color-line;
    border-radius: 50rpx;
    font-size: $font-size-tag;
    .iconfont {
      margin-bottom: 20rpx;
    }
  }
}
.list {
  background-color: #fff;
  margin: 0 $margin-both $margin-both;
  padding: 0 30rpx 20rpx;
  border-radius: $border-radius;
  .title {
    display: flex;
    align-items: center;
    padding: 20rpx 0;
    font-size: $font-size-tag;
    border-bottom: 1px solid $color-line;
    .time {
      flex: 1;
      color: $color-tip;
    }
    .status {
      margin-left: 20rpx;
    }
  }
  .goods {
    display: flex;
    padding: 30rpx 0;
    .img {
      height: 140rpx;
      width: 140rpx;
      min-width: 140rpx;
    }
    .info {
      flex: 1;
      margin-left: 30rpx;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .goods_name {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box; //作为弹性伸缩盒子模型显示。
        -webkit-box-orient: vertical; //设置伸缩盒子的子元素排列方式--从上到下垂直排列
        -webkit-line-clamp: 2; //
        line-height: 1.5;
      }

      .flex {
        margin-top: 10rpx;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        .flex_left {
          font-size: $font-size-tag;
          color: $color-tip;
        }
      }
    }
  }
  .other_info {
    color: $color-tip;
    font-size: $font-size-tag;
  }
}
.screen-wrap {
  .title {
    font-size: $font-size-tag;
    padding: $padding;
    background: $color-bg;
  }
  scroll-view {
    height: 85%;
    .item-wrap {
      border-bottom: 1px solid $color-line;
      &:last-child {
        border-bottom: none;
      }
      .label {
        font-size: $font-size-tag;
        padding: $padding 30rpx 0 $padding;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .more {
          font-size: $font-size-tag;
          picker {
            display: inline-block;
            vertical-align: middle;
            view {
              font-size: $font-size-tag;
            }
          }
          .iconfont {
            display: inline-block;
            vertical-align: middle;
            color: $color-tip;
            font-size: $font-size-base;
          }
        }
        .uni-tag {
          padding: 0 $padding;
          font-size: $font-size-goods-tag;
          background: $color-bg;
          height: 40rpx;
          line-height: 40rpx;
          border: 0;
          margin-left: $margin-updown;
        }
      }

      .list {
        margin: $margin-updown $margin-both;
        overflow: hidden;
        padding: 0;
        .uni-tag {
          padding: 0 $padding;
          font-size: $font-size-goods-tag;
          background: $color-bg;
          height: 52rpx;
          line-height: 52rpx;
          border: 0;
          margin-right: 20rpx;
          margin-bottom: 20rpx;
          &:nth-child(3n) {
            margin-right: 0;
          }
        }
      }
      .value-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: $padding;
        .h-line {
          width: 40rpx;
          height: 2rpx;
          background-color: $color-tip;
        }
        input {
          flex: 1;
          background: $color-line;
          height: 60rpx;
          line-height: 60rpx;
          font-size: $font-size-goods-tag;
          border-radius: 50rpx;
          text-align: center;
          &:first-child {
            margin-right: 10rpx;
          }
          &:last-child {
            margin-left: 10rpx;
          }
        }
        picker {
          display: inline-block;
          vertical-align: middle;
          view {
            font-size: $font-size-tag;
          }
        }
      }
    }
  }
  .footer {
    height: 90rpx;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    display: flex;
    //position: absolute;
    bottom: 0;
    width: 100%;
    button {
      margin: 0;
      width: 40%;
      &:first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      &:last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
}
</style>
