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
    currencySymbol: '¥',
    tips: '提示',
    copy: '复制',
    yuan: '元',
    confirm: '确定'
  },

  lang: '语言',

  goods: {
    edit: {
      edit_goods: '编辑商品',
      add_goods: '添加商品',
      goods_not_exist: '商品不存在',
      please_select_first_category: '请选择一级商品分类',
      please_select_second_category: '请选择二级商品分类',
      please_select_third_category: '请选择三级商品分类',
      please_upload_goods_image: '请上传商品图片',
      please_enter_validity: '请输入有效期',
      validity_format_error: '[有效期]格式输入错误',
      please_enter_sale_price: '请输入销售价',
      sale_price_format_error: '[销售价]格式输入错误',
      strikethrough_price_format_error: '[划线价]格式输入错误',
      cost_price_format_error: '[成本价]格式输入错误',
      weight_format_error: '[重量(kg)]格式输入错误',
      volume_format_error: '[体积(m³)]格式输入错误',
      please_edit_spec_info: '请编辑规格信息',
      please_enter_stock: '请输入库存',
      stock_format_error: '[库存]格式输入错误',
      stock_warning_format_error: '[库存预警]格式输入错误',
      stock_warning_not_equal_stock: '[库存预警]不能等于库存数量',
      stock_warning_exceed_stock: '[库存预警]不能超过库存数量',
      please_select_shipping_template: '请选择运费模板',
      please_fill_goods_details: '请填写商品详情',
      purchase_limit_format_error: '[限购]格式输入错误',
      purchase_limit_cannot_be_less_than: '限购数量不能小于',
      starting_quantity_format_error: '[起售]格式输入错误',
      starting_quantity_cannot_be_less_than: '起售数量不能小于',
      starting_quantity_cannot_exceed_purchase_limit: '起售数量不能大于限购数量',
      please_do_not_select_repeatedly: '请勿重复选择'
    },

    album: {
      take_photo: '拍摄照片',
      confirm: '确定'
    },

    list: {
      enter_goods_name: '请输入商品名称',
      add_goods: '添加商品',
      all: '全部',
      filter: '筛选',
      stock: '库存',
      sales: '销量',
      edit: '编辑',
      off_shelf: '下架',
      on_shelf: '上架',
      copy: '复制',
      delete: '删除',
      reason: '原因',
      inventory_management: '库存管理',
      no_goods_data: '暂无商品数据',
      goods_name: '商品名称',
      min_sales: '最低销量',
      max_sales: '最高销量',
      goods_type: '商品类型',
      marketing_activity: '营销活动',
      reset: '重置',
      confirm: '确定',
      on_sale: '销售中',
      in_warehouse: '仓库中',
      pending_review: '待审核',
      review_failed: '审核失败',
      illegal_off_shelf: '违规下架',
      confirm_delete: '删除后进入回收站，确定删除吗?',
      confirm_copy: '复制商品会存放在仓库中,确定复制吗',
      no_violation_info: '暂无违规信息',
      violation_reason: '违规原因',
      physical_goods: '实物商品',
      virtual_goods: '虚拟商品',
      copied_to_warehouse: '商品已放入仓库中',
      min_sales_cannot_exceed_max_sales: '最低销量不能大于最高销量'
    },

    output: {
      specification: '规格',
      sale_price: '销售价',
      currency: '元',
      stock: '库存',
      placeholder_stock: '0',
      unit: '件',
      save: '保存',
      enter_stock: '请输入[第{index}个规格]的库存',
      invalid_stock_format: '[第{index}个规格的库存]格式输入错误'
    }
  },

  index: {
    error_message: '错误: {message}',
    sales_amount: '销售额',
    order_count: '订单数',
    shop_expiring: '店铺即将到期，请尽快续费',
    shop_paused: '店铺已暂停服务，无法正常营业',
    shop_expired: '店铺已经过期，请尽快续费',
    shop_remaining_days: '店铺剩余{days}天到期',
    expired: '（已到期）',
    certify_now: '立即认证',
    renew_now: '立即续费',
    seven_days: '7天',
    fifteen_days: '15天',
    thirty_days: '30天',
    currency_unit: '元',
    order_unit: '笔',
    share_title: '多商户手机版商家端',
    not_certified: '未认证',
    certified: '已认证',
    main_industry: '主营行业',
    shop_status: '店铺状态',
    normal: '正常',
    closed: '关闭',
    expiry_date: '到期时间',
    permanent: '永久',
    data_overview: '数据概况',
    today: '今日',
    yesterday: '昨日',
    total: '总计',
    collect_shop: '店铺收藏数',
    pending_payment: '待支付',
    pending_shipment: '待发货',
    refunding: '退款中',
    pending_review: '待审核',
    illegal_removal: '违规下架',
    product_release: '商品发布',
    order_query: '订单查询',
    financial_status: '财务状况',
    transaction_analysis: '交易分析',
    shop_settlement: '店铺结算',
    member_management: '会员管理',
    contact_address: '联系地址',
    all: '全部',

    all_menu: {
      shop_management: '店铺经营',
      publish_goods: '商品发布',
      manage_goods: '商品管理',
      manage_orders: '订单管理',
      manage_members: '会员管理',
      financial_management: '财务管理',
      asset_overview: '资产概况',
      withdrawal_records: '提现记录',
      settlement_fees: '入驻费用',
      shop_settlement: '店铺结算',
      store_settlement: '门店结算',
      statistics_analysis: '统计分析',
      transaction_statistics: '交易统计',
      shop_statistics: '店铺统计',
      goods_statistics: '商品统计',
      visit_statistics: '访问统计',
      shop_settings: '店铺设置',
      shop_info: '店铺信息',
      user_management: '用户管理',
      contact_address: '联系地址',
      platform_notice: '平台公告',
      verification_desk: '核销台',
      verification_staff: '核销人员'
    }
  },

  login: {
    login: {
      merchant_login: '商家登录',
      enter_username: '请输入用户名',
      enter_password: '请输入密码',
      enter_captcha: '请输入验证码',
      login_button: '登录',
      not_partner: '还没成为我们的伙伴？',
      apply_join: '申请入驻'
    },
    modify_pwd: {
      old_password: '原密码',
      new_password: '新密码',
      confirm_password: '确认密码',
      enter_old_password: '请输入原密码',
      enter_new_password: '请输入新密码',
      enter_confirm_password: '请输入确认密码',
      save_button: '保存',
      password_mismatch: '两次密码不一致'
    }
  },

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

  member: {
    coupon: {
      min_use_amount: '满{amount}可用',
      send_coupon: '发放优惠券',
      send_success: '优惠券发放成功',
      validity_period: '有效期：',
      valid_days: '领取之日起{days}天有效',
      no_data: '暂无优惠券数据'
    },

    detail: {
      phone: '手机号',
      email: '邮箱',
      follow_status: '关注状态',
      followed: '已关注',
      unfollowed: '未关注',
      follow_time: '关注时间',
      order_no: '订单号',
      order_time: '下单时间',
      transaction_info: '交易信息',
      no_order_data: '暂无订单数据'
    },

    list: {
      search_placeholder: '请输入会员昵称 / 手机号 / 邮箱',
      email: '邮箱',
      shop_follow: '店铺关注',
      followed: '已关注',
      unfollowed: '未关注',
      view_detail: '查看详情',
      send_coupon: '发放优惠券',
      no_member_data: '暂无会员数据'
    }
  },

  my: {
    contact: {
      select_location: '请选择地理位置',
      end_time_error: '结束时间不能小于开始时间',
      start_time_error: '开始时间不能大于结束时间',
      data_error: '数据有误',
      auth_location: '是否授权当前位置',
      auth_location_content: '需要获取您的地理位置，请确认授权，否则地图功能将无法使用',
      auth_success: '授权成功',
      auth_failed: '授权失败',
      name_required: '联系人姓名不能为空',
      mobile_required: '手机号不能为空',
      mobile_invalid: '请输入正确的手机号',
      monday: '周一',
      tuesday: '周二',
      wednesday: '周三',
      thursday: '周四',
      friday: '周五',
      saturday: '周六',
      sunday: '周日'
    },

    storeInfo: '店铺信息',
    contactAddress: '联系地址',
    userManagement: '用户管理',
    changePassword: '修改密码',
    storeSettlement: '门店结算',
    shopSettlement: '店铺结算',
    withdrawalRecords: '提现记录',
    verifier: '核销人员',
    switchLanguage: '切换语言',
    logout: '退出登录',
    confirmLogout: '您确定要退出当前账号吗？',
    cancel: '取消',
    confirm: '确定',

    config: {
      storePackage: '开店套餐',
      mainIndustry: '主营行业',
      storeName: '店铺名称',
      storeLogo: '店铺 Logo',
      logoImageSize: '建议图片尺寸：200*60',
      storeAvatar: '店铺头像',
      avatarImageSize: '建议图片尺寸：800*800像素',
      storeBanner: '店铺大图',
      bannerImageHeight: '建议图片高度：150像素',
      storeDescription: '店铺简介',
      enterStoreDescription: '请输入店铺简介',
      storeKeywords: '店铺关键字',
      enterStoreKeywords: '请输入店铺关键字","用逗号隔开',
      keywordsSeparator: '多个关键字之间请用英文","隔开',
      save: '保存'
    },

    contact: {
      name: '联系人姓名',
      'name.placeholder': '请输入联系人姓名',
      mobile: '联系人手机号',
      'mobile.placeholder': '请输入联系人手机号',
      phone: '联系人电话',
      'phone.placeholder': '请输入联系人电话',
      address: '联系地址',
      'address.region': '请选择省市区',
      'address.detail': '详细地址',
      'address.detail.placeholder': '请输入详细地址',
      qq: 'QQ号',
      'qq.placeholder': '请输入QQ号',
      alibaba: '阿里旺旺',
      'alibaba.placeholder': '请输入阿里旺旺',
      email: '邮箱',
      'email.placeholder': '请输入邮箱',
      days: '工作日',
      'days.selected': '已选择',
      'days.placeholder': '请选择工作日',
      hours: '营业时间',
      'hours.start': '开始时间',
      'hours.end': '结束时间',
      'days.select': '选择工作日',
      confirm: '确定'
    },

    user: {
      'username.prompt': '请输入用户名',
      add: '添加用户',
      'username.label': '用户名：',
      normal: '正常',
      locking: '锁定',
      'lastLoginIP.label': '最后登录IP：',
      'lastLoginTime.label': '最后登录时间：',
      edit: '编辑',
      resetPassword: '重置密码',
      delete: '删除',
      newPassword: '新密码',
      'newPassword.label': '请输入新密码',
      confirmNewPassword: '确认新密码',
      'confirmNewPassword.label': '请输入确认新密码',
      cancel: '取消',
      confirm: '确定',
      noUserData: '暂无用户数据'
    },

    edit: {
      username: '用户名',
      'username.placeholder': '请输入用户名',
      password: '密码',
      'password.placeholder': '请输入密码',
      'password.confirm': '再次输入密码',
      'password.confirm.placeholder': '请再次输入密码',
      userGroup: '用户组',
      'userGroup.placeholder': '请选择用户组',
      userStatus: '用户状态',

      'user.edit.confirm': '原密码',
      'user.edit.confirm': '请输入原密码',
      'user.edit.confirm': '新密码',
      'user.edit.confirm': '请输入新密码',
      'user.edit.confirm': '确认密码',
      'user.edit.confirm': '请输入确认密码'
    }
  },

  notice: {
    detail: {
      publish_time: '发表时间',
      notice_prefix: '公告'
    },

    list: {
      top: '置顶',
      empty: '暂无公告',
      share_title: '公告'
    }
  },

  order: {
    detail: {
      basis: {
        auto_receive: '还剩',
        auto_receive_time: '自动收货',
        shipping_address: '收货地址：',
        copy: '复制',
        order_info: '订单信息',
        order_number: '订单编号：',
        order_type: '订单类型：',
        order_source: '订单来源：',
        payment_method: '付款方式：',
        buyer: '买家：',
        delivery_method: '配送方式：',
        marketing_activity: '营销活动：',
        buyer_message: '买家留言：',
        create_time: '创建时间：',
        close_time: '关闭时间：',
        payment_time: '支付时间：',
        seller_note: '卖家备注：',
        invoice_info: '发票信息',
        invoice_type: '发票类型：',
        invoice_title: '发票抬头：',
        title_type: '抬头类型：',
        taxpayer_number: '纳税人识别号：',
        invoice_content: '发票内容：',
        mailing_address: '邮寄地址：',
        receiving_email: '接收邮件：',
        invoice_cost: '发票费用',
        invoice_fee: '发票费用：',
        invoice_tax_rate: '发票税率：',
        shipping_fee: '邮寄费用：',
        settlement_info: '结算信息',
        shop_settlement: '店铺结算金额：',
        platform_settlement: '平台结算金额：',
        settlement_status: '结算状态：',
        shop_refund: '店铺退款金额：',
        platform_refund: '平台退款金额：',
        platform_coupon_amount: '平台优惠券平台承担金额：',
        platform_coupon_refund: '平台优惠券平台承担金额（退款部分）：',
        total_commission: '总支出佣金：',
        goods_amount: '商品金额',
        shop_coupon: '店铺优惠券',
        shop_discount: '店铺优惠',
        order_adjustment: '订单调价',
        shipping: '运费',
        platform_coupon: '平台优惠券',
        balance_used: '使用余额',
        total_items: '共',
        items: '件商品，总计：',
        order_log: '订单日志',
        operation: '操作：',
        operator: '操作人：',
        operation_port: '操作端口：',
        order_status: '订单状态：',
        reminder: '提醒',
        reminder_text_1: '交易成功后，平台将把货款结算至你的店铺账户余额，您可以申请提现',
        reminder_text_2: '请及时关注你发出的包裹状态，确保能配送至买家手中',
        reminder_text_3: '如果买家表示未收到货或者货物有问题，请及时联系买家积极处理，友好协商',
        note: '备注',
        view_logistics: '查看物流',
        offline_payment: '线下支付',
        settled: '已结算',
        pending_settlement: '待结算',
        paper: '纸质',
        electronic: '电子',
        special: '专票',
        general: '普票',
        personal: '个人',
        enterprise: '企业',
        gift: '赠品'
      },

      local: {
        shipping_address: '收货地址：',
        copy: '复制',
        order_info: '订单信息',
        order_no: '订单编号：',
        order_type: '订单类型：',
        order_source: '订单来源：',
        payment_method: '付款方式：',
        buyer: '买家：',
        delivery_method: '配送方式：',
        buyer_message: '买家留言：',
        create_time: '创建时间：',
        close_time: '关闭时间：',
        payment_time: '支付时间：',
        seller_note: '卖家备注：',
        delivery_info: '配送信息',
        delivery_staff: '配送员：',
        contact: '联系方式：',
        delivery_time: '配送时间：',
        invoice_info: '发票信息',
        settlement_info: '结算信息',
        order_amount: '订单金额',
        order_log: '订单日志',
        reminder: '提醒',
        note: '备注',
        offline_payment: '线下支付',
        gift: '赠品',
        goods_amount: '商品金额',
        shop_coupon: '店铺优惠券',
        shop_discount: '店铺优惠',
        order_adjustment: '订单调价',
        shipping_fee: '运费',
        platform_coupon: '平台优惠券',
        balance_used: '使用余额',
        total_items: '共',
        items: '件商品',
        total: '总计',
        shop_settlement: '店铺结算金额',
        platform_settlement: '平台结算金额',
        settlement_status: '结算状态',
        settled: '已结算',
        pending_settlement: '待结算',
        shop_refund: '店铺退款金额',
        platform_refund: '平台退款金额',
        platform_coupon_amount: '平台优惠券平台承担金额',
        platform_coupon_refund: '平台优惠券平台承担金额（退款部分）',
        total_commission: '总支出佣金',
        operation: '操作',
        operator: '操作人',
        operation_port: '操作端口',
        order_status: '订单状态',
        reminder_title: '提醒',
        reminder_settlement: '交易成功后，平台将把货款结算至你的店铺账户余额，您可以申请提现',
        reminder_delivery: '请及时关注你发出的包裹状态，确保能配送至买家手中',
        reminder_issue: '如果买家表示未收到货或者货物有问题，请及时联系买家积极处理，友好协商',
        invoice_type: '发票类型：',
        paper_invoice: '纸质',
        electronic_invoice: '电子',
        special_invoice: '专票',
        general_invoice: '普票',
        invoice_title: '发票抬头：',
        title_type: '抬头类型：',
        personal: '个人',
        enterprise: '企业',
        taxpayer_id: '纳税人识别号：',
        invoice_content: '发票内容：',
        mailing_address: '邮寄地址：',
        receiving_email: '接收邮件：',
        invoice_expense: '发票费用',
        invoice_amount: '发票费用：',
        invoice_tax_rate: '发票税率：',
        mailing_fee: '邮寄费用：'
      },

      store: {
        shipping_address: '收货地址',
        order_info: '订单信息',
        order_number: '订单编号',
        copy: '复制',
        order_type: '订单类型',
        order_source: '订单来源',
        payment_method: '付款方式',
        buyer: '买家',
        delivery_method: '配送方式',
        delivery_store: '配送门店',
        store_address: '门店地址',
        business_hours: '营业时间',
        contact_phone: '联系电话',
        buyer_message: '买家留言',
        create_time: '创建时间',
        close_time: '关闭时间',
        payment_time: '支付时间',
        seller_note: '卖家备注',
        invoice_info: '发票信息',
        invoice_type: '发票类型',
        invoice_title: '发票抬头',
        title_type: '抬头类型',
        taxpayer_number: '纳税人识别号',
        invoice_content: '发票内容',
        mailing_address: '邮寄地址',
        receiving_email: '接收邮件',
        invoice_fee: '发票费用',
        invoice_tax_rate: '发票税率',
        mailing_fee: '邮寄费用',
        settlement_info: '结算信息',
        store_settlement: '店铺结算金额',
        platform_settlement: '平台结算金额',
        settlement_status: '结算状态',
        store_refund: '店铺退款金额',
        platform_refund: '平台退款金额',
        platform_coupon_amount: '平台优惠券平台承担金额',
        platform_coupon_refund: '平台优惠券平台承担金额（退款部分）',
        total_commission: '总支出佣金',
        goods_amount: '商品金额',
        store_coupon: '店铺优惠券',
        store_discount: '店铺优惠',
        order_adjustment: '订单调价',
        shipping_fee: '运费',
        platform_coupon: '平台优惠券',
        balance_payment: '使用余额',
        total_items: '共',
        items: '件商品',
        total: '总计',
        order_log: '订单日志',
        operation: '操作',
        operator: '操作人',
        operation_port: '操作端口',
        order_status: '订单状态',
        reminder: '提醒',
        reminder_text_1: '交易成功后，平台将把货款结算至你的店铺账户余额，您可以申请提现',
        reminder_text_2: '请及时关注你发出的包裹状态，确保能配送至买家手中',
        reminder_text_3: '如果买家表示未收到货或者货物有问题，请及时联系买家积极处理，友好协商',
        note: '备注',
        offline_payment: '线下支付',
        pickup: '提货',
        settled: '已结算',
        pending_settlement: '待结算',
        paper: '纸质',
        electronic: '电子',
        special: '专票',
        general: '普票',
        personal: '个人',
        company: '企业'
      },

      virtual: {
        order_info: '订单信息',
        order_number: '订单编号',
        copy: '复制',
        order_type: '订单类型',
        order_source: '订单来源',
        payment_method: '付款方式',
        buyer: '买家',
        mobile: '手机号',
        delivery_method: '配送方式',
        buyer_message: '买家留言',
        create_time: '创建时间',
        close_time: '关闭时间',
        payment_time: '支付时间',
        seller_note: '卖家备注',
        invoice_info: '发票信息',
        invoice_type: '发票类型',
        invoice_title: '发票抬头',
        title_type: '抬头类型',
        taxpayer_number: '纳税人识别号',
        invoice_content: '发票内容',
        mailing_address: '邮寄地址',
        receiving_email: '接收邮件',
        invoice_cost: '发票费用',
        invoice_tax_rate: '发票税率',
        mailing_cost: '邮寄费用',
        settlement_info: '结算信息',
        shop_settlement: '店铺结算金额',
        platform_settlement: '平台结算金额',
        settlement_status: '结算状态',
        shop_refund: '店铺退款金额',
        platform_refund: '平台退款金额',
        platform_coupon_amount: '平台优惠券平台承担金额',
        platform_coupon_refund: '平台优惠券平台承担金额（退款部分）',
        total_commission: '总支出佣金',
        goods_amount: '商品金额',
        shop_coupon: '店铺优惠券',
        shop_discount: '店铺优惠',
        order_adjustment: '订单调价',
        shipping_fee: '运费',
        platform_coupon: '平台优惠券',
        balance_payment: '使用余额',
        total_items: '共',
        items: '件商品',
        total: '总计',
        order_log: '订单日志',
        operation: '操作',
        operator: '操作人',
        operation_port: '操作端口',
        order_status: '订单状态',
        reminder: '提醒',
        reminder_text_1: '交易成功后，平台将把货款结算至你的店铺账户余额，您可以申请提现',
        reminder_text_2: '请及时关注你发出的包裹状态，确保能配送至买家手中',
        reminder_text_3: '如果买家表示未收到货或者货物有问题，请及时联系买家积极处理，友好协商',
        note: '备注',
        offline_payment: '线下支付',
        paper: '纸质',
        electronic: '电子',
        special: '专票',
        general: '普票',
        personal: '个人',
        company: '企业',
        settled: '已结算',
        pending_settlement: '待结算',
        gift: '赠品'
      }
    },

    refund: {
      agree: {
        refund_type: '退款方式',
        refund_only: '仅退款',
        refund_with_goods: '退货退款',
        refund_amount: '退款金额',
        including_shipping: '(含运费{money})',
        online_payment_notice: '注意: 该笔订单通过在线付款，商家同意后，退款将自动原路退回买家付款账户。',
        confirm_refund: '确认退款'
      },

      detail: {
        order_info: '订单信息',
        order_type: '订单类型',
        order_no: '订单编号',
        refund_no: '退款编号',
        buyer: '买家',
        copy: '复制',
        refund_info: '售后信息',
        applicant: '申请人',
        reminder: '提醒',
        reminder_text1: '如果未发货，请点击同意退款给买家',
        reminder_text2: '如果实际已发货，请主动与买家联系',
        reminder_text3: '如果订单整体退款后，优惠券和余额会退还给买家'
      },

      list: {
        order_list: '订单列表',
        refund_rights: '退款维权',
        enter_goods_name: '请输入商品名称',
        filter: '筛选',
        goods_name: '商品名称',
        order_number: '订单编号',
        refund_number: '退款编号',
        enter_order_number: '请输入订单编号',
        enter_refund_number: '请输入退款编号',
        reset: '重置',
        confirm: '确定',
        filter_text: '筛选',
        apply_time: '申请时间',
        last_7_days: '近7天',
        last_30_days: '近30天',
        start_time: '开始时间',
        end_time: '结束时间',
        refund_status: '退款状态',
        all: '全部',
        refund_type: '退款方式',
        refund_only: '仅退款',
        refund_and_return: '退款退货',
        refund_no_prefix: '退款编号：',
        order_no_prefix: '订单编号：',
        apply_time_prefix: '申请时间：',
        order_amount: '订单金额：',
        refund_amount: '退款金额：',
        no_data: '暂无订单数据',

        start_time_error: '开始时间不能大于结束时间',
        end_time_error: '结束时间不能小于开始时间',
        all: '全部',
        settled: '已结算',
        unsettled: '未结算',

        start_time_error: '开始时间不能大于结束时间',
        end_time_error: '结束时间不能小于开始时间'
      },

      refuse: {
        refund_type: '退款方式',
        refund_only: '仅退款',
        refund_and_return: '退货退款',
        refund_amount: '退款金额',
        include_shipping: '(含运费{money})',
        refuse_reason: '拒绝理由',
        reason_placeholder: '请输入您的拒绝理由',
        tips: '注意: 建议你与买家协商后，再确定是否拒绝退款。如你拒绝退款后，买家可修改退款申请协议重新发起退款。',
        cancel: '取消',
        confirm: '确认拒绝',
        reason_required: '请输入拒绝理由'
      },

      take: {
        refund_type: '退款方式',
        refund_only: '仅退款',
        refund_and_return: '退货退款',
        refund_amount: '退款金额',
        include_shipping: '(含运费{money})',
        return_address: '退货地址',
        is_stock: '是否入库',
        yes: '是',
        no: '否',
        tips: '注意: 需你同意退款申请，买家才能退货给你；买家退货后你需再次确认收货后，退款将自动原路退回至买家付款账户。',
        cancel: '取消',
        confirm: '确认收到退货'
      },

      transfer: {
        refund_method: '退款方式',
        refund_only: '仅退款',
        refund_and_return: '退货退款',
        refund_amount: '退款金额',
        including_shipping: '(含运费{money})',
        confirm_notice: '注意: 当你确认转账后，退款将自动原路退回至买家付款账户。',
        cancel: '取消',
        confirm_transfer: '确认转账'
      },

      action: {
        processing: '操作中...',
        operation_tip: '操作提示',
        extend_delivery_confirm: '确定要延长该订单的收货时间吗？\n单次延长收货可以延迟三天的自动收货时间',

        no_contact_address: '商家未设置联系地址'
      }
    },

    address: {
      receiver: '收货人',
      please_enter_receiver: '请填写收货联系人',
      mobile_number: '手机号码',
      please_enter_mobile: '请填写手机号码',
      shipping_address: '收货地址',
      please_select: '请选择',
      please_select_region: '请选择省市区县',
      detailed_address: '详细地址',
      please_enter_address: '请输入详细地址',
      confirm: '确定',
      data_error: '数据有误',
      location_auth_title: '是否授权当前位置',
      location_auth_content: '需要获取您的地理位置，请确认授权，否则地图功能将无法使用',
      auth_success: '授权成功',
      auth_failed: '授权失败',
      please_enter_name: '请输入姓名',
      please_enter_valid_mobile: '请输入正确的手机号',
      please_select_area: '请选择省市区县',
      address_required: '详细地址不能为空'
    },

    adjust: {
      adjust_price_tips: '注意：只有订单未付款时才支持改价,改价后请联系买家刷新订单核实订单金额后再支付。',
      goods_info: '商品信息',
      order_info: '订单信息',
      subtotal: '小计',
      goods_total: '商品总额',
      discount: '优惠',
      coupon: '优惠券',
      platform_coupon: '平台优惠券',
      balance: '余额',
      invoice_fee: '发票费用',
      invoice_delivery: '发票邮寄',
      total: '总计',
      adjust_price: '调整价格',
      adjust_amount: '调整金额',
      shipping_fee: '运费',
      actual_goods_amount: '实际商品金额',
      discount_amount: '优惠金额',
      coupon_amount: '优惠券金额',
      platform_coupon_amount: '平台优惠券金额',
      price_adjustment: '调价',
      invoice_rate: '发票比率',
      actual_payment: '实付金额',
      invoice_delivery_fee: '发票邮寄费用',
      please_enter_adjust_amount: '请输入调整金额',
      adjust_amount_format_error: '[调整金额]格式输入错误',
      please_enter_shipping_fee: '请输入运费',
      shipping_fee_format_error: '[运费]格式输入错误'
    },

    delivery: {
      select_delivery_goods: '选择发货商品',
      tracking_number: '物流单号',
      handle_refund: '处理维权',
      fill_logistics_info: '填写物流信息',
      shipping_address: '收货地址',
      delivery_method: '发货方式',
      logistics_delivery: '物流发货',
      no_logistics_needed: '无需物流',
      logistics_company: '物流公司',
      select_logistics_company: '请选择物流公司',
      enter_tracking_number: '请输入快递单号',
      delivery_success: '发货成功'
    },

    logistics: {
      logistics_info: '填写物流信息',
      shipping_address: '收货地址',
      delivery_method: '发货方式',
      logistics_delivery: '物流发货',
      no_logistics: '无需物流',
      logistics_company: '物流公司',
      select_logistics_company: '请选择物流公司',
      tracking_number: '快递单号',
      enter_tracking_number: '请输入快递单号',
      please_select_logistics_company: '请选择物流公司',
      please_enter_tracking_number: '请输入快递单号',
      order_not_exist: '订单信息不存在'
    },

    list: {
      orderList: '订单列表',
      refundAndRights: '退款维权',
      pleaseEnter: '请输入',
      all: '全部',
      filter: '筛选',
      searchMethod: '搜索方式',
      orderTime: '下单时间',
      last7Days: '近7天',
      last30Days: '近30天',
      startTime: '开始时间',
      endTime: '结束时间',
      orderType: '订单类型',
      orderStatus: '订单状态',
      marketingType: '营销类型',
      paymentMethod: '付款方式',
      orderSource: '订单来源',
      settlementStatus: '结算状态',
      reset: '重置',
      confirm: '确定',
      orderTime: '下单时间',
      total: '合计',
      sellerNote: '卖家备注',
      remark: '备注',
      offlinePayment: '线下支付',
      pickup: '提货',
      gift: '赠品',
      noOrderData: '暂无订单数据'
    },

    local: {
      delivery_address: '收货地址',
      delivery_method: '发货方式',
      merchant_self_delivery: '商家自配送',
      deliverer: '配送员',
      please_enter_deliverer: '请输入配送员',
      phone_number: '手机号',
      please_enter_phone: '请输入手机号'
    },

    logistics: {
      delivery_time: '发货时间',
      carrier_company: '承运公司',
      tracking_number: '运单号',
      edit_logistics: '修改物流',
      no_order_info: '未获取到订单信息！'
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
      start_time_error: '开始时间不能大于结束时间',

      orderlist: {
        transaction_amount: '交易金额',
        pending_settlement: '待结算(元)',
        in_progress: '进行中(元)',
        settled: '已结算(元)',
        start_time: '开始时间',
        end_time: '结束时间',
        order_status: '订单状态：',
        order_amount: '订单金额（元）',
        shop_refund_amount: '店铺退款金额（元）',
        platform_commission: '平台抽成（元）',
        shop_amount: '店铺金额（元）',
        completion_time: '完成时间',
        no_order_data: '暂无订单数据',
        pending_settlement_orders: '待结算订单',
        in_progress_orders: '进行中订单',
        settled_orders: '已结算订单',
        start_time_greater: '开始时间不能大于结束时间'
      }
    },

    reopen: {
      detail: {
        shop_name: '店铺名称',
        shop_package: '开店套餐',
        renewal_duration: '续签时长',
        year: '年',
        payment_proof: '支付凭证',
        payment_proof_desc: '付款凭证说明'
      },

      list: {
        operation_tips: '操作提示',
        expire_notice: '店铺到期30日内可以申请续签',
        payment_notice: '请认准官方收款账户，支付凭据上传之后请联系官方客服人员',
        main_business: '主营行业',
        expire_time: '到期时间',
        permanent: '永久有效',
        view: '查看',
        renew_duration: '续签时长（年）',
        payment_amount: '缴费金额（元）',
        payment_proof: '付款凭证',
        status: '状态',
        pending_review: '待审核',
        review_failed: '审核失败',
        review_success: '审核成功',
        time: '时间',
        delete: '删除',
        edit: '编辑',
        no_data: '暂无续签数据',
        confirm_delete: '确定要删除续签申请记录吗？'
      }
    },

    settlement: {
      detail_store: {
        operation_tips: '操作提示',
        account_period: '账期时间',
        to: '至',
        online_settlement: '线上结算金额',
        shop_total: '店铺总金额',
        refund_amount: '退款金额',
        commission_amount: '佣金金额',
        platform_coupon: '平台优惠券',
        platform_coupon_refund: '平台优惠券(退款部分)',
        offline_settlement: '线下结算金额',
        offline_order: '线下支付的订单金额',
        platform_deduction: '平台抽成金额',
        platform_total_deduction: '平台结算总抽成',
        platform_refund_deduction: '平台退款抽成',
        offline_payment: '线下付款金额',
        offline_refund: '线下退款金额',

        // 列表项
        payment_method: '支付方式',
        order_sales: '订单销售额（元）',
        order_refund: '订单退款（元）',
        commission: '佣金（元）',
        platform_coupon_amount: '平台优惠券（元）',
        platform_coupon_refund_amount: '平台优惠券(退款部分)（元）',
        store_income: '门店收入（元）',
        platform_commission: '平台抽成（元）',
        order_complete_time: '订单完成时间',
        no_order_data: '暂无订单数据'
      },

      detail: {
        operation_tips: '操作提示',
        shop_income_formula: '店铺收入金额 = 店铺结算总金额 - 店铺退款金额 - 佣金金额 + 平台优惠券平台承担金额 - 平台优惠券平台承担金额（退款部分）',
        platform_commission_formula: '平台抽成金额 = 平台结算总抽成 - 平台退款抽成',
        shop_settlement: '店铺结算',
        shop_income_amount: '店铺收入金额',
        shop_total_settlement: '店铺结算总金额',
        shop_refund_amount: '店铺退款金额',
        commission_amount: '佣金金额',
        platform_commission_amount: '平台抽成金额',
        platform_total_commission: '平台结算总抽成',
        platform_refund_commission: '平台退款抽成',
        platform_coupon_amount: '平台优惠券平台承担金额',
        platform_refund_coupon_amount: '平台优惠券平台承担金额（退款部分）',
        order_sales: '订单销售额（元）',
        order_refund: '订单退款（元）',
        commission: '佣金（元）',
        platform_coupon: '平台优惠券（元）',
        platform_refund_coupon: '平台优惠券(退款部分)（元）',
        shop_income: '店铺收入（元）',
        platform_commission: '平台抽成（元）',
        order_complete_time: '订单完成时间',
        no_settlement_data: '暂无店铺结算数据'
      },

      operationTip: '操作提示',
      pageDescription: '页面展示商家所有的门店进行的结算操作',
      detailsDescription: '商家可在此查看结算详情以及结算操作',
      startTime: '开始时间',
      endTime: '结束时间',
      view: '查看',
      storeSettlement: '门店结算',
      totalOrderAmount: '订单总额',
      onlineSettlementAmount: '线上结算金额',
      offlineSettlementAmount: '线下结算金额',
      settlementStartTime: '结算开始时间',
      settlementEndTime: '结算结束时间',
      isSettled: '是否结算',
      settled: '已结算',
      unsettled: '未结算',
      settle: '结算',
      noSettlementData: '暂无门店结算数据',
      settlementRemarks: '结算备注',
      remarksPlaceholder: '请输入结算备注',
      cancel: '取消',
      confirm: '确定',
      timeValidation: '开始时间不能大于结束时间',

      operationTip: '平台设置店铺结算周期后，系统会按照设置定期进行结算',
      cycleDescription: '结算周期分为按天、按周、按月。按天是指每天0点开始，按周是指每周一0点开始，按月是指每月一号0点开始',
      storeAmount: '店铺金额',
      platformCommission: '平台抽成',
      commissionAmount: '佣金金额',
      billingStartTime: '账期开始时间',
      billingEndTime: '账期结束时间',
      noData: '暂无店铺结算数据'
    },

    withdraw: {
      detail: {
        store_name: '店铺名称',
        contact_person: '联系人',
        contact_phone: '联系电话',
        account_type: '账户类型',
        bank: '银行',
        wechat: '微信',
        alipay: '支付宝',
        account_name: '账户名称',
        withdraw_account: '提现账号',
        account_holder: '开户名',
        wechat_nickname: '微信昵称',
        wechat_id: '微信号',
        alipay_username: '支付宝用户名',
        alipay_account: '支付宝账号',
        withdraw_amount: '提现金额',
        yuan: '元',
        status: '状态',
        pending_review: '待审核',
        pending_transfer: '待转账',
        transferred: '已转账',
        rejected: '已拒绝',
        apply_time: '申请时间',
        transfer_time: '转账时间',
        transfer_voucher: '转账凭证',
        voucher_description: '转账凭证说明',
        none: '暂无',
        is_settlement_period: '是否结算周期',
        yes: '是',
        no: '否',
        period_name: '结算周期名称',
        remark: '备注'
      },

      index: {
        account_type: '提现账户类型',
        bank_card: '银行卡',
        bank_account_name: '银行开户名',
        bank_account_number: '银行账号',
        bank_branch_name: '开户银行支行名称',
        bank_location: '开户银行所在地',
        wechat: '微信',
        wechat_account: '微信号',
        alipay: '支付宝',
        alipay_username: '支付宝用户名',
        alipay_account: '支付宝账户',
        amount: '提现金额：',
        available_balance: '可提现余额：',
        min_amount: '最低提现：',
        max_amount: '最高提现：',
        submit: '提现',
        please_enter_amount: '请输入提现金额',
        exceed_available: '提现金额超出可提现金额',
        less_than_min: '提现金额小于最低提现金额',
        exceed_max: '提现金额不能高于最高提现金额',
        apply_success: '申请成功，等待审核'
      },

      list: {
        amount: '提现金额',
        withdrawn: '已提现(元)',
        processing: '提现中(元)',
        apply: '申请提现',
        amount_yuan: '提现金额（元）',
        account_type: '账户类型',
        type_1: '银行',
        type_2: '支付宝',
        type_3: '微信',
        status_completed: '已提现',
        status_processing: '提现中',
        no_data: '暂无提现数据',
        time_error: '开始时间不能大于结束时间',
        start_time: '开始时间',
        end_time: '结束时间',
        view: '查看',
        name: '姓名',
        phone: '电话',
        status: '状态',
        time: '时间'
      }
    },

    fee: {
      operation_tips: '操作提示',
      renew_tip: '店铺到期30日内可以申请续签',
      payment_tip: '请认准官方收款账户，支付凭据上传之后请联系官方客服人员',
      entry_fee: '入驻费用',
      entry_fee_amount: '入驻费用(元)',
      deposit_amount: '保证金(元)',
      expiry_date: '到期时间',
      apply_renew: '申请续签',
      renew_record: '续签记录',
      payment_amount: '缴费金额（元）',
      fee_type: '费用类型',
      create_time: '创建时间',
      no_entry_fee_data: '暂无入驻费用数据'
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
