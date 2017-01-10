import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '19. Remove supported currency with no currency code',
  requestData: {
    payload: {
      version: 8,
      actions: [
        {
          action: 'removeSupportCurrency'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
