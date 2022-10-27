// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    statusBarBackground: '#1A1A1A',
    navBarHeight: app.globalData.navBarHeight,
    cardsList:[
      {id: 1, title: '功能1', img:'/assets/images/icon/icon1.png'},
      {id: 2, title: '功能2', img:'/assets/images/icon/icon2.png'},
      {id: 3, title: '功能3', img:'/assets/images/icon/icon3.png'},
      {id: 4, title: '功能4', img:'/assets/images/icon/icon4.png'},
      {id: 5, title: '功能4', img:'/assets/images/icon/icon5.png'},
    ]
  },
})
