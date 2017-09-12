import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '23. Remove supported language with empty language code',
  requestData: {
    payload: {
      version: 8,
      actions: [
        {
          action: 'removeSupportLanguage',
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
