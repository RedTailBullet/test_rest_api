import { TestCase } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '5. Create product type with wrong type in attribute definition draft',
  requestData: {
    payload: {
      'name': 'error test product type 1',
      'description': 'error test product type 1',
      'attributes': [
        {
          'type': {
            'name': 'String'
          },
          'name': 'error-test-wrong-type',
          'label': {
            'en': 'error test wrong type'
          },
          'isRequired': false
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
