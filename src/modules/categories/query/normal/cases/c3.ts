import { TestCase, HttpResult } from '../../../../../models'
import s1 from '../setups/s3-1'

let setups = [s1]
let testData = {
  "name": {
    "en": "en-smartphone_for_queryByID_function_test",
    "de": "de-smartphone_for_queryByID_function_test"
  },
  "slug": {
    "en": "en-smartphone_slug_for_queryByID_function_test",
    "de": "de-smartphone_slug_for_queryByID_function_test"
  }
}

const c: TestCase = {
  description: '3. Get category by ID when 1 category in database',
  setups,
  config: function (this: TestCase) {
    const result = s1.result as HttpResult
    if(result.data) {
      this.requestData.url = `${this.requestData.url}/${result.data.id}`
    }
  }, 
  requestData: {
    payload: {}
  },
  expectedResult: {
    httpCode: 200,
    data: {
      ...testData,
      'id': '',
      'version': 0,
      'ancestors': [],
      'orderHint': '',
      'createdAt': '',
      'lastModifiedAt': '',
      'lastMessageSequenceNumber': 1
    }
  }
}

export default c
