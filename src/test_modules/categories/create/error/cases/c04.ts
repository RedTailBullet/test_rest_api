import { TestCase, HttpResult } from '../../../../../test_runners/models'

let testData = {
  "name": {
    "en": "smartphone_with_correct_format_name_and_slug_length_is_1",
    "de": "smartphone_with_correct_format_name_and_slug_length_is_1"
  },
  "slug": "s"
}

const c: TestCase = {
  description: 'Case 4. Create category with slug\'s length is 1',
  // config: function (this: TestCase) {
  //   console.log('testData.slug.length should in [2, 256]', testData.slug.length)
  // },
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