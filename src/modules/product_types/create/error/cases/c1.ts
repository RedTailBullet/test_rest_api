import { TestCase } from '../../../../../models'

const c: TestCase = {
  description: '1. Create product type with no payload',
  requestData: {
    payload: {}
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
