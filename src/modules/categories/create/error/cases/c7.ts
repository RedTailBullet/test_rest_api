import { TestCase, HttpResult } from '../../../../../models'
import s1 from '../setups/s7-1'
let setups = [s1]

let testData = {
  "name": {
    "en": "smartphone_with_correct_message_for_error_create_test",
    "de": "smartphone_with_correct_message_for_error_create_test"
  },
  "slug": {
    "en": "smartphone_slug_with_correct_message_for_error_create_test",
    "de": "smartphone_slug_with_correct_message_for_error_create_test"
  }
}

const c: TestCase = {
  description: '7. Create category with duplicate field name and duplicate field slug',
  setups,
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