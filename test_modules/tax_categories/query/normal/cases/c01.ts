import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s01 from '../setups/s01'

const setups = [s01]

const c: TestCase = {
  description: '1. Query tax categories by ID',
  setups,
  config: function (this: TestCase) {
    let result = s01.result as HttpResult
    if (result.data) {
      this.requestData.url += `/${result.data.id}`
    }
  },
  requestData: {},
  expectedResult: {
    httpCode: 200,
    data: {
      id: '',
      createdAt: '',
      lastModifiedAt: '',
      version: 0,
      name: 'tax categories for query normal test',
      description: 'tax categories for query normal test',
      rates: [
        {
          name: 'tax rate draft for query normal test',
          amount: 0.15,
          includedInPrice: false,
          country: 'US',
          state: 'Los Angeles'
        }
      ]
    }
  }
}

export default c
