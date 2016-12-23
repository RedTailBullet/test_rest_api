import { TestCase, HttpResult } from '../../../../../models'

let testData = {
  "name": {
    "en": "smartphone",
    "de": "smartphone"
  },
  "slug": {
    "en": "smartphone_slug_of_description_error_test",
    "de": "smartphone_slug_of_description_error_test"
  },
  "description": "Smartphone is more and more popular in world"
}

const c: TestCase = {
  description: '9. Create category with wrong format \'description\'',
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