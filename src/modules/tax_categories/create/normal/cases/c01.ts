import { TestCase } from '../../../../../models'

const c: TestCase = {
  description: '1. Create tax categories without subRate',
  requestData: {
    payload: {
      name: 'tax categories for create normal test',
      description: 'tax categories for create normal test',
      rates: [
        {
          name: 'tax rate draft for create normal test',
          amount: 0.15,
          includedInPrice: false,
          country: 'US',
          state: 'Los Angeles'
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 200,
    data: {
      'id': '5da9d131-c1c5-458d-abfb-9e39a788a27c',
      'version': 0,
      'name': 'tax categories for create normal test',
      'description': 'tax categories for create normal test',
      'rates': [
        {
          'name': 'tax rate draft for create normal test',
          'amount': 0.15,
          'includedInPrice': false,
          'country': 'US',
          'state': 'Los Angeles',
          'id': 'umbZrQ4y',
          'subRates': []
        }
      ],
      'createdAt': '2016-12-26T08:27:47.031Z',
      'lastModifiedAt': '2016-12-26T08:27:47.031Z'
    }
  }
}

export default c
