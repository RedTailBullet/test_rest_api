import { TestCase, HttpResult } from '../../../../../test_runners/models'
import s1 from '../setups/s01'

const setups = [s1]

const c: TestCase = {
  description: '11. Set metaDescription with empty metaDescription',
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
          action: 'setDescription',
          metaDescription: {}
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
