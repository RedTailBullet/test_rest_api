import { TestCase, HttpResult } from '../../../../../test_runners/models'

let testData = {
  "name": {
    "en": "smartphone_with_correct_format_name_and_no_field_slug",
    "de": "smartphone_with_correct_format_name_and_no_field_slug"
  }
}

const c: TestCase = {
  description: 'Case 3. Create category with correct format name and no field slug',
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