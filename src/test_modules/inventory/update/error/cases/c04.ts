import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s01 from '../setups/s01'

const setup = [ s01 ]

const c: TestCase = {
  description: '4. Update inventory entry add reserved quantity with quantity more than available quantity',
  setups: setup,
  config: function (this: TestCase) {
    const result = s01.result as HttpResult
    if (result.data) {
      this.requestData.url += `/${result.data.id}`
    }
  },
  requestData: {
    payload: {
      version: 0,
      actions: [
        {
          action: 'addReserved',
          addReservedQuantity: 11
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
