import { TestCase, HttpResult } from '../../../../../models'

import s01 from '../setups/s01'

const setup = [ s01 ]

const c: TestCase = {
  description: '6. Update inventory entry remove quantity with quantity larger than quantity available',
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
          action: 'removeQuantity',
          quantity: 11
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
