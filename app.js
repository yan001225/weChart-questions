// app.js
App({
  onLaunch() {
    this.getSystemInfoData();
  },
  getSystemInfoData: function() {
    const systemInfo = wx.getSystemInfoSync();
    // 胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    // 导航栏高度 = 状态栏高度 + 44
    this.globalData.navBarHeight = systemInfo.statusBarHeight + 44;
    this.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
    this.globalData.menuTop= menuButtonInfo.top;
    this.globalData.menuHeight = menuButtonInfo.height;
    this.globalData.statusBarHeightData =  systemInfo.statusBarHeight ;
    this.globalData.menuLeft =  menuButtonInfo.left ;
  },
  globalData: {
    navBarHeight: 0, // 导航栏高度
    menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
    menuLeft: 0, 
    menuTop: 0, // 胶囊距顶部间距
    menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
    statusBarHeightData: 0, // 状态栏高度
  }
})
