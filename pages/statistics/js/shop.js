export default {
  data() {
    return {
      cWidth: 0,
      cHeight: 0,
      canvas: true,
      arr: [],
      add_goods_count: {
        categories: [],
        series: []
      },
      visit_count: {
        categories: [],
        series: []
      },
      collect_goods: {
        categories: [],
        series: []
      },
      goods_pay_count: {
        categories: [],
        series: []
      },
      collect_shop: {
        categories: [],
        series: []
      },
      order_total: {
        categories: [],
        series: []
      },
      order_pay_count: {
        categories: [],
        series: []
      },
      refCurr: '',
      transaction_time: 7,
      picker: {
        gaikuang: [],
        table: []
      },
      pickerCurr: {
        gaikuang: 0,
        add_goods_count: 0,
        visit_count: 0,
        collect_goods: 0,
        goods_pay_count: 0,
        collect_shop: 0,
        order_total: 0,
        order_pay_count: 0
      },
      total_money: {
        gaikuang: 0,
        add_goods_count: 0,
        visit_count: 0,
        collect_goods: 0,
        goods_pay_count: 0,
        collect_shop: 0,
        order_total: 0,
        order_pay_count: 0
      },
      order_info: {},
      shop_info: {}
    }
  },
  onShow() {
    if (!this.$util.checkToken('/pages/statistics/shop')) return

    this.picker = {
      gaikuang: [
        { date_type: 0, date_text: this.$t('statistics.shop.today_realtime') },
        { date_type: 1, date_text: this.$t('statistics.shop.last_7_days') },
        { date_type: 2, date_text: this.$t('statistics.shop.last_30_days') }
      ],
      table: [
        { date_type: 1, date_text: this.$t('statistics.shop.last_7_days'), day: 7 },
        { date_type: 2, date_text: this.$t('statistics.shop.last_30_days'), day: 30 }
      ]
    }
    this.getChartsInfo()
    this.getTotalData()
    this.getTotalData(1)
  },
  methods: {
    selectCharts(val) {
      this.refCurr = val
    },
    bindPickerChange(id, e) {
      this.pickerCurr[id] = e.target.value
      this.transaction_time = this.picker.table[e.target.value].day
      this.getChartsInfo()
      this.getTotalData(this.picker.table[e.target.value].date_type)
    },
    pickerChangeShop(e) {
      this.pickerCurr.gaikuang = e.target.value
      this.getTotalData()
    },
    //图表
    init() {
      this.cWidth = uni.upx2px(630)
      this.cHeight = uni.upx2px(500)
      this.getServerData()
    },
    //获取订单概况数据信息
    getTotalData(val) {
      var data_type = val ? val : this.picker.gaikuang[this.pickerCurr.gaikuang].date_type
      this.$api.sendRequest({
        url: '/shopapi/statistics/shop',
        data: {
          date_type: data_type
        },
        success: (res) => {
          if (res.code >= 0) {
            if (val) {
              if (this.refCurr) {
                this.total_money[this.refCurr] = res.data[this.refCurr]
              } else {
                this.total_money.add_goods_count = res.data.add_goods_count
                this.total_money.visit_count = res.data.visit_count
                this.total_money.collect_goods = res.data.collect_goods
                this.total_money.goods_pay_count = res.data.goods_pay_count
                this.total_money.collect_shop = res.data.collect_shop
                this.total_money.order_total = res.data.order_total
                this.total_money.order_pay_count = res.data.order_pay_count
              }
            } else {
              this.shop_info = res.data
            }
          } else {
            this.$util.showToast({
              title: res.message
            })
          }
          if (this.$refs.loadingCover) this.$refs.loadingCover.hide()
        }
      })
    },
    //获取订单信息
    getChartsInfo() {
      // add_goods_count
      var date_type = this.refCurr ? this.picker.table[this.pickerCurr[this.refCurr]].date_type : this.picker.table[this.pickerCurr['add_goods_count']].date_type
      this.$api.sendRequest({
        url: '/shopapi/statistics/getShopStatList',
        data: {
          date_type: date_type
        },
        success: (res) => {
          if (res.code >= 0) {
            this.order_info = res.data
            var timeTemp = []
            for (var index = this.transaction_time - 1; index >= 0; index--) {
              timeTemp.push(this.getDay(-index))
            }
            this.add_goods_count.categories =
              this.visit_count.categories =
              this.collect_goods.categories =
              this.goods_pay_count.categories =
              this.collect_shop.categories =
              this.order_pay_count.categories =
              this.order_total.categories =
                timeTemp
            this.add_goods_count.series = [
              {
                name: this.$t('statistics.shop.new_goods_count'),
                data: res.data.add_goods_count,
                color: '#FF6A00',
                time: res.data.time
              }
            ]
            this.visit_count.series = [
              {
                name: this.$t('statistics.shop.new_goods_count'),
                data: res.data.visit_count,
                color: '#FF6A00',
                time: res.data.time
              }
            ]
            this.collect_goods.series = [
              {
                name: this.$t('statistics.shop.goods_collect_count'),
                data: res.data.collect_goods,
                color: '#FF6A00',
                time: res.data.time
              }
            ]
            this.goods_pay_count.series = [
              {
                name: this.$t('statistics.shop.order_goods_count'),
                data: res.data.goods_pay_count,
                color: '#FF6A00',
                time: res.data.time
              }
            ]
            this.collect_shop.series = [
              {
                name: this.$t('statistics.shop.shop_collect_count'),
                data: res.data.collect_shop,
                color: '#FF6A00',
                time: res.data.time
              }
            ]
            this.order_total.series = [
              {
                name: this.$t('statistics.shop.order_amount'),
                data: res.data.order_total,
                color: '#FF6A00',
                time: res.data.time
              }
            ]
            this.order_pay_count.series = [
              {
                name: this.$t('statistics.shop.order_count'),
                data: res.data.order_pay_count,
                color: '#FF6A00',
                time: res.data.time
              }
            ]
            // this.tableArea.time = res.data.time
            if (this.$refs[this.refCurr]) {
              this.$refs[this.refCurr][0].changeData(this.refCurr, this[this.refCurr])
            } else {
              this.init()
            }
          } else {
            this.$util.showToast({
              title: res.message
            })
          }
        }
      })
    },
    getDay(p_count) {
      var dd = new Date()
      dd.setDate(dd.getDate() + p_count) //获取p_count天后的日期
      var y = dd.getFullYear()
      var m = dd.getMonth() + 1 //获取当前月份的日期
      if (m < 10) {
        m = '0' + m
      }
      var d = dd.getDate()
      if (d < 10) {
        d = '0' + d
      }
      return m + '-' + d
    },
    getServerData() {
      var Data = {
        enableScroll: false,
        yAxisdisabled: true,
        xAxisgridColor: 'transparent',
        yAxisgridType: 'dash',
        yAxisgridColor: '#eeeeee',
        animation: true,
        enableScroll: true,
        scrollColor: 'transparent',
        scrollBackgroundColor: 'transparent',
        scrollPosition: 'right',
        extra: {
          area: {
            addLine: true,
            opacity: 0.5,
            width: 2,
            color: '#FF6A00',
            type: 'curve'
          }
        },
        legend: false
      }
      this.add_goods_count = Object.assign(this.add_goods_count, Data, {
        unit: this.$t('statistics.shop.unit_piece')
      })
      this.collect_goods = Object.assign(this.collect_goods, Data, {
        unit: this.$t('statistics.shop.unit_piece')
      })
      this.visit_count = Object.assign(this.visit_count, Data, {
        unit: this.$t('statistics.shop.unit_item')
      })
      this.goods_pay_count = Object.assign(this.goods_pay_count, Data, {
        unit: this.$t('statistics.shop.unit_piece')
      })
      this.collect_shop = Object.assign(this.collect_shop, Data, {
        unit: this.$t('statistics.shop.unit_shop')
      })
      this.order_total = Object.assign(this.order_total, Data, {
        unit: this.$t('statistics.shop.unit_currency')
      })
      this.order_pay_count = Object.assign(this.order_pay_count, Data, {
        unit: this.$t('statistics.shop.unit_order')
      })
      var serverData = [
        {
          title: this.$t('statistics.shop.new_goods_count'),
          opts: this.add_goods_count,
          chartType: 'area',
          extraType: 'curve',
          id: 'add_goods_count'
        },
        {
          title: this.$t('statistics.shop.goods_view_count'),
          opts: this.visit_count,
          chartType: 'area',
          extraType: 'curve',
          id: 'visit_count'
        },
        {
          title: this.$t('statistics.shop.goods_collect_count'),
          opts: this.collect_goods,
          chartType: 'area',
          extraType: 'curve',
          id: 'collect_goods'
        },
        {
          title: this.$t('statistics.shop.order_goods_count'),
          opts: this.goods_pay_count,
          chartType: 'area',
          extraType: 'curve',
          id: 'goods_pay_count'
        },
        {
          title: this.$t('statistics.shop.shop_collect_count'),
          opts: this.collect_shop,
          chartType: 'area',
          extraType: 'curve',
          id: 'collect_shop'
        },
        {
          title: this.$t('statistics.shop.order_amount'),
          opts: this.order_total,
          chartType: 'area',
          extraType: 'curve',
          id: 'order_total'
        },
        {
          title: this.$t('statistics.shop.order_count'),
          opts: this.order_pay_count,
          chartType: 'area',
          extraType: 'curve',
          id: 'order_pay_count'
        }
      ]
      this.arr = serverData
    }
  }
}
