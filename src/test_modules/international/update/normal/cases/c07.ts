import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '7. Set default currency again',
  requestData: {
    payload: {
      actions: [
        {
          action: 'setDefaultCurrency',
          currencyCode: 'EUR'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 200,
    data: {
      defaultCurrency: {
        currencyCode: 'EUR'
      }
    }
  }
}

export default c
