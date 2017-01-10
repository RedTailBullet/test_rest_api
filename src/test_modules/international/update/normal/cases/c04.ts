import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '4. Add supported language',
  requestData: {
    payload: {
      actions: [
        {
          action: 'addSupportLanguage',
          languageCode: 'zh'
        },
        {
          action: 'addSupportLanguage',
          languageCode: 'ja'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 200,
    data: {
      supportedLanguages: [
        {
          languageCode: 'zh'
        },
        {
          languageCode: 'ja'
        }
      ]
    }
  }
}

export default c
