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
    stickerList: [`${url}/flower-1.png`, `${url}/flower-2.png`, `${url}/flower-3.png`, `${url}/flower-4.png`, `${url}/flower-5.png`, `${url}/flower-6.png`, `${url}/flower-7.png`, `${url}/flower-8.png` ] // 贴纸列表
  },
  onLoad(options) {},
  changeTab(e) {
    const {
      item,
      index
    } = e.currentTarget.dataset
    this.setData({
      tabIndex: index
    })
  },
  onShow() {},
  onShareAppMessage() {}
})