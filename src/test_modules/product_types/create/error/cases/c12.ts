import { TestCase } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '12. Create product type with no \'values\' for enum in type while \'isRequired\' of this attribute definition draft is true',
  requestData: {
    payload: {
      'name': 'error test product type 1',
      'description': 'error test product type 1',
      'attributes': [
        {
          'type': {
            'name': 'enum'
          },
          'name': 'error-test-no-values-isRequired-true',
          'label': {
            'en': 'error test no values isRequired true'
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
