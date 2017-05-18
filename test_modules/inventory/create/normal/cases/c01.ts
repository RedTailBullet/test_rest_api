import { TestCase } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '1. Create inventory entry without channel & customField',
  requestData: {
    payload: {
      sku: 'normal test create inventory entry sku',
      quantityOnStock: 10,
      restockableInDays: 10,
      expectedDelivery: '2017-01-01T06:00:00.000Z'
    }
  },
  expectedResult: {
    httpCode: 200,
    data: {
      'id': '925d0b50-24ef-41a8-8c3a-ddf8faa20083',
      'version': 0,
      'sku': 'normal test create inventory entry sku',
      'quantityOnStock': 10,
      'availableQuantity': 10,
      'restockableInDays': 10,
      'expectedDelivery': '2017-01-01T06:00:00.000Z',
      'reservations': [],
      'createdAt': '2016-12-26T08:14:13.319Z',
      'lastModifiedAt': '2016-12-26T08:14:13.319Z'
    }
  }
}

export default c
