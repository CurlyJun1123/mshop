<template>
  <view class="member" @click="showHide">
    <view class="search-inner">
      <view class="search-wrap">
        <view class="search-input-inner">
          <text class="search-input-icon iconfont iconsousuo" @click.stop="searchMember()"></text>
          <input class="uni-input font-size-tag" maxlength="50" v-model="searchMemberName" :placeholder="$t('my.user.username.prompt')" @confirm="searchMember()" />
        </view>
        <view class="search-btn color-base-bg" @click.stop="linkSkip()">
          <text>+</text>
          <text>{{ $t('my.user.add') }}</text>
        </view>
      </view>
    </view>

    <mescroll-uni class="list-wrap" @getData="getListData" top="160" ref="mescroll" :size="10" :fiexd="!1">
      <block slot="list">
        <view class="item-inner" v-for="(item, index) in dataList" :key="index" @click.stop="showHide(item)">
          <view class="item-wrap">
            <view class="item-desc">
              <view class="item-num-wrap">
                <view class="item_info">
                  <text class="item-name">{{ $t('my.user.username.label') }}{{ item.username }}</text>
                  <text class="item-tip margin-left color-base-bg">{{ item.group_name }}</text>
                </view>
                <text class="status" :class="{ green: item.status == 1, gray: item.status != 1 }">
                  {{ $t(item.status == 1 ? 'my.user.normal' : 'my.user.locking') }}
                </text>
              </view>
              <view class="item-operation color-tip">
                <text class="item-price">
                  {{ $t('my.user.lastLoginIP.label') }}
                  <text>{{ item.login_ip ? item.login_ip : '--' }}</text>
                </text>
              </view>
              <view class="item-operation color-tip margin-top">
                <text class="item-price">
                  {{ $t('my.user.lastLoginTime.label') }}
                  <text>{{ item.login_time ? $util.timeStampTurnTime(item.login_time) : '--' }}</text>
                </text>
                <text class="iconshenglve iconfont" v-if="!item.is_admin && item.uid != shopInfo.member_id"></text>
              </view>
            </view>
          </view>

          <view class="operation" v-if="item.is_off">
            <view class="operation-item" @click.stop="linkSkip(item)">
              <image :src="$util.img('/upload/uniapp/shop_uniapp/goods/goods_list_01.png')" mode=""></image>
              <text>{{ $t('my.user.edit') }}</text>
            </view>
            <view class="operation-item" @click.stop="changePass(item)">
              <image :src="$util.img('/upload/uniapp/shop_uniapp/member/member_03.png')" mode=""></image>
              <text>{{ $t('my.user.resetPassword') }}</text>
            </view>
            <view class="operation-item" @click.stop="deleteUser(item)">
              <image :src="$util.img('/upload/uniapp/shop_uniapp/goods/goods_list_04.png')" mode=""></image>
              <text>{{ $t('my.user.delete') }}</text>
            </view>
          </view>
        </view>
        <ns-empty v-if="!dataList.length" :text="$t('my.user.noUserData')"></ns-empty>
      </block>
    </mescroll-uni>

    <uni-popup ref="editPasswordPop">
      <view class="pop-wrap" @touchmove.prevent.stop>
        <view class="title font-size-toolbar">
          {{ $t('my.user.resetPassword') }}
          <view class="close color-tip" @click.stop="closeEditPasswordPop()"><text class="iconfont iconclose"></text></view>
        </view>
        <view class="flex">
          <view class="flex_left">{{ $t('my.user.newPassword') }}</view>
          <view class="flex_right"><input :placeholder="$t('my.user.newPassword.label')" password="true" class="uni-input" v-model="password.newPwd" /></view>
        </view>
        <view class="flex last_child margin-bottom">
          <view class="flex_left">{{ $t('my.user.confirmNewPassword') }}</view>
          <view class="flex_right"><input :placeholder="$t('my.user.confirmNewPassword.label')" password="true" class="uni-input" v-model="password.againNew" /></view>
        </view>
        <view class="action-btn">
          <view class="line" @click.stop="closeEditPasswordPop()">{{ $t('my.user.cancel') }}</view>
          <view class="color-line-border color-base-text" @click.stop="modifyPassword()">{{ $t('my.contact.confirm') }}</view>
        </view>
      </view>
    </uni-popup>
    <loading-cover ref="loadingCover"></loading-cover>
  </view>
</template>

<script>
import user from '../js/user.js'
export default {
  mixins: [user]
}
</script>

<style lang="scss">
@import '../css/user.scss';
/deep/ .mescroll-uni-content {
  /* #ifdef MP */
  padding-bottom: 40rpx;
  padding-bottom: 40rpx;
  /* #endif */
}
</style>
