import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '21. Remove supported currency with empty currency code',
  requestData: {
    payload: {
      version: 8,
      actions: [
        {
          action: 'removeSupportCurrency',
          currencyCode: ''
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
