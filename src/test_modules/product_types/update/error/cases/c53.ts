import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s3 from '../setups/s03'

const setups = [s3]

const c: TestCase = {
  description: '53. Change the label of an enum value with the wrong type of attribute',
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
          action: 'setPlainEnumValueLabel',
          attributeName: 'text-attribute-for-update-error-test',
          newValue: {
            key: 'enumKey1',
            label: 'enumLabel1'
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
