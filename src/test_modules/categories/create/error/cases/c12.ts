import { TestCase, HttpResult } from '../../../../../models'

let testData = {
  "name": {
    "en": "smartphone_of_metaKeywords_error_test",
    "de": "smartphone_of_metaKeywords_error_test"
  },
  "slug": "en-smartphone_slug_of_metaKeywords_error_test",
  "metaKeywords": "phone"
}

const c: TestCase = {
  description: '12. Create category with wrong format \'metaKeywords\'',
  requestData: {
    method: 'post',
    payload: {
      ...testData
    }
  },
  expectedResult: {
    httpCode: 400 
  }
}

export default c