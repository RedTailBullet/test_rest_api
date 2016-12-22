import { TestCase } from '../../../../../models'
let testData = {}

const c: TestCase = {
  description: 'Case 1. Create category with no payload.',
  requestData: {
    method: 'post',
    payload: {
      ...test
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c