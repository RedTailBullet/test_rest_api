import { TestCase, HttpResult } from '../../../../../test_runners/models'
import s1 from '../setups/s01'

const setups = [s1]

const c: TestCase = {
  description: '12. Set metaKeywords with empty metaKeywords',
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
          action: 'setMetaKeywords',
          metaKeywords: {}
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
