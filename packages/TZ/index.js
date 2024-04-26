let url = 'http://kayousaishi.oss-cn-hangzhou.aliyuncs.com/K9/activity/YTXWZ'
let ctx
Page({
  data: {
    tabList: [{
      title: '背景'
    }, {
      title: '边框'
    }, {
      title: '贴纸'
    }, {
      title: '文字'
    }],
    tabIndex: 0,
    bgList: ['#f89aa3', '#f7a5c0', '#f8b187', '#b8c1dd', '#f8e8ab', '#a5bbf0'], // 背景列表
    borderList: ['solid', 'dashed', 'dotted'], // 边框列表
    stickerList: [`${url}/flower-1.png`, `${url}/flower-2.png`, `${url}/flower-3.png`, `${url}/flower-4.png`, `${url}/flower-5.png`, `${url}/flower-6.png`, `${url}/flower-7.png`, `${url}/flower-8.png`], // 贴纸列表
    bgIndex: 0,
    borderIndex: 0,
    stickerIndex: '',
    bgChecked: '', // 选中的背景
    borderChecked: '',
    stickerChecked: '',
  },
  onLoad(options) {
    this.initMaterial()
    this.initCanvas()
  },
  initMaterial() {
    this.setData({
      bgChecked: this.data.bgList[this.data.bgIndex]
    })
  },
  initCanvas() {
    const that = this
    const query = wx.createSelectorQuery()
    query.select('#myCanvas')
      .fields({
        node: true,
        size: true
      })
      .exec((res) => {
        const canvas = res[0].node
        ctx = canvas.getContext('2d')
        ctx.fillStyle = this.data.bgChecked // 绘制背景色
        ctx.fillRect(5, 0, 290, 400);  // 矩形框
        const image = canvas.createImage()  // 绘制贴纸图片
        image.onload = (res) => {
          console.log( image.width, image.height);
          ctx.drawImage(
            image,
            10,
            10,
            image.width,
            image.height,
          )
        }
        image.src = this.data.stickerChecked
      })
  },
  changeTab(e) {
    const {
      item,
      index
    } = e.currentTarget.dataset
    this.setData({
      tabIndex: index
    })
  },
  changeMaterial(e) {
    const {
      item,
      type,
      index
    } = e.currentTarget.dataset
    switch (type) {
      case 'bg': // 背景
        this.setData({
          bgChecked: item,
          bgIndex: index
        })
        break;
      case 'border': // 边框
        this.setData({
          borderChecked: item
        })
        break;
      case 'sticker': // 贴纸
        this.setData({
          stickerChecked: item,
          stickerIndex: index
        })
        break;
    }
    this.initCanvas()
  },
  onShow() {},
  onShareAppMessage() {}
})