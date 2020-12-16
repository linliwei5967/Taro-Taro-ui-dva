// 全局变量
const api = '接口地址'
const globalData = {
  'api': api,
  'access_token': '', // token
  'appId': '',
}
export function setGlobalData (key, val) {
  globalData[key] = val
}
export function getGlobalData (key) {
  return globalData[key]
}

