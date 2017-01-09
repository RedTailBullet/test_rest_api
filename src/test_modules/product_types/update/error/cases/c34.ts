import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s3 from '../setups/s03'

const setups = [s3]

const c: TestCase = {
  description: '34. Add plain enum with no value',
  setups,
  config: function (this: TestCase) {
    const result = s3.result as HttpResult
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
          action: 'addPlainEnumValue',
          attributeName: 'text-attribute-for-update-error-test'
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
