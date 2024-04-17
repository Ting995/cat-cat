let url = 'http://kayousaishi.oss-cn-hangzhou.aliyuncs.com/K9/activity/YTXWZ'
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
    stickerIndex: 0,
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
    const canvasContext = wx.createCanvasContext('myCanvas');
    canvasContext.setFillStyle(this.data.bgChecked) // 绘制背景色
    canvasContext.fillRect(10, 0, 350, 450);
    let stickerImage = wx.createImage();
    stickerImage.src = this.data.stickerChecked // 这里替换为实际的网络或本地资源路径
    stickerImage.onload = function () {
      // 图片加载完成后进行绘制和旋转
      let stickerX = 10
      let stickerY = 10
      let width = 84;
      let height = 84;
      canvasContext.drawImage(stickerImage,stickerX, stickerY, width, height);
    };
    canvasContext.draw();
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
          stickerChecked: item
        })
        break;
    }
    this.initCanvas()
  },
  onShow() {},
  onShareAppMessage() {}
})