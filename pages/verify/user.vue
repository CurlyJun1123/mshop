<template>
  <view class="records">
    <view class="search-wrap">
      <view class="search-input-inner">
        <text class="search-input-icon iconfont iconsousuo" @click="search()"></text>
        <input class="search-input-text font-size-tag" maxlength="50" v-model="formData.verifier_name" :placeholder="$t('verify.user.enter_verifier_name')" @confirm="search()" />
      </view>
      <view class="search-btn color-base-bg" @click="$util.redirectTo('/pages/verify/user_edit')">
        <text>+</text>
        <text>{{ $t('verify.user.verifier') }}</text>
      </view>
    </view>
    <mescroll-uni class="list-wrap" @getData="getListData" top="160" ref="mescroll" :size="8">
      <block slot="list">
        <block v-if="recordsList.length > 0">
          <view class="list" v-for="(item, index) in recordsList" :key="index">
            <view class="title">
              <text class="time">{{ $t('verify.user.verifier_label') }}{{ item.verifier_name }}</text>
              <view>
                <text class="color-base-text" @click="edit_user(item.verifier_id)">{{ $t('verify.user.edit') }}</text>
                <text class="margin-left color-base-text" @click="delete_user(index)">{{ $t('verify.user.delete') }}</text>
              </view>
            </view>
            <view class="other_info padding-top">
              {{ $t('verify.user.member_account') }}
              <block v-if="item.member_id && item.username">{{ item.username }}</block>
              <block v-else-if="item.member_id && !item.username">{{ item.mobile }}</block>
              <block v-else>--</block>
            </view>
            <view class="other_info">{{ $t('verify.user.create_time') }}{{ $util.timeStampTurnTime(item.create_time) }}</view>
          </view>
        </block>
        <ns-empty v-else-if="isShow && recordsList.length == 0" :text="$t('verify.user.no_verify_data')"></ns-empty>
      </block>
    </mescroll-uni>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      formData: {
        verifier_name: ''
      },
      recordsList: []
    }
  },
  onShow() {
    if (!this.$util.checkToken('/pages/verify/user')) return
    if (this.$refs.mescroll) this.$refs.mescroll.refresh()
  },
  methods: {
    edit_user(id) {
      this.$util.redirectTo('/pages/verify/user_edit', { verifier_id: id })
    },
    search() {
      this.$refs.mescroll.refresh()
    },
    //删除
    delete_user(index) {
      uni.showModal({
        title: this.$t('verify.user.operation_tips'),
        content: this.$t('verify.user.confirm_delete_verifier'),
        success: (res) => {
          this.$api.sendRequest({
            url: '/shopapi/verify/deleteUser',
            data: { ids: this.recordsList[index].verifier_id },
            success: (res) => {
              if (res.code >= 0 && res.data) {
                this.recordsList.splice(index, 1)
              } else {
                this.$util.showToast({
                  title: this.message
                })
              }
            }
          })
        }
      })
    },
    getListData(mescroll) {
      var data = {
        page_size: mescroll.size,
        page: mescroll.num
      }
      Object.assign(data, this.formData)

      this.$api.sendRequest({
        url: '/shopapi/verify/user',
        data: data,
        success: (res) => {
          let newArr = []
          let msg = res.message
          if (res.code == 0 && res.data) {
            newArr = res.data.list
          } else {
            this.$util.showToast({
              title: msg
            })
          }
          mescroll.endSuccess(newArr.length)
          //设置列表数据
          if (mescroll.num == 1) this.recordsList = [] //如果是第一页需手动制空列表
          this.recordsList = this.recordsList.concat(newArr) //追加新数据
          if (this.$refs.loadingCover) this.$refs.loadingCover.hide()
          this.isShow = true
        }
      })
    }
  }
}
</script>

<style lang="scss">
page {
  overflow: hidden;
}
.search-wrap {
  display: flex;
  justify-content: space-between;
  padding: 30rpx 30rpx;
  background-color: #fff;
  .search-input-inner {
    display: flex;
    align-items: center;
    width: 460rpx;
    height: 70rpx;
    padding: 0 30rpx;
    background-color: $color-bg;
    border-radius: 100rpx;
    box-sizing: border-box;
    .search-input-icon {
      margin-right: 10rpx;
      color: $color-tip;
    }
  }
  .search-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200rpx;
    height: 70rpx;
    color: #fff;
    border-radius: 100rpx;
    text {
      margin-right: 10rpx;
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
    border-bottom: 1px solid $color-line;
    .time {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .status {
      margin-left: 30rpx;
    }
  }
  .status {
    margin-left: 30rpx;
  }
}
.other_info {
  font-size: $font-size-tag;
  color: $color-tip;
}
</style>
