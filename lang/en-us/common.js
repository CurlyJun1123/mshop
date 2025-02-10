import login from './login'
import my from './my'
import property from './property'

export default {
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
  ...property,

  index: {
    shop_expiring_soon: 'The store is about to expire, please renew it as soon as possible',
    shop_suspended: 'The store has suspended service and cannot operate normally',
    shop_expired: 'The store has expired, please renew it as soon as possible',
    shop_remaining: 'Remaining store',
    days_to_expire: 'days to expire',
    expired: 'Expired',
    certify_now: 'Authenticate now',
    renew_now: 'Renew now',
    not_certified: 'Not certified',
    certified: 'Certified',
    main_industry: 'Main industry:',
    shop_status: 'Store status:',
    normal: 'Normal',
    closed: 'Closed',
    expiration_time: 'Expiration time:',
    permanent: 'Permanent',
    data_overview: 'Data overview',
    today: 'Today',
    yesterday: 'Yesterday',
    total: 'Total',
    order_count: 'Order count',
    sales_amount: 'Sales amount (Yuan)',
    shop_favorites_count: 'Store favorites count',
    more: 'More',
    pending_payment: 'Pending payment',
    pending_shipment: 'Pending shipment',
    refunding: 'Refunding',
    pending_review: 'Pending review',
    violation_delisting: 'Violation delisting',
    product_release: 'Product release',
    order_query: 'Order query',
    financial_status: 'Financial status',
    transaction_analysis: 'Transaction analysis',
    store_settlement: 'Store settlement',
    member_management: 'Member management',
    contact_address: 'Contact address',
    all: 'All',
    '7_days': '7 days',
    '15_days': '15 days',
    '30_days': '30 days',
    sales_amount: 'Sales Amount',
    order_count: 'Order Count',
    yuan: 'Yuan',
    pieces: 'Pieces',
    multi_merchant_mobile_app: 'Multi-Merchant Mobile App',

    all_menu: {
      store_management: 'Store Management',
      product_release: 'Product Release',
      product_management: 'Product Management',
      order_management: 'Order Management',
      member_management: 'Member Management',
      financial_management: 'Financial Management',
      asset_overview: 'Asset Overview',
      withdrawal_record: 'Withdrawal Record',
      settlement_fee: 'Settlement Fee',
      store_settlement: 'Store Settlement',
      statistical_analysis: 'Statistical Analysis',
      transaction_statistics: 'Transaction Statistics',
      store_statistics: 'Store Statistics',
      product_statistics: 'Product Statistics',
      visit_statistics: 'Visit Statistics',
      store_settings: 'Store Settings',
      store_information: 'Store Information',
      user_management: 'User Management',
      contact_address: 'Contact Address',
      platform_announcements: 'Platform Announcements',
      verification_platform: 'Verification Platform',
      verification_personnel: 'Verification Personnel'
    }
  }
}
