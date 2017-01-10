import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '20. Remove supported currency with non-exist currency code',
  requestData: {
    payload: {
      version: 8,
      actions: [
        {
          action: 'removeSupportCurrency',
          currencyCode: 'HKD'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
