import { TestCase, HttpResult } from '../../../../../models'

let testData = {
  "name": {
    "en": "smartphone_slug_contain_illegal_characters",
    "de": "smartphone_slug_contain_illegal_characters"
  },
  "slug": {
    "en": "smartphone_slug_[...,,,   '''///&&&!!!@@@]",
    "de": "smartphone_slug_[...,,,   '''///&&&!!!@@@]"
  }
}

const c: TestCase = {
  description: 'Case 5. Create category with correct field name and field slug contain illegal characters.',
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