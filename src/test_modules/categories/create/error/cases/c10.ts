import { TestCase, HttpResult } from '../../../../../test_runners/models'

let testData = {
  "name": {
    "en": "smartphone_with_wrong_format_metaTitle",
    "de": "smartphone_with_wrong_format_metaTitle"
  },
  "slug": "en-smartphone_slug_with_wrong_format_metaTitle",
  "metaTitle": "smartphone"
}

const c: TestCase = {
  description: '10. Create category with wrong format \'metaTitle\'',
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