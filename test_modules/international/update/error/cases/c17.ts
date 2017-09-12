import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '17. Add supported language with illegal language code',
  requestData: {
    payload: {
      version: 8,
      actions: [
        {
          action: 'addSupportLanguage',
          languageCode: '中文'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
