import { TestCase, HttpResult } from '../../../../../test_runners/models'
import s1 from '../setups/s01'

const setups = [s1]

const c: TestCase = {
  description: '3. Change slug with slug longer than 256',
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
          action: 'setSlug',
          slug: 'undefined01234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456'
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
