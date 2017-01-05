import { TestCase } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '6. Create product type with no name in attribute definition draft',
  requestData: {
    payload: {
      'name': 'error test product type 1',
      'description': 'error test product type 1',
      'attributes': [
        {
          'type': {
            'name': 'text'
          },
          'label': {
            'en': 'error test no name'
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
