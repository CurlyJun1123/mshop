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

  property: {
    dashboard: {
      account_overview: '账户概况',
      shop_total_income: '店铺总收入(元)',
      available_balance: '可用余额(元)',
      withdraw: '提现',
      pending_settlement: '待结算(元)',
      view_details: '查看明细',
      entry_fee: '入驻费用(元)',
      shop_deposit: '店铺保证金(元)',
      withdrawn: '已提现(元)',
      withdrawal_records: '提现记录',
      withdrawing: '提现中(元)',
      all: '全部',
      income: '收入',
      expense: '支出',
      start_time: '开始时间',
      end_time: '结束时间',
      income_source: '收支来源',
      amount: '金额（元）',
      transaction_type: '收支类型',
      time: '时间',
      description: '说明',
      no_account_data: '暂无账户数据',
      start_time_error: '开始时间不能大于结束时间'
    }
  },

  renew: {
    apply: {
      shop_name: '店铺名称',
      shop_package: '开店套餐',
      main_industry: '主营行业',
      entry_duration: '入驻时长',
      select_duration: '请选择入驻时长',
      service_fee: '服务费',
      total: '总计',
      payment_voucher: '付款凭证',
      voucher_desc: '付款凭证说明',
      voucher_desc_placeholder: '请输入付款凭证说明',
      receiving_account: '收款账户信息',
      bank_account_name: '银行开户名',
      bank_account: '银行账户',
      bank_name: '开户名称',
      bank_address: '开户所在地',
      submit: '提交',
      upload_success: '上传成功',
      select_duration_tip: '请选择入驻年长',
      upload_voucher_tip: '请上传支付凭证',
      renew_success: '申请续签成功'
    }
  },

  statistics: {
    goods: {
      real_time_overview: '实时概况',
      new_goods: '新增商品',
      goods_views: '商品浏览',
      goods_favorites: '商品收藏',
      order_goods_piece: '订单商品(件)',
      item: '条',
      real_time_today: '今日实时',
      last_7_days: '近7天',
      last_30_days: '近30天',
      goods_order_count: '商品订单数',
      goods_collect_count: '商品收藏数',
      goods_view_count: '商品浏览数'
    },

    shop: {
      realtime_overview: '实时概况',
      new_goods: '新增商品(件)',
      goods_views: '商品浏览(条)',
      goods_favorites: '商品收藏(件)',
      order_goods: '订单商品(件)',
      shop_favorites: '店铺收藏(个)',
      order_amount_tip: '订单金额(元)',
      order_count: '订单数(笔)',

      today_realtime: '今日实时',
      last_7_days: '近7天',
      last_30_days: '近30天',
      new_goods_count: '新增商品数',
      goods_view_count: '商品浏览数',
      goods_collect_count: '商品收藏数',
      order_goods_count: '订单商品数',
      shop_collect_count: '店铺收藏数',
      order_amount: '订单金额',
      order_count: '订单数',
      unit_piece: '件',
      unit_item: '条',
      unit_shop: '个',
      unit_currency: '元',
      unit_order: '笔'
    },

    transaction: {
      transaction_overview: '交易概况',
      order_amount: '订单金额(元)',
      order_count: '订单数(笔)',
      goods_count: '订单商品数(件)',
      today_realtime: '今日实时',
      last_7_days: '近7天',
      last_30_days: '近30天',
      order_amount_text: '订单金额',
      order_count_text: '订单数',
      goods_count_text: '订单商品数',
      unit_yuan: '元',
      unit_count: '笔',
      unit_piece: '件'
    },

    visit: {
      visit_overview: '访问概况',
      shop_collect: '店铺收藏',
      goods_collect: '商品收藏',
      goods_browse: '商品浏览',
      today_realtime: '今日实时',
      last_7_days: '近7天',
      last_30_days: '近30天',
      shop_collect_count: '店铺收藏数',
      goods_collect_count: '商品收藏数',
      goods_browse_count: '商品浏览数'
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
      no_verification_data: '暂无核销数据',

      all: '全部',
      pickup: '订单自提',
      virtual_goods: '虚拟商品',
      start_time_error: '开始时间不能大于结束时间',
      end_time_error: '结束时间不能小于开始时间'
    },

    user_edit: {
      verifier_name: '核销人员姓名',
      enter_verifier_name: '请输入核销人员姓名',
      associate_member: '关联前台会员',
      enter_member_info: '请输入会员名或手机',
      username: '用户名',
      mobile: '手机号',
      associate_member_tip: '关联会员后才能在手机上使用核销台功能，否则无法在手机上核销',
      save: '保存',
      edit_verifier: '编辑核销人员',
      add_verifier: '添加核销人员',
      verifier_name_required: '核销人员姓名不能为空',
      member_required: '关联前台会员不能为空'
    },

    user: {
      enter_verifier_name: '请输入核销人员名称',
      verifier: '核销人员',
      verifier_label: '核销人员：',
      edit: '编辑',
      delete: '删除',
      member_account: '会员账号：',
      create_time: '创建时间：',
      no_verify_data: '暂无核销数据',
      operation_tips: '操作提示',
      confirm_delete_verifier: '确定要删除此核销员吗？'
    }
  }
}
