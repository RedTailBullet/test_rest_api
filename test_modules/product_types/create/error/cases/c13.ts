import { TestCase } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '13. Create product type with wrong value for enum in type in attribute definition draft',
  requestData: {
    payload: {
      'name': 'error test product type 1',
      'description': 'error test product type 1',
      'attributes': [
        {
          'type': {
            'name': 'enum',
            'values': true
          },
          'name': 'error-test-wrong-value-in-type',
          'label': {
            'en': 'error test wrong value in type'
          },
          'isRequired': true
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
