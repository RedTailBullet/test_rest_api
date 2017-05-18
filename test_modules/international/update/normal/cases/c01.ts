import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '1. Set default currency',
  requestData: {
    payload: {
      actions: [
        {
          action: 'setDefaultCurrency',
          currencyCode: 'USD'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 200,
    data: {
      defaultCurrency: {
        currencyCode: 'USD'
      }
    }
  }
}

export default c
