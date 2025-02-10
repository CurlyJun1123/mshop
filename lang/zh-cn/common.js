import login from './login'
import my from './my'
import property from './property'

export const lang = {
  // 底部选项卡
  tabBar: {
    home: '首页',
    category: '分类',
    cart: '购物车',
    member: '个人中心'
  },

  //公共
  common: {
    //语言包名称
    'zh-cn': '中文',
    'en-us': '英文',
    mescrollTextInOffset: '下拉刷新',
    mescrollTextOutOffset: '释放更新',
    mescrollEmpty: '暂无相关数据',
    goodsRecommendTitle: '猜你喜欢',
    currencySymbol: '¥',
    submit: '提交'
  },

  lang: '语言',

  ...login,
  ...my,
  ...property
}
