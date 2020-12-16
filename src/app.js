import React, { Component } from 'react'
import Taro from "@tarojs/taro";
import { Request } from "./utils/request";
import { getGlobalData, setGlobalData } from "./utils/global";
import { Provider } from "react-redux";
import dva from './utils/dva'
import models from './models/index';
import './app.scss'

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
});
const store = dvaApp.getStore();
class App extends Component {

  async componentDidMount () {}

  // 获取token
  setToken = () =>{
    Request({
      url: 'api',
      method: 'postForm',
      data: {},
    }).then(res =>{
      setGlobalData("access_token", res.access_token)    // 将access_token存入全局变量中
      this.onWxLogin() // 微信授权登录
    })
  }

  // 获取用户openId
  onWxLogin = () =>{
    Taro.login({
      success: function (resLogin) {
        if (resLogin.code) {
          Request({
            url: `/api/${getGlobalData('appId')}/login`,
            method: 'get',
            data: {code: resLogin.code,},
          }).then(res=>{
            // 将openId存入全局变量中
            setGlobalData("openId", res.data.openid)
          })
        }
      },
    })
  }

  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}
export default App
