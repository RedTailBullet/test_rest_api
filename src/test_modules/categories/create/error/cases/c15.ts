import { TestCase, HttpResult } from '../../../../../models'

let testData = {
  "name": {
    "en": "iphone_error_test_with_no_typeId",
    "de": "iphone_error_test_with_no_typeId"
  },
  "slug": "en-iphone_slug_error_test_with_no_typeId",
  "parent": {
    "id": "f065f169-306a-45d8-8a6c-4ad8ab85690f"
  }
}

const c: TestCase = {
  description: '15. Create category with parent and no teyeId',
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