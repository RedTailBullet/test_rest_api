import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '12. Add supported currency with illegal currency code',
  requestData: {
    payload: {
      version: 8,
      actions: [
        {
          action: 'addSupportCurrency',
          currencyCode: '人民币'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
