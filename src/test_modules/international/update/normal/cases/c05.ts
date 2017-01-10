import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '5. remove supported currency',
  requestData: {
    payload: {
      actions: [
        {
          action: 'removeSupportCurrency',
          currencyCode: 'JPY'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 200,
    data: {
      supportedCurrencies: [
        {
          currencyCode: 'USD'
        },
        {
          currencyCode: 'CNY'
        }
      ]
    }
  }
}

export default c
