<template>
  <view class="list" @click="shwoOperation">
    <view class="search-wrap">
      <view class="search-input-inner">
        <text class="search-input-icon iconfont iconsousuo" @click.stop="searchGoods()"></text>
        <input class="uni-input font-size-tag" maxlength="50" v-model="formData.search_text" :placeholder="$t('goods.list.enter_goods_name')" @confirm="searchGoods()" />
      </view>
      <view class="search-btn color-base-bg" @click.stop="linkSkip()">
        <text>+</text>
        <text>{{ $t('goods.list.add_goods') }}</text>
      </view>
    </view>
    <view class="tab-block">
      <scroll-view scroll-x="true" class="tab-wrap scroll">
        <view class="tab-item" @click.stop="tabChange()" :class="-1 == status ? 'active color-base-text color-base-bg-before' : ''">{{ $t('goods.list.all') }}</view>
        <block v-for="(item, index) in statusList" :key="index">
          <view class="tab-item" @click.stop="tabChange(item.id)" :class="item.id == status ? 'active color-base-text color-base-bg-before' : ''">{{ item.name }}</view>
        </block>
      </scroll-view>
      <view class="choose" @click.stop="showScreen = true">
        <text>{{ $t('goods.list.filter') }}</text>
        <text class="iconfont iconshaixuan color-tip"></text>
      </view>
    </view>
    <mescroll-uni class="list-wrap" @getData="getListData" top="210" ref="mescroll" :size="8">
      <block slot="list">
        <view class="item-inner" v-for="(item, index) in dataList" :key="index">
          <view class="item-wrap" @click.stop="shwoOperation(item)">
            <image class="item-img" :src="item.goods_image == '' ? $util.img($util.getDefaultImage().default_goods_img) : $util.img(item.goods_image.split(',')[0], { size: 'mid' })" @error="imgError(index)"></image>
            <view class="item-desc">
              <view class="item-name uni-using-hide">{{ item.goods_name }}</view>
              <view class="promotion-ident" v-if="item.promotion_addon && item.promotion_addon_list">
                <text v-for="(promotionItem, promotionIndex) in item.promotion_addon_list" :key="promotionIndex" class="color-base-bg">{{ promotionItem.short }}</text>
              </view>
              <view class="item-num-wrap">
                <text :class="{ 'alarm-red': item.goods_stock_alarm && item.goods_stock <= item.goods_stock_alarm }">{{ $t('goods.list.stock') }}：{{ item.goods_stock }}</text>
                <text>{{ $t('goods.list.sales') }}：{{ item.sale_num }}</text>
              </view>
              <view class="item-operation">
                <text class="color-base-text item-price">￥{{ item.price }}</text>
                <text class="iconshenglve iconfont"></text>
              </view>
            </view>
          </view>
          <view class="operation" @click.stop="showHide(item)" v-if="item.is_off">
            <view class="operation-item" @click.stop="linkSkip(item)">
              <image :src="$util.img('/upload/uniapp/shop_uniapp/goods/goods_list_01.png')" mode="aspectFit"></image>
              <text>{{ $t('goods.list.edit') }}</text>
            </view>
            <view class="operation-item" v-if="item.verify_state == 1 && item.goods_state == 1" @click.stop="offGoods(item)">
              <image :src="$util.img('/upload/uniapp/shop_uniapp/goods/goods_list_02.png')" mode="aspectFit"></image>
              <text>{{ $t('goods.list.off_shelf') }}</text>
            </view>
            <view class="operation-item" v-if="item.verify_state == 1 && item.goods_state == 0" @click.stop="onGoods(item)">
              <image :src="$util.img('/upload/uniapp/shop_uniapp/goods/goods_list_06.png')" mode="aspectFit"></image>
              <text>{{ $t('goods.list.on_shelf') }}</text>
            </view>
            <view class="operation-item" @click.stop="copyGoods(item)">
              <image :src="$util.img('/upload/uniapp/shop_uniapp/goods/goods_list_03.png')" mode="aspectFit"></image>
              <text>{{ $t('goods.list.copy') }}</text>
            </view>
            <view class="operation-item" @click.stop="deleteGoods(item)">
              <image :src="$util.img('/upload/uniapp/shop_uniapp/goods/goods_list_04.png')" mode="aspectFit"></image>
              <text>{{ $t('goods.list.delete') }}</text>
            </view>
            <view class="operation-item" @click.stop="getVerifyStateRemark(item)" v-if="item.verify_state == 10">
              <image :src="$util.img('/upload/uniapp/shop_uniapp/goods/goods_list_07.png')" mode="aspectFit"></image>
              <text>{{ $t('goods.list.reason') }}</text>
            </view>
            <view class="operation-item" @click.stop="goOutput(item)">
              <image :src="$util.img('/upload/uniapp/shop_uniapp/goods/goods_list_05.png')" mode="aspectFit"></image>
              <text>{{ $t('goods.list.inventory_management') }}</text>
            </view>
          </view>
        </view>
        <ns-empty v-if="!dataList.length" :text="$t('goods.list.no_goods_data')"></ns-empty>
      </block>
    </mescroll-uni>
    <!-- 筛选弹出框 -->
    <uni-drawer :visible="showScreen" mode="right" @close="showScreen = false" class="screen-wrap">
      <view class="title color-tip">{{ $t('goods.list.filter') }}</view>
      <scroll-view scroll-y="true">
        <view class="item-wrap">
          <view class="label">{{ $t('goods.list.goods_name') }}</view>
          <view class="value-wrap"><input class="uni-input" :placeholder="$t('goods.list.enter_goods_name')" v-model="formData.search_text" /></view>
        </view>
        <view class="item-wrap">
          <view class="label">{{ $t('goods.list.sales') }}</view>
          <view class="value-wrap">
            <input class="uni-input" :placeholder="$t('goods.list.min_sales')" v-model="formData.start_sale" />
            <view class="h-line"></view>
            <input class="uni-input" :placeholder="$t('goods.list.max_sales')" v-model="formData.end_sale" />
          </view>
        </view>
        <view class="item-wrap">
          <view class="label">{{ $t('goods.list.goods_type') }}</view>
          <view class="list">
            <block v-for="(item, index) in goodsClass" :key="index">
              <uni-tag :inverted="true" :text="item.name" :type="index == goodsConditionCurr.goods_class ? 'primary' : 'default'" @click="uTag(index, 'goods_class', 'goods_class')" />
            </block>
          </view>
        </view>
        <view class="item-wrap">
          <view class="label">{{ $t('goods.list.marketing_activity') }}</view>
          <view class="list">
            <block v-for="(item, index) in goodsCondition.goods_promotion_type" :key="index">
              <uni-tag :inverted="true" :text="item.name" :type="index == goodsConditionCurr.goods_promotion_type ? 'primary' : 'default'" @click="uTag(index, 'goods_promotion_type', 'promotion_type')" />
            </block>
          </view>
        </view>
      </scroll-view>
      <view class="footer">
        <button type="default" @click="resetData">{{ $t('goods.list.reset') }}</button>
        <button type="primary" @click="screenData">{{ $t('goods.list.confirm') }}</button>
      </view>
    </uni-drawer>
    <loading-cover ref="loadingCover"></loading-cover>
  </view>
</template>

<script>
import list from './js/list.js'
export default {
  mixins: [list]
}
</script>

<style lang="scss">
@import './css/list.scss';
</style>
