import { TestCase, HttpResult } from '../../../../../models'

let testData = {
  "name": {
    "en": "smartphone_of_metaDescription_error_test",
    "de": "smartphone_of_metaDescription_error_test"
  },
  "slug": {
    "en": "smartphone_slug_of_metaDescription_error_test",
    "de": "smartphone_slug_of_metaDescription_error_test"
  },
  "metaDescription": "Smartphone is more and more popular in world"
}

const c: TestCase = {
  description: '11. Create category with wrong format \'metaDescription\'',
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