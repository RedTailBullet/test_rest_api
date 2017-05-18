import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '4. Set default currency with currency code too short',
  requestData: {
    payload: {
      actions: [
        {
          action: 'setDefaultCurrency',
          currencyCode: 'U'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 404
  }
}

export default c
