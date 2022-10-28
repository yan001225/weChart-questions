// app.js
App({
  onLaunch() {
    //隐藏系统tabbar
    wx.hideTabBar();
    this.getSystemInfoData();
  },
  onShow() {
    //隐藏系统tabbar
    wx.hideTabBar();
  },
  getSystemInfoData: function () {
    const systemInfo = wx.getSystemInfoSync();
    // 胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
    this.globalData.systemInfo = systemInfo;
    // 导航栏高度 = 状态栏高度 + 44
    this.globalData.navBarHeight = systemInfo.statusBarHeight + 44;
    this.globalData.menuRight = systemInfo.screenWidth - menuButtonInfo.right;
    this.globalData.menuTop = menuButtonInfo.top;
    this.globalData.menuHeight = menuButtonInfo.height;
    this.globalData.statusBarHeightData = systemInfo.statusBarHeight;
    this.globalData.menuLeft = menuButtonInfo.left;
  },
  editTabbar: function () {
    let tabbar = this.globalData.tabBar;
    let currentPages = getCurrentPages();
    let _this = currentPages[currentPages.length - 1];
    let pagePath = _this.route;
    (pagePath.indexOf('/') != 0) && (pagePath = '/' + pagePath);
    for (let i in tabbar.list) {
      tabbar.list[i].selected = false;
      (tabbar.list[i].pagePath == pagePath) && (tabbar.list[i].selected = true);
    }
    _this.setData({
      tabbar: tabbar
    });
  },
  globalData: {
    systemInfo: null, // 系统信息
    navBarHeight: 0, // 导航栏高度
    menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
    menuLeft: 0,
    menuTop: 0, // 胶囊距顶部间距
    menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
    statusBarHeightData: 0, // 状态栏高度
    tabBar: {
      "backgroundColor": "#ffffff",
      "color": "#979795",
      "selectedColor": "#1c1c1b",
      "list": [{
          "pagePath": "/pages/index/index",
          "iconPath": "icon/icon_home.png",
          "selectedIconPath": "icon/icon_home_HL.png",
          "text": "首页"
        },
        {
          "pagePath": "/pages/msg/msg",
          "iconPath": "icon/icon_msg.png",
          "selectedIconPath": "icon/icon_msg_HL.png",
          "text": "助手"
        },
        {
          "pagePath": "/pages/middle/middle",
          "iconPath": "icon/icon_release.png",
          "isSpecial": true,
          "text": "发布"
        },
        {
          "pagePath": "/pages/chart/chart",
          "iconPath": "icon/icon_chart.png",
          "selectedIconPath": "icon/icon_chart_HL.png",
          "text": "统计"
        },
        {
          "pagePath": "/pages/mine/mine",
          "iconPath": "icon/icon_mine.png",
          "selectedIconPath": "icon/icon_mine_HL.png",
          "text": "我的"
        }
      ]
    }
  }
})