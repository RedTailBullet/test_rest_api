import { TestCase, HttpResult } from '../../../../../test_runners/models'

let testData = {
  "name": {
    "en": "iphone_error_test_with_wrong_id_value",
    "de": "iphone_error_test_with_wrong_id_value"
  },
  "slug": "en-iphone_slug_error_test_with_wrong_id_value", 
  "parent": {
    "typeId": "category",
    "id": "11111169-306a-45d8-8a6c-4ad8ab85690f"
  }
}

const c: TestCase = {
  description: '17. Create category with parent and wrong \'id\' value',
  requestData: {
    method: 'post',
    payload: {
      ...testData
    }
  },
  expectedResult: {
    httpCode: 200
  }
}

export default c