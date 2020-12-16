import Taro from "@tarojs/taro";
import {getGlobalData, setGlobalData} from "./global";

// 路由请求
export function Request(params) {
  const { url, method, data } = params
  let promise = new Promise((resolve, reject) => {
    var header = {
      'Content-type': method == "post" || method != "postForm" ? 'application/json;charset=utf-8':'application/x-www-form-urlencoded',
      'Authorization': 'Basic cGxhdGZvcm06cGxhdGZvcm1fc2VjcmV0',
      'Tenant-Id': '000000',
      'Cloud-Auth': "bearer " + getGlobalData("access_token"),
    }
    Taro.showLoading({title: '加载中'})
    Taro.request({
      url: getGlobalData("api") + url,
      method: method == "postForm" || method == "post"?"post":"get",
      data: data,
      header: header,
      success: (res => {
        Taro.hideLoading();
        res.statusCode == 200?resolve(res.data):reject(res.data)
      }),
      fail: (res => {
        // Taro.hideLoading();
        Taro.showToast({
          title: '网络出错',
          icon: 'none',
          duration: 1500
        })
        reject('网络出错');
      })
    })
  })
  return promise;
}
