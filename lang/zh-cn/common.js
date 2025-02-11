import login from './login'
import my from './my'
import property from './property'

export default {
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
    currencySymbol: '¥'
  },

  lang: '语言',

  ...login,
  ...my,
  ...property,

  apply: {
    agreement: {
      sign_agreement: '签订入驻协议',
      agree_terms: '我已阅读并同意以上协议',
      next_step: '下一步，填写申请信息',
      agree_first: '请先同意协议'
    }
  },

  index: {
    shop_expiring_soon: '店铺即将到期，请尽快续费',
    shop_suspended: '店铺已暂停服务，无法正常营业',
    shop_expired: '店铺已经过期，请尽快续费',
    shop_remaining: '店铺剩余',
    days_to_expire: '天到期',
    expired: '已到期',
    certify_now: '立即认证',
    renew_now: '立即续费',
    not_certified: '未认证',
    certified: '已认证',
    main_industry: '主营行业：',
    shop_status: '店铺状态：',
    normal: '正常',
    closed: '关闭',
    expiration_time: '到期时间：',
    permanent: '永久',
    data_overview: '数据概况',
    today: '今日',
    yesterday: '昨日',
    total: '总计',
    order_count: '订单数',
    sales_amount: '销售额（元）',
    shop_favorites_count: '店铺收藏数',
    more: '更多',
    pending_payment: '待支付',
    pending_shipment: '待发货',
    refunding: '退款中',
    pending_review: '待审核',
    violation_delisting: '违规下架',
    product_release: '商品发布',
    order_query: '订单查询',
    financial_status: '财务状况',
    transaction_analysis: '交易分析',
    store_settlement: '店铺结算',
    member_management: '会员管理',
    contact_address: '联系地址',
    all: '全部',
    '7_days': '7天',
    '15_days': '15天',
    '30_days': '30天',
    sales_amount: '销售额',
    order_count: '订单数',
    yuan: '元',
    pieces: '笔',
    multi_merchant_mobile_app: '多商户手机版商家端',

    all_menu: {
      store_management: '店铺经营',
      product_release: '商品发布',
      product_management: '商品管理',
      order_management: '订单管理',
      member_management: '会员管理',
      financial_management: '财务管理',
      asset_overview: '资产概况',
      withdrawal_record: '提现记录',
      settlement_fee: '入驻费用',
      store_settlement: '店铺结算',
      statistical_analysis: '统计分析',
      transaction_statistics: '交易统计',
      store_statistics: '店铺统计',
      product_statistics: '商品统计',
      visit_statistics: '访问统计',
      store_settings: '店铺设置',
      store_information: '店铺信息',
      user_management: '用户管理',
      contact_address: '联系地址',
      platform_announcements: '平台公告',
      verification_platform: '核销台',
      verification_personnel: '核销人员'
    }
  },

  verify: {
    verification_records: '核销记录',
    click_to_scan_verification_code: '点击此区域扫描核销码',
    input_verification_code: '输入核销码',
    please_enter_verification_code: '请输入核销码',
    submit_verification_code: '提交核销码',
    verify_usage: '验证使用',
    h5_not_support_scan: 'H5端不支持扫码核销',
    please_scan_mini_program_qr_code: '请扫描小程序二维码',

    records: {
      placeholder_verifier_name: '请输入核销人员名称',
      filter: '筛选',
      verifier_name: '核销人员名称',
      verification_type: '核销类型',
      verification_time: '核销时间',
      start_time: '开始时间',
      end_time: '结束时间',
      verification_code: '核销码',
      placeholder_verification_code: '请输入核销码',
      reset: '重置',
      confirm: '确定',
      copy: '复制',
      verified: '已核销',
      not_verified: '尚未核销',
      verifier: '核销员',
      creation_time: '创建时间',
      verification_time: '核销时间',
      no_verification_data: '暂无核销数据'
    }
  }
}
