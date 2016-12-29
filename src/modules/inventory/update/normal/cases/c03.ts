import { TestCase, HttpResult } from '../../../../../models'

import s01 from '../setups/s01'
import s02 from '../setups/s02'

const setups = [ s01, s02 ]

const c: TestCase = {
  description: '3. Update inventory entry remove reserved quantity',
  setups,
  config: function (this: TestCase) {
    const result = s01.result as HttpResult
    if (result.data) {
      this.requestData.url += `/${result.data.id}`
    }
  },
  requestData: {
    payload: {
      version: 1,
      actions: [
        {
          action: 'removeReserved',
          removeReservedQuantity: 25
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 200,
    data: {
      id: '',
      version: 2,
      createdAt: '',
      lastModifiedAt: '',
      sku: 'Inventory entry sku for update normal test',
      supplyChannel: {},
      quantityOnStock: 175,
      availableQuantity: 150,
      restockableInDays: 20,
      expectedDelivery: '2017-01-01T06:00:00.000Z',
      custom: {}
    }
  }
}

export default c
