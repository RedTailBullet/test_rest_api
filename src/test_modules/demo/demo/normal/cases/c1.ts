import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: 'Case 1. Create cart with all properties',
  requestData: {},
  expectedResult: {
    httpCode: 201
  }
}

export default c