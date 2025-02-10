import login from './login'
import my from './my'
import property from './property'

export const lang = {
  // 底部选项卡
  tabBar: {
    home: 'index',
    category: 'category',
    cart: 'cart',
    member: 'member'
  },

  //公共
  common: {
    //语言包名称
    'zh-cn': 'Chinese',
    'en-us': 'English',
    mescrollTextInOffset: 'pull to refresh',
    mescrollTextOutOffset: 'Loading...',
    mescrollEmpty: 'No data available',
    goodsRecommendTitle: 'Guess you like',
    currencySymbol: '¥'
  },

  lang: 'Lang',

  ...login,
  ...my,
  ...property
}
