import { TestCase, HttpResult } from '../../../../../test_runners/models'

let testData = {
  "name": {
    "en": "smartphone_length_of_slug_exceed_limit",
    "de": "smartphone_length_of_slug_exceed_limit"
  },
  "slug": "nneismartphone_smartphone_smartphone_smartphone_smartphone_smartphone_smartphone_smartphone_smartphone_smartphone_smartphone_smartphone_smartphone_smartphone_smartphone_smartphone_smartphone_smartphone_smartphone_smartphone_smartphone_smartphone_smartphone_" 
}

const c: TestCase = {
  description: 'Case 6.  Create category with correct field name and length of slug exceed limit',
  config: function (this: TestCase) {
    console.log('testData.slug.length should in [2, 256]', testData.slug.length)
  },
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