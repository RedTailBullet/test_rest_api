import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '9. Set default language with illegal language code',
  requestData: {
    payload: {
      version: 8,
      actions: [
        {
          action: 'setDefaultLanguage',
          languageCode: '中文'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 404
  }
}

export default c
