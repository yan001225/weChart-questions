// components/popup/popup.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show:{
      type: Boolean,
    },
    iconData:{
      type: Object
    }
  },
  created() {
    
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close() {
      this.setData({
        show: false
      })
    },
    handelIconClick(data) {
      // console.log(data)
      // this.triggerEvent('click', )
      console.log(data.currentTarget.dataset.item.title)
      wx.showToast({
        title:data.currentTarget.dataset.item.title,
        icon:'none'
      })
    }
  }
})
