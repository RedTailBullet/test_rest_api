import { TestCase, HttpResult } from '../../../../../test_runners/models'
import s1 from '../setups/s01'

const setups = [s1]

const c: TestCase = {
  description: '9. Change orderHint with no orderHint',
  setups,
  config: function (this: TestCase) {
    let result = s1.result as HttpResult
    let data = result.data
    if (data) {
      this.requestData.url += `/${data.id}`
    }
  },
  requestData: {
    payload: {
      version: 0,
      actions: [
        {
          action: 'setOrderHint'
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
