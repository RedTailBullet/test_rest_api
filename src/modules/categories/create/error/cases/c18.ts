import { TestCase, HttpResult } from '../../../../../models'
import s1 from '../setups/s18-1'
let setups = [s1]

let testData = {
  "name": {
    "en": "iphone_error_test_with_wrong_typeId_value",
    "de": "iphone_error_test_with_wrong_typeId_value"
  },
  "slug": {
    "en": "iphone_slug_error_test_with_wrong_typeId_value", 
    "de": "iphone_slug_error_test_with_wrong_typeId_value" 
  }, 
  "parent": {
    "typeId": "product",
    "id": "{id of setups[1]}"
  }
}

const c: TestCase = {
  description: '18. Create category with parent and wrong \'typeId\' value',
  setups,
  config: function (this: TestCase) {
    const result = s1.result as HttpResult
    if(result.data) {
      this.requestData.payload.parent.id = `${result.data.id}`
    }
  },
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