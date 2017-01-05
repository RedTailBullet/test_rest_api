import { TestCase, HttpResult } from '../../../../../test_runners/models'

let testData = {
  "name": {
    "en": "smartphone_of_orderHint_error_test",
    "de": "smartphone_of_orderHint_error_test"
  },
  "slug": "en-smartphone_slug_of_orderHint_error_test",
  "orderHint": 0.00031481093037113502170356
}

const c: TestCase = {
  description: '13. Create category with wrong type of \'orderHint\'',
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