import { TestCase } from '../../../../../models'

const c: TestCase = {
  description: '3. Create product type with no description',
  requestData: {
    payload: {
      'name': 'error-test-no-description'
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
