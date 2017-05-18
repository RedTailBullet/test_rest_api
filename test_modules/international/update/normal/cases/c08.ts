import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '8. Set default language again',
  requestData: {
    payload: {
      actions: [
        {
          action: 'setDefaultLanguage',
          languageCode: 'en'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 200,
    data: {
      defaultLanguage: {
        languageCode: 'en'
      }
    }
  }
}

export default c
