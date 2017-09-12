import { TestCase } from '../../../../../test_runners/models'

const c: TestCase = {
  description: 'Case 1. Create category with no payload.',
  requestData: {
    method: 'post',
    payload: {}
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c