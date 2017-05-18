import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '6. remove supported language',
  requestData: {
    payload: {
      actions: [
        {
          action: 'removeSupportLanguage',
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
          languageCode: 'en'
        },
        {
          languageCode: 'zh'
        }
      ]
    }
  }
}

export default c
