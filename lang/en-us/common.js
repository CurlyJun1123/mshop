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

  apply: {
    agreement: {
      sign_agreement: 'Sign the Entry Agreement',
      agree_terms: 'I have read and agree to the above agreement',
      next_step: 'Next step, fill in the application information',
      agree_first: 'Please agree to the agreement first'
    }
  },

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
  },

  property: {
    dashboard: {
      account_overview: 'Account Overview',
      shop_total_income: 'Shop Total Income(¥)',
      available_balance: 'Available Balance(¥)',
      withdraw: 'Withdraw',
      pending_settlement: 'Pending Settlement(¥)',
      view_details: 'View Details',
      entry_fee: 'Entry Fee(¥)',
      shop_deposit: 'Shop Deposit(¥)',
      withdrawn: 'Withdrawn(¥)',
      withdrawal_records: 'Withdrawal Records',
      withdrawing: 'Withdrawing(¥)',
      all: 'All',
      income: 'Income',
      expense: 'Expense',
      start_time: 'Start Time',
      end_time: 'End Time',
      income_source: 'Source',
      amount: 'Amount(¥)',
      transaction_type: 'Type',
      time: 'Time',
      description: 'Description',
      no_account_data: 'No Account Data',
      start_time_error: 'Start time cannot be greater than end time'
    },

    settlement: {
      operationTip: 'Operation Tip',
      pageDescription: 'This page displays the settlement operations for all stores of the merchant.',
      detailsDescription: 'Merchants can view settlement details and operations here.',
      startTime: 'Start Time',
      endTime: 'End Time',
      view: 'View',
      storeSettlement: 'Store Settlement',
      totalOrderAmount: 'Total Order Amount',
      onlineSettlementAmount: 'Online Settlement Amount',
      offlineSettlementAmount: 'Offline Settlement Amount',
      settlementStartTime: 'Settlement Start Time',
      settlementEndTime: 'Settlement End Time',
      isSettled: 'Is Settled',
      settled: 'Settled',
      unsettled: 'Unsettled',
      settle: 'Settle',
      noSettlementData: 'No settlement data available for stores.',
      settlementRemarks: 'Settlement Remarks',
      remarksPlaceholder: 'Please enter settlement remarks',
      cancel: 'Cancel',
      confirm: 'Confirm',
      timeValidation: 'Start time cannot be greater than end time',

      operationTip: 'After the platform sets the store settlement cycle, the system will settle regularly according to the settings.',
      cycleDescription:
        'Settlement cycles are divided into daily, weekly, and monthly. Daily means starting at 0:00 every day, weekly means starting at 0:00 every Monday, and monthly means starting at 0:00 on the first day of each month.',
      storeAmount: 'Store Amount',
      platformCommission: 'Platform Commission',
      commissionAmount: 'Commission Amount',
      billingStartTime: 'Billing Start Time',
      billingEndTime: 'Billing End Time',
      noData: 'No store settlement data available.'
    }
  },

  renew: {
    apply: {
      shop_name: 'Shop Name',
      shop_package: 'Shop Package',
      main_industry: 'Main Industry',
      entry_duration: 'Entry Duration',
      select_duration: 'Please Select Duration',
      service_fee: 'Service Fee',
      total: 'Total',
      payment_voucher: 'Payment Voucher',
      voucher_desc: 'Voucher Description',
      voucher_desc_placeholder: 'Please enter voucher description',
      receiving_account: 'Receiving Account Info',
      bank_account_name: 'Bank Account Name',
      bank_account: 'Bank Account',
      bank_name: 'Bank Name',
      bank_address: 'Bank Address',
      submit: 'Submit',
      upload_success: 'Upload Success',
      select_duration_tip: 'Please select entry duration',
      upload_voucher_tip: 'Please upload payment voucher',
      renew_success: 'Renewal application successful'
    }
  },

  statistics: {
    goods: {
      real_time_overview: 'Real-time Overview',
      new_goods: 'New Goods',
      goods_views: 'Goods Views',
      goods_favorites: 'Goods Favorites',
      order_goods_piece: 'Order Goods(Piece)',
      item: 'Item',
      real_time_today: 'Real-time Today',
      last_7_days: 'Last 7 Days',
      last_30_days: 'Last 30 Days',
      goods_order_count: 'Goods Order Count',
      goods_collect_count: 'Goods Collection Count',
      goods_view_count: 'Goods View Count'
    },

    shop: {
      realtime_overview: 'Real-time Overview',
      new_goods: 'New Goods (items)',
      goods_views: 'Goods Views',
      goods_favorites: 'Goods Favorites',
      order_goods: 'Order Goods',
      shop_favorites: 'Shop Favorites',
      order_amount_tip: 'Order Amount (¥)',
      order_count: 'Order Count',

      today_realtime: 'Today Real-time',
      last_7_days: 'Last 7 Days',
      last_30_days: 'Last 30 Days',
      new_goods_count: 'New Goods Count',
      goods_view_count: 'Goods View Count',
      goods_collect_count: 'Goods Collection Count',
      order_goods_count: 'Order Goods Count',
      shop_collect_count: 'Shop Collection Count',
      order_amount: 'Order Amount',
      order_count: 'Order Count',
      unit_piece: 'pcs',
      unit_item: 'items',
      unit_shop: 'shops',
      unit_currency: 'CNY',
      unit_order: 'orders'
    },

    transaction: {
      transaction_overview: 'Transaction Overview',
      order_amount: 'Order Amount(¥)',
      order_count: 'Order Count',
      goods_count: 'Goods Count',
      today_realtime: 'Today Real-time',
      last_7_days: 'Last 7 Days',
      last_30_days: 'Last 30 Days',
      order_amount_text: 'Order Amount',
      order_count_text: 'Order Count',
      goods_count_text: 'Goods Count',
      unit_yuan: '¥',
      unit_count: 'order',
      unit_piece: 'item'
    },

    visit: {
      visit_overview: 'Visit Overview',
      shop_collect: 'Shop Collection',
      goods_collect: 'Goods Collection',
      goods_browse: 'Goods Browse',
      today_realtime: 'Today Real-time',
      last_7_days: 'Last 7 Days',
      last_30_days: 'Last 30 Days',
      shop_collect_count: 'Shop Collection Count',
      goods_collect_count: 'Goods Collection Count',
      goods_browse_count: 'Goods Browse Count'
    }
  },

  verify: {
    verification_records: 'Verification Records',
    click_to_scan_verification_code: 'Click this area to scan the verification code',
    input_verification_code: 'Enter Verification Code',
    please_enter_verification_code: 'Please enter the verification code',
    submit_verification_code: 'Submit Verification Code',
    verify_usage: 'Verify Usage',
    h5_not_support_scan: 'H5 does not support scanning verification codes',
    please_scan_mini_program_qr_code: 'Please scan the mini program QR code',

    records: {
      placeholder_verifier_name: "Please enter the verifier's name",
      filter: 'Filter',
      verifier_name: 'Verifier Name',
      verification_type: 'Verification Type',
      verification_time: 'Verification Time',
      start_time: 'Start Time',
      end_time: 'End Time',
      verification_code: 'Verification Code',
      placeholder_verification_code: 'Please enter the verification code',
      reset: 'Reset',
      confirm: 'Confirm',
      copy: 'Copy',
      verified: 'Verified',
      not_verified: 'Not Verified',
      verifier: 'Verifier',
      creation_time: 'Creation Time',
      verification_time: 'Verification Time',
      no_verification_data: 'No verification data available',

      all: 'All',
      pickup: 'Order Pickup',
      virtual_goods: 'Virtual Goods',
      start_time_error: 'Start time cannot be greater than end time',
      end_time_error: 'End time cannot be less than start time'
    },

    user_edit: {
      verifier_name: 'Verifier Name',
      enter_verifier_name: 'Please enter verifier name',
      associate_member: 'Associate Member',
      enter_member_info: 'Please enter member name or mobile',
      username: 'Username',
      mobile: 'Mobile',
      associate_member_tip: 'After associating a member, you can use the verification function on mobile, otherwise verification is not available on mobile',
      save: 'Save',
      edit_verifier: 'Edit Verifier',
      add_verifier: 'Add Verifier',
      verifier_name_required: 'Verifier name cannot be empty',
      member_required: 'Associated member cannot be empty'
    },

    user: {
      enter_verifier_name: 'Enter verifier name',
      verifier: 'Verifier',
      verifier_label: 'Verifier: ',
      edit: 'Edit',
      delete: 'Delete',
      member_account: 'Member Account: ',
      create_time: 'Create Time: ',
      no_verify_data: 'No verification data',
      operation_tips: 'Operation Tips',
      confirm_delete_verifier: 'Are you sure to delete this verifier?'
    }
  }
}
