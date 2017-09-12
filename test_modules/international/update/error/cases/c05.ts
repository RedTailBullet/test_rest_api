import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '5. Set default currency with illegal currency code',
  requestData: {
    payload: {
      actions: [
        {
          action: 'setDefaultCurrency',
          currencyCode: '人民币'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 404
  }
}

export default c
