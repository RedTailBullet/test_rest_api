import { TestCase, HttpResult } from '../../../../../models'

let testData = {
  "name": {
    "en": "smartphone_length_of_slug_exceed_limit",
    "de": "smartphone_length_of_slug_exceed_limit"
  },
  "slug": {
    "en": "smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_",
    "de": "smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_"
  }
}

const c: TestCase = {
  description: 'Case 6.  Create category with correct field name and length of slug exceed limit',
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