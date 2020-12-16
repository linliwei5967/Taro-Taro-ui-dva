import Taro from "@tarojs/taro";
import { Request } from "./request";
import { getGlobalData } from "./global";

// 用户授权 获取openid
export function toAuthorize (res) {
  Taro.getUserInfo({
    success: (e)=>{
      if(res.detail.userInfo){ // 返回的信息中包含用户信息则证明用户允许获取信息授权
        // 保存用户信息微信登录
        // 可以通过 Taro.getSetting 先查询一下用户是否授权了 "scope.userInfo" 这个 scope
        Taro.authorize({
          scope: 'scope.userInfo',
          success: function () {
            Taro.login({
              success: function (resLogin) {
                console.log('获取用户信息',resLogin)
                if (resLogin.code) {
                  Request({
                    url: `/cloud-vip-net/wechat/user/${getGlobalData('appId')}/login`,
                    method: 'get',
                    data: {
                      code: resLogin.code,
                    },
                  })
                } else {
                  console.log('登录失败！' + resLogin.errMsg)
                }
              }
            })
          }
        })
      }
    },
    fail: (e)=>{
      // Taro.navigateTo({url: '/pages/login/index'})
    }
  })
}
