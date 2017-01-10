import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '24. Remove supported language with non-exist language code',
  requestData: {
    payload: {
      version: 8,
      actions: [
        {
          action: 'removeSupportLanguage',
          languageCode: 'hk'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
