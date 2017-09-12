import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s01 from '../setups/s01'
import s02 from '../setups/s02'

const setups = [ s01, s02 ]

const c: TestCase = {
  description: '9. Update inventory entry remove reserved quantity with quantity more than reserved quantity',
  setups,
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
          action: 'removeReserved',
          removeReservedQuantity: 3
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
