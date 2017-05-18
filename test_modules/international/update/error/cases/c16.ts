import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '16. Add supported language with empty language code',
  requestData: {
    payload: {
      version: 8,
      actions: [
        {
          action: 'addSupportLanguage',
          languageCode: ''
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
