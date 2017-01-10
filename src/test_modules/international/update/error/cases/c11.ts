import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '11. Add supported currency with no currency code',
  requestData: {
    payload: {
      version: 8,
      actions: [
        {
          action: 'addSupportCurrency'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
