<template>
	<view class="order-list-wrap">
		<view class="nav-wrap">
			<text class="color-base-border" @click="goOrderList()">{{ $t('order.refund.list.order_list') }}</text>
			<text class="selected color-base-bg color-base-border">{{ $t('order.refund.list.refund_rights') }}</text>
		</view>
		<view class="search-wrap">
			<view class="search-input-inner">
				<text class="search-input-icon iconfont iconsousuo" @click="searchOrder()"></text>
				<input class="search-input-text font-size-tag" maxlength="50" v-model="formData.sku_name" :placeholder="$t('order.refund.list.enter_goods_name')" @confirm="searchOrder()" />
			</view>
		</view>
		<view class="tab-block">
			<scroll-view scroll-x="true" class="scroll tab-wrap" :scroll-into-view="'tab'+orderConditionCurr.refund_status_list" scroll-with-animation="true">
				<block v-for="(item, index) in upperStatusList" :key="index">
					<!-- #ifdef MP -->
					<view class="tab-item" @click="tabChange(index)"
						:class="{'active color-base-text color-base-bg-before':index == orderConditionCurr.refund_status_list,iphone:!$util.isAndroid()}"
						:id="'tab'+index">
						<text>{{ item.name ? item.name : $t('order.refund.list.all') }}</text>
					</view>
					<!-- #endif -->
					<!-- #ifndef MP -->
					<view class="tab-item" @click="tabChange(index)"
						:class="{'active color-base-text color-base-bg-before':index == orderConditionCurr.refund_status_list}"
						:id="'tab'+index">
						<text>{{ item.name ? item.name : $t('order.refund.list.all') }}</text>
					</view>
					<!-- #endif -->
				</block>
			</scroll-view>
			<view class="choose" @click="showScreen = true">
				<text>{{ $t('order.refund.list.filter_text') }}</text>
				<text class="iconfont iconshaixuan color-tip"></text>
			</view>
		</view>

		<!-- 筛选弹出框 -->
		<uni-drawer :visible="showScreen" mode="right" @close="showScreen = false" class="screen-wrap">
			<view class="title color-tip">{{ $t('order.refund.list.filter') }}</view>
			<scroll-view scroll-y="true">
				<view class="item-wrap">
					<view class="label"><text>{{ $t('order.refund.list.goods_name') }}</text></view>
					<view class="value-wrap"><input class="uni-input" :placeholder="$t('order.refund.list.enter_goods_name')" v-model="formData.sku_name" /></view>
				</view>
				<view class="item-wrap">
					<view class="label"><text>{{ $t('order.refund.list.order_number') }}</text></view>
					<view class="value-wrap"><input class="uni-input" :placeholder="$t('order.refund.list.enter_order_number')" v-model="formData.order_no" /></view>
				</view>
				<view class="item-wrap">
					<view class="label"><text>{{ $t('order.refund.list.refund_number') }}</text></view>
					<view class="value-wrap"><input class="uni-input" :placeholder="$t('order.refund.list.enter_refund_number')" v-model="formData.refund_no" /></view>
				</view>
				<view class="item-wrap">
					<view class="label">
						<text>{{ $t('order.refund.list.apply_time') }}</text>
						<view class="more">
							<uni-tag :inverted="true" :text="$t('order.refund.list.last_7_days')" @click="dateSelect(7)" />
							<uni-tag :inverted="true" :text="$t('order.refund.list.last_30_days')" @click="dateSelect(30)" />
						</view>
					</view>
					<view class="value-wrap">
						<picker mode="date" @change="bindTimeStartChange" class="picker margin-right" :value="formData.start_time">
							<view class="uni-input font-size-tag" :class="{ 'color-tip': !formData.end_time }">
								{{ formData.start_time ? formData.start_time : $t('order.refund.list.start_time') }}
							</view>
						</picker>
						<view class="h-line"></view>
						<picker mode="date" @change="bindTimeEndChange" class="picker margin-left" :value="formData.end_time">
							<view class="uni-input font-size-tag" :class="{ 'color-tip': !formData.end_time }">
								{{ formData.end_time ? formData.end_time : $t('order.refund.list.end_time') }}
							</view>
						</picker>
					</view>
				</view>
				<view class="item-wrap">
					<view class="label"><text>{{ $t('order.refund.list.refund_status') }}</text></view>
					<view class="list">
						<block v-for="(item, index) in orderCondition.refund_status_list" :key="index">
							<uni-tag
								:inverted="true"
								:text="item.name ? item.name : $t('order.refund.list.all')"
								:type="index == orderConditionCurr.refund_status_list ? 'primary' : 'default'"
								@click="uTag(index, 'refund_status_list', 'refund_status')"
							/>
						</block>
					</view>
				</view>
				<view class="item-wrap">
					<view class="label"><text>{{ $t('order.refund.list.refund_type') }}</text></view>
					<view class="list">
						<block v-for="(item, index) in orderCondition.refund_type_list" :key="index">
							<uni-tag
								:inverted="true"
								:text="item.name"
								:type="index == orderConditionCurr.refund_type_list ? 'primary' : 'default'"
								@click="uTag(index, 'refund_type_list', 'refund_type')"
							/>
						</block>
					</view>
				</view>
			</scroll-view>
			<view class="footer">
				<button type="default" @click="resetData">{{ $t('order.refund.list.reset') }}</button>
				<button type="primary" @click="screenData">{{ $t('order.refund.list.confirm') }}</button>
			</view>
		</uni-drawer>

		<mescroll-uni class="list-wrap" @getData="getListData" top="340" ref="mescroll" :size="8">
			<block slot="list">
				<block v-if="dataList.length > 0">
					<view class="order-item" v-for="(item, index) in dataList" :key="index" @click="toDetail(item)">
						<view class="head">
							<text class="order-no">{{ $t('order.refund.list.refund_no_prefix') }}{{ item.refund_no }}</text>
							<text class="refund-status-name color-base-text">{{ item.refund_status_name }}</text>
							<text class="order-status">{{ item.refund_type == 1 ? $t('order.refund.list.refund_only') : $t('order.refund.list.refund_and_return') }}</text>
						</view>
						<view class="goods-item">
							<view class="goods-img"><image :src="$util.img(item.sku_image, { size: 'mid' })" mode="widthFix" @error="imgError(index)"></image></view>
							<view class="info-wrap">
								<view class="name-wrap">{{ item.goods_name }}</view>
								<view class="spec-wrap" v-if="item.sku_spec_format">
									<block v-for="(x, i) in item.sku_spec_format" :key="i">{{ x.spec_value_name }} {{ i < item.sku_spec_format.length - 1 ? '; ' : '' }}</block>
								</view>
								<view class="more-wrap">
									<view class="price-wrap">
										<view class="price">
											<text class="unit">￥</text>
											<text>{{ item.price }}</text>
										</view>
										<view class="num">x{{ item.num }}</view>
									</view>
									<view class="delivery-status-name color-base-text">{{ item.delivery_status_name }}</view>
								</view>
							</view>
						</view>
						<view class="total-wrap">
							<view class="order-money">{{ $t('order.refund.list.order_amount') }}{{ item.real_goods_money }}</view>
							<text class="label">{{ $t('order.refund.list.refund_amount') }}</text>
							<view class="price color-base-text">
								<text class="unit">￥</text>
								<text>{{ item.refund_apply_money }}</text>
							</view>
						</view>
						<view class="member-wrap">
							<view class="order-no">{{ $t('order.refund.list.order_no_prefix') }}{{ item.order_no }}</view>
							<view class="create-time">{{ $t('order.refund.list.apply_time_prefix') }}{{ $util.timeStampTurnTime(item.refund_action_time) }}</view>
						</view>
					</view>
				</block>
				<ns-empty v-else :text="$t('order.refund.list.no_data')"></ns-empty>
			</block>
		</mescroll-uni>
		<diy-bottom-nav></diy-bottom-nav>
		<loading-cover ref="loadingCover"></loading-cover>
	</view>
</template>

<script>
import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
import uniTag from '@/components/uni-tag/uni-tag.vue';
import diyBottomNav from '@/components/diy-bottom-nav/diy-bottom-nav.vue';
import refundList from '../js/refund_list.js';
export default {
	data() {
		return {};
	},
	components: {
		uniDrawer,
		uniTag,
		diyBottomNav
	},
	mixins: [refundList]
};
</script>

<style lang="scss">
@import '../css/refund_list.scss';
</style>
