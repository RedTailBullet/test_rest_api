import { TestCase, HttpResult } from '../../../../../models'

let testData = {
  "name": {
    "en": "iphone_error_test_with_no_id",
    "de": "iphone_error_test_with_no_id"
  },
  "slug": {
    "en": "iphone_slug_error_test_with_no_id", 
    "de": "iphone_slug_error_test_with_no_id" 
  }, 
  "parent": {
    "typeId": "category"
  }
}

const c: TestCase = {
  description: '16. Create category with parent and no id',
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