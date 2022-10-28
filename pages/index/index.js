// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    tabbar: {},
    statusBarBackground: '#1A1A1A',
    navBarHeight: app.globalData.navBarHeight,
    cardsList:[
      {id: 1, title: '功能1', img:'/assets/images/icon/icon1.png'},
      {id: 2, title: '功能2', img:'/assets/images/icon/icon2.png'},
      {id: 3, title: '功能3', img:'/assets/images/icon/icon3.png'},
      {id: 4, title: '功能4', img:'/assets/images/icon/icon4.png'},
      {id: 5, title: '功能4', img:'/assets/images/icon/icon5.png'},
    ],
    iconList:[
      {id: 1, title: '功能1', imgList:[
        {title: '功能A', imgUrl:'/assets/images/icon/icon1.png'},
        {title: '功能B', imgUrl:'/assets/images/icon/icon2.png'},
        {title: '功能C', imgUrl:'/assets/images/icon/icon3.png'},
        {title: '功能D', imgUrl:'/assets/images/icon/icon4.png'},
        {title: '功能E', imgUrl:'/assets/images/icon/icon5.png'},
        {title: '功能F', imgUrl:'/assets/images/icon/icon1.png'},
      ]},
      {id: 2, title: '功能2', imgList:[
        {title: '功能X', imgUrl:'/assets/images/icon/icon2.png'},
        {title: '功能Y', imgUrl:'/assets/images/icon/icon3.png'},
        {title: '功能Z', imgUrl:'/assets/images/icon/icon4.png'},
        {title: '功能W', imgUrl:'/assets/images/icon/icon1.png'},
        {title: '功能Q', imgUrl:'/assets/images/icon/icon2.png'},
        {title: '功能E', imgUrl:'/assets/images/icon/icon3.png'},
      ]},
      {id: 3, title: '功能3', imgList:['/assets/images/icon/icon3.png']},
      {id: 4, title: '功能4', imgList:['/assets/images/icon/icon4.png']},
      {id: 5, title: '功能4', imgList:['/assets/images/icon/icon5.png']},
      {id: 6, title: '功能6', imgList:['/assets/images/icon/icon1.png']},
      {id: 7, title: '功能7', imgList:['/assets/images/icon/icon2.png']},
      {id: 8, title: '功能8', imgList:['/assets/images/icon/icon3.png']},
      {id: 9, title: '功能9', imgList:['/assets/images/icon/icon4.png']},
      {id: 10, title: '功能10', imgList:['/assets/images/icon/icon5.png']},
    ],
    renterIconList:[],
    isShowPopup:false,
    PopupList:[]
  },
  onLoad() {
    app.editTabbar();
    this.setIconListData();
    this.setImgList()
  },
  // 设置 iconList
  setIconListData() {
    const length = this.data.iconList.length;
    const newIconList = this.data.iconList;
    if(length === 0) return;
    const remainder = length % 4;
    if(remainder && remainder > 0) {
      for(let i = 0; i < remainder; i++) {
        newIconList.push({
          id: newIconList.length + 1,
          title:'',
          imgList:[]
        })
      }
      this.setData({
        iconList: newIconList
      })
    }
  },
  // iconList中imgList大于4 截取为4个，用于页面渲染
  setImgList() {
    const length = this.data.iconList.length;
    const newIconList = JSON.parse(JSON.stringify(this.data.iconList));
    if(length === 0) return;
    let newArr = newIconList.map(item => {
      if(item.imgList.length > 4) {
        item.imgList = item.imgList.slice(0,4)
      }
      return item
    })
    this.setData({
      renterIconList: newArr
    })
  },
  // 大于4条点击弹窗
  handelOpenIconClick(data) {
    const index = data.currentTarget.dataset.index;
    console.log(index)
    if(this.data.iconList[index].imgList.length >= 4) {
      this.setData({
        PopupList: {title:this.data.iconList[index].title, list:this.data.iconList[index].imgList},
        isShowPopup: true
      })
    }else {
      console.log('少于4个的点击事件', this.data.iconList[index])
    }
  }
})
