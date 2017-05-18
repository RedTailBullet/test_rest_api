import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s1 from '../setups/s01'

const setups = [s1]

const c: TestCase = {
  description: '25. Remove attribute definition with name that does not exist',
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
          action: 'removeAttributeDefinition',
          name: 'text-attribute-for-update'
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
