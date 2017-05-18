import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '15. Add supported language with no language code',
  requestData: {
    payload: {
      version: 8,
      actions: [
        {
          action: 'addSupportLanguage'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
