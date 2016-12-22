import { TestCase, HttpResult } from '../../../../../models'

let testData = {
  "name": "smartphone_with_wrong_format_name_and_no_field_slug"
}

const c: TestCase = {
  description: 'Case 2. Create category with wrong format name and no field slug.',
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