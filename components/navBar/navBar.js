// components/navBar/navBar.js
const app = getApp()
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多 slot 支持
  },
  properties: {
    background:{
      type: String,
    },
    navBackground: {
      type: String,
    },
  },

  data: {
    navBarHeight: app.globalData.navBarHeight,
    menuRight: app.globalData.menuRight,
    menuTop: app.globalData.menuTop,
    menuHeight: app.globalData.menuHeight,
    statusBarHeightData: app.globalData.statusBarHeightData,
    menuLeft:app.globalData.menuLeft
  },
 
  methods: {
  }
})