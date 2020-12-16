export default {
  pages: [
    'pages/index/index',  // 首页
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Taro-Taro-ui-dva',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: "#666",
    selectedColor: "#458B74",
    backgroundColor: "#fafafa",
    borderStyle: 'black',
    list: [{
      "pagePath": "pages/index/index",
      "iconPath": "./assets/images/tabbar/home-on.png",
      "selectedIconPath": "./assets/images/tabbar/home-off.png",
      "text": "首页",
    },
      {
        "pagePath": "pages/index/index",
        "iconPath": "./assets/images/tabbar/service-on.png",
        "selectedIconPath": "./assets/images/tabbar/service-off.png",
        "text": "服务"
      },
      {
        "pagePath": "pages/index/index",
        "iconPath": "./assets/images/tabbar/apponit-on.png",
        "selectedIconPath": "./assets/images/tabbar/apponit-off.png",
        "text": "预约"
      },
      {
        "pagePath": "pages/index/index",
        "iconPath": "./assets/images/tabbar/my-on.png",
        "selectedIconPath": "./assets/images/tabbar/my-off.png",
        "text": "我的"
      }
    ]}
}
