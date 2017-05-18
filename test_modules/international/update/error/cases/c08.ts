import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '8. Set default language with empty language code',
  requestData: {
    payload: {
      version: 8,
      actions: [
        {
          action: 'setDefaultLanguage',
          languageCode: ''
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 404
  }
}

export default c
