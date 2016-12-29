import { TestCase, HttpResult } from '../../../../../models'

import s01 from '../setups/s01'

const setup = [ s01 ]

const c: TestCase = {
  description: '7. Update inventory entry remove reserved quantity with minus figure',
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
          action: 'removeReserved',
          removeReservedQuantity: -1
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
