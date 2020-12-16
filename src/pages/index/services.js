import {Request} from '../../utils/request'

// service接口
export async function onTest(params) {
  return Request({url:'/api/xxx', method: 'get', data: params});
}
