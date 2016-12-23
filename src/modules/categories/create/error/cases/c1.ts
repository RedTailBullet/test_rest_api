import { TestCase } from '../../../../../models'

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