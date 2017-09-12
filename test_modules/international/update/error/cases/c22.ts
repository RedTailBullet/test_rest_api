import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '22. Remove supported language with no language code',
  requestData: {
    payload: {
      version: 8,
      actions: [
        {
          action: 'removeSupportLanguage'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
