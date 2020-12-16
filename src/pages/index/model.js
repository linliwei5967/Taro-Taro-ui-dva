import {onTest} from "./services";

export default {
  namespace: 'indexModel',
  state: {
    data: 'model数据'
  },
  effects: {
    * onTest({payload}, {call, put}) {
      const res = yield call(onTest, payload)
      const {data = {}} = res || {}
      return res
    },
  },
  reducers: {
    updateState(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
}
