import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '3. Add supported currency',
  requestData: {
    payload: {
      actions: [
        {
          action: 'addSupportCurrency',
          currencyCode: 'CNY'
        },
        {
          action: 'addSupportCurrency',
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
        },
        {
          currencyCode: 'JPY'
        }
      ]
    }
  }
}

export default c
