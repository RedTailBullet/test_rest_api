import { TestCase, HttpResult } from '../../../../../test_runners/models'
import s1 from '../setups/s01'

const setups = [s1]

const c: TestCase = {
  description: '2. Change name with name longer than 256',
  setups,
  config: function (this: TestCase) {
    const result = s1.result as HttpResult
    const data = result.data
    if (data) {
      this.requestData.url += `/${data.id}`
    }
  },
  requestData: {
    payload: {
      version: 0,
      actions: [
        {
          action: 'setName',
          name: {
            zh_cn: 'undefined01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456'
          }
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
