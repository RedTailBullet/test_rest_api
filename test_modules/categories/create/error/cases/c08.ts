
import { TestCase, HttpResult } from '../../../../../test_runners/models'
import s1 from '../setups/s8-1'
let setups = [s1]

let testData = {
  "name": {
    "en": "smartphone_with_different_name_and_duplicate_slug",
    "de": "smartphone_with_different_name_and_duplicate_slug"
  },
  "slug": "en-smartphone_slug_with_correct_message_for_error_create_test-2"
}

const c: TestCase = {
  description: 'Case 8. Create category with different field name and duplicate field slug',
  setups,
  requestData: {
    method: 'post',
    payload: {
      ...testData
    }
  },
  expectedResult: {
    httpCode: 409
  }
}

export default c
