import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s2 from '../setups/s02'

const setups = [s2]

const c: TestCase = {
  description: '64. Update product type with no version',
  setups,
  config: function (this: TestCase) {
    const result = s2.result as HttpResult
    const data = result.data
    if (data) {
      this.requestData.url += `/${data.id}`
    }
  },
  requestData: {
    payload: {
      actions: [
        {
          action: 'setIsSearchable',
          attributeName: 'number-attribute-for-update-error-test',
          isSearchable: true
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
