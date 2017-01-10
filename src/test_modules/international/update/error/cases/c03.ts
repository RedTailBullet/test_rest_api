import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '3. Set default currency with no currencyCode',
  requestData: {
    payload: {
      actions: [
        {
          action: 'setDefaultCurrency'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 404
  }
}

export default c
