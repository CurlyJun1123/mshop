export default {
  data() {
    return {
      cWidth: 0,
      cHeight: 0,
      canvas: true,
      arr: [],
      collect_shop: {
        categories: [],
        series: []
      },
      collect_goods: {
        categories: [],
        series: []
      },
      visit_count: {
        categories: [],
        series: []
      },
      refCurr: '',
      transaction_time: 7,
      picker: {
        gaikuang: [
          {
            date_type: 0,
            date_text: this.$t('statistics.today_realtime')
          },
          {
            date_type: 1,
            date_text: this.$t('statistics.last_7_days')
          },
          {
            date_type: 2,
            date_text: this.$t('statistics.last_30_days')
          }
        ],
        table: [
          {
            date_type: 1,
            date_text: this.$t('statistics.last_7_days'),
            day: 7
          },
          {
            date_type: 2,
            date_text: this.$t('statistics.last_30_days'),
            day: 30
          }
        ]
      },
      pickerCurr: {
        gaikuang: 0,
        collect_shop: 0,
        collect_goods: 0,
        visit_count: 0
      },
      total_money: {
        gaikuang: 0,
        collect_shop: 0,
        collect_goods: 0,
        visit_count: 0
      },
      order_info: {},
      shop_info: {}
    }
  },
  onShow() {
    if (!this.$util.checkToken('/pages/statistics/visit')) return
    this.getChartsInfo()
    this.getTotalData()
    this.getTotalData(1)
  },
  methods: {
    selectCharts(val) {
      this.refCurr = val
    },
    bindPickerChange(id, e) {
      this.pickerCurr[id] = e.detail.value
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
    //获取交易概况时实信息
    getTotalData(val) {
      var data_type = val ? val : this.picker.gaikuang[this.pickerCurr.gaikuang].date_type
      this.$api.sendRequest({
        url: '/shopapi/statistics/visit',
        data: {
          date_type: data_type
        },
        success: (res) => {
          if (res.code >= 0) {
            if (val) {
              if (this.refCurr) this.total_money[this.refCurr] = res.data[this.refCurr]
              else {
                this.total_money.collect_shop = res.data.collect_shop
                this.total_money.collect_goods = res.data.collect_goods
                this.total_money.visit_count = res.data.visit_count
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
    //获取统计的图表信息
    getChartsInfo() {
      var date_type = this.refCurr ? this.picker.table[this.pickerCurr[this.refCurr]].date_type : this.picker.table[this.pickerCurr['visit_count']].date_type
      this.$api.sendRequest({
        url: '/shopapi/statistics/getVisitStatList',
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
            this.collect_shop.categories = this.collect_goods.categories = this.visit_count.categories = timeTemp
            this.collect_shop.series = [
              {
                name: '店铺收藏数',
                data: res.data.collect_shop,
                color: '#FF6A00',
                time: res.data.time
              }
            ]
            this.collect_goods.series = [
              {
                name: '商品收藏数',
                data: res.data.collect_goods,
                color: '#FF6A00',
                time: res.data.time
              }
            ]
            this.visit_count.series = [
              {
                name: '商品浏览数',
                data: res.data.visit_count,
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
        yAxisdisabled: true,
        xAxisgridColor: 'transparent',
        yAxisgridType: 'dash',
        yAxisgridColor: '#eeeeee',
        animation: true,
        enableScroll: true,
        scrollColor: 'transparent',
        scrollBackgroundColor: 'transparent',
        scrollPosition: 'right',
        boundaryGap: 'justify',
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
      this.collect_shop = Object.assign(this.collect_shop, Data, {
        unit: '个'
      })
      this.collect_goods = Object.assign(this.collect_goods, Data, {
        unit: '件'
      })
      this.visit_count = Object.assign(this.visit_count, Data, {
        unit: '条'
      })
      var serverData = [
        {
          title: this.$t('statistics.shop_collect_count'),
          opts: this.collect_shop,
          chartType: 'area',
          extraType: 'curve',
          id: 'collect_shop'
        },
        {
          title: this.$t('statistics.goods_collect_count'),
          opts: this.collect_goods,
          chartType: 'area',
          extraType: 'curve',
          id: 'collect_goods'
        },
        {
          title: this.$t('statistics.goods_browse_count'),
          opts: this.visit_count,
          chartType: 'area',
          extraType: 'curve',
          id: 'visit_count'
        }
      ]
      this.arr = serverData
    }
  }
}
