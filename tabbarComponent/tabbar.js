// tabBarComponent/tabBar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabbar: {
      type: Object,
      value: {
        "backgroundColor": "#ffffff",
        "color": "#979795",
        "selectedColor": "#1c1c1b",
        "list": [
          {
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
  },

  /**
   * 组件的初始数据
   */
  data: {
    isIphoneX: app.globalData.systemInfo.model.search('iPhone X') != -1 ? true : false
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
