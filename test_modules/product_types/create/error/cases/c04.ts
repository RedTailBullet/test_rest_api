import { TestCase } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '4. Create product type with no type in attribute definition draft',
  requestData: {
    payload: {
      'name': 'error test product type 1',
      'description': 'error test product type 1',
      'attributes': [
        {
          'name': 'error-test-no-type',
          'label': {
            'en': 'error test no type'
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
