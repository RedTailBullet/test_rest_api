import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '7. Set default language with no language code',
  requestData: {
    payload: {
      version: 8,
      actions: [
        {
          action: 'setDefaultLanguage'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 404
  }
}

export default c
