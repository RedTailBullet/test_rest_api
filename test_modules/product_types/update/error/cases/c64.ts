import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s2 from '../setups/s02'
import s6 from '../setups/s06'

const setups = [s2, s6]

const c: TestCase = {
  description: '64. Update product type with version lower',
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
      version: 0,
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
    httpCode: 409
  }
}

export default c
