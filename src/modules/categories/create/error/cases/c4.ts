import { TestCase, HttpResult } from '../../../../../models'

let testData = {
  "name": {
    "en": "smartphone_with_correct_format_name_and_wrong_format_slug",
    "de": "smartphone_with_correct_format_name_and_wrong_format_slug"
  },
  "slug": "smartphon_slug_with_correct_format_name_and_wrong_format_slug"
}

const c: TestCase = {
  description: 'Case 4. Create category with correct format name and wrong format slug',
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