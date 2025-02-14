export default {
  data() {
    return {
      statusList: [
        { id: 0, name: this.$t('goods.list.on_sale'), goods_state: 1, verify_state: 1 },
        { id: 1, name: this.$t('goods.list.in_warehouse'), goods_state: 0, verify_state: 1 },
        { id: 2, name: this.$t('goods.list.pending_review'), goods_state: '', verify_state: 0 },
        { id: 3, name: this.$t('goods.list.review_failed'), goods_state: '', verify_state: -2 },
        { id: 4, name: this.$t('goods.list.illegal_off_shelf'), goods_state: '', verify_state: 10 }
      ],
      status: -1,
      dataList: [],
      searchGoodsName: '',
      showScreen: false,
      goodsCondition: [],
      goodsConditionCurr: {
        goods_promotion_type: 0,
        goods_class: 0
      },
      goodsClass: [
        { name: this.$t('goods.list.all'), type: '' },
        { name: this.$t('goods.list.physical_goods'), type: 1 },
        { name: this.$t('goods.list.virtual_goods'), type: 2 }
      ],
      formData: {
        search_text: '',
        promotion_type: '',
        start_sale: '',
        end_sale: '',
        goods_class: ''
      }
    }
  },
  onShow() {
    let status = uni.getStorageSync('status')
    if (status) {
      this.status = status
      uni.removeStorageSync('status')
    }
    if (!this.$util.checkToken('/pages/goods/list')) return
    this.$store.dispatch('getShopInfo')
    if (this.mescroll) this.mescroll.resetUpScroll()
    this.getCondition()
  },
  methods: {
    showHide(val) {
      val.is_off = !val.is_off
    },
    shwoOperation(item = '') {
      let stop = false
      this.dataList.forEach((v) => {
        if (v.is_off == 1) {
          stop = true
        }
        v.is_off = 0
      })
      if (!stop && item != '') item.is_off = 1
    },
    tabChange(status = -1) {
      this.status = status
      this.mescroll.resetUpScroll()
    },
    getCondition() {
      this.$api.sendRequest({
        url: '/shopapi/goods/condition',
        success: (res) => {
          let data = res.data
          if (res.code == 0 && data) {
            for (let index in data) {
              let arr = [
                {
                  name: this.$t('goods.list.all'),
                  type: ''
                }
              ]
              for (let index_c in data[index]) {
                arr.push(data[index][index_c])
              }
              data[index] = arr
            }
            this.goodsCondition = data
          }
        }
      })
    },
    getListData(mescroll) {
      let data = {
        page_size: mescroll.size,
        page: mescroll.num,
        search_text: this.searchGoodsName
      }

      if (this.status != -1 && this.statusList[this.status].verify_state !== '') data.verify_state = this.statusList[this.status].verify_state
      if (this.status != -1 && this.statusList[this.status].goods_state !== '') data.goods_state = this.statusList[this.status].goods_state
      data = Object.assign(data, this.formData)
      this.mescroll = mescroll
      this.$api.sendRequest({
        url: '/shopapi/goods/lists',
        data: data,
        success: (res) => {
          let newArr = []
          let msg = res.message
          if (res.code == 0 && res.data) {
            newArr = res.data.list
          } else {
            this.$util.showToast({
              title: msg
            })
          }
          mescroll.endSuccess(newArr.length)
          //设置列表数据
          if (mescroll.num == 1) this.dataList = [] //如果是第一页需手动制空列表
          newArr.forEach((v) => {
            v.is_off = 0
          })
          this.dataList = this.dataList.concat(newArr) //追加新数据
          if (this.$refs.loadingCover) this.$refs.loadingCover.hide()
        }
      })
    },
    deleteGoods(item) {
      uni.showModal({
        title: this.$t('goods.list.delete'),
        content: this.$t('goods.list.confirm_delete'),
        success: (res) => {
          item.is_off = 0
          if (res.confirm) {
            this.$api.sendRequest({
              url: '/shopapi/goods/deleteGoods',
              data: {
                goods_ids: item.goods_id
              },
              success: (res) => {
                this.$util.showToast({
                  title: res.message
                })
                if (res.code == 0) {
                  this.mescroll.resetUpScroll()
                }
              }
            })
          }
        }
      })
    },
    offGoods(item) {
      item.is_off = 0
      this.$api.sendRequest({
        url: '/shopapi/goods/offGoods',
        data: {
          goods_state: 0,
          goods_ids: item.goods_id
        },
        success: (res) => {
          this.$util.showToast({
            title: res.message
          })
          if (res.code == 0) {
            this.mescroll.resetUpScroll()
          }
        }
      })
    },
    onGoods(item) {
      item.is_off = 0
      this.$api.sendRequest({
        url: '/shopapi/goods/onGoods',
        data: {
          goods_state: 1,
          goods_ids: item.goods_id
        },
        success: (res) => {
          this.$util.showToast({
            title: res.message
          })
          if (res.code == 0) {
            this.mescroll.resetUpScroll()
          }
        }
      })
    },
    copyGoods(item) {
      uni.showModal({
        title: this.$t('goods.list.copy'),
        content: this.$t('goods.list.confirm_copy'),
        success: (res) => {
          if (res.confirm) {
            this.$api.sendRequest({
              url: '/shopapi/goods/copyGoods',
              data: {
                goods_id: item.goods_id
              },
              success: (res) => {
                if (res.code == 0) {
                  this.mescroll.resetUpScroll()
                  this.$util.showToast({
                    title: this.$t('goods.list.copied_to_warehouse')
                  })
                } else {
                  this.$util.showToast({
                    title: res.message
                  })
                }
              }
            })
          }
          item.is_off = 0
        }
      })
    },
    getVerifyStateRemark(item) {
      this.$api.sendRequest({
        url: '/shopapi/goods/getVerifyStateRemark',
        data: {
          goods_id: item.goods_id
        },
        success: (res) => {
          if (res.code != 0 && !res.data) return false
          let data = res.data.verify_state_remark ? res.data.verify_state_remark : this.$t('goods.list.no_violation_info')
          uni.showModal({
            title: this.$t('goods.list.violation_reason'),
            content: data,
            showCancel: false,
            success: (res) => {
              item.is_off = 0
            }
          })
          return false
        }
      })
    },
    searchGoods() {
      this.mescroll.resetUpScroll()
    },
    linkSkip(item) {
      let data = {}
      if (item) {
        data.goods_id = item.goods_id
        item.is_off = 0
      }
      this.$util.redirectTo('/pages/goods/edit/index', data)
    },
    goOutput(item) {
      let data = {}
      if (item) {
        data.goods_id = item.goods_id
        item.is_off = 0
      }
      this.$util.redirectTo('/pages/goods/output', data)
    },
    uTag(val, currType, formitem) {
      if (currType == 'goods_class') {
        this.formData[formitem] = this.goodsClass[val].type
      } else {
        this.formData[formitem] = this.goodsCondition[currType][val].type
      }
      this.goodsConditionCurr[currType] = val
    },
    //重置
    resetData() {
      this.formData.search_text = ''
      this.formData.promotion_type = ''
      this.formData.start_sale = ''
      this.formData.end_sale = ''
      this.formData.goods_class = ''
      this.goodsConditionCurr.goods_promotion_type = 0
      this.goodsConditionCurr.goods_class = 0
      this.$forceUpdate()
    },
    //数据提交
    screenData() {
      if (this.formData.start_sale && this.formData.end_sale && this.formData.start_sale > this.formData.end_sale) {
        this.$util.showToast({
          title: this.$t('goods.list.min_sales_cannot_exceed_max_sales')
        })
        return
      }
      let data = this.formData
      this.showScreen = false
      this.$refs.mescroll.refresh()
    },
    imgError(index) {
      this.dataList[index].goods_image = this.$util.getDefaultImage().default_goods_img
      this.$forceUpdate()
    }
  }
}
