import { TestCase } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '2. Create product type with no name',
  requestData: {
    payload: {
      description: 'error test no name'
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
