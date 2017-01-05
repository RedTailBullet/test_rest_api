import { TestCase } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '8. Create product type with illegal characters in name in attribute definition draft',
  requestData: {
    payload: {
      'name': 'error test product type 1',
      'description': 'error test product type 1',
      'attributes': [
        {
          'type': {
            'name': 'text'
          },
          'name': '$%^&*()@#!<>',
          'label': {
            'en': 'error test illegal characters in name'
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
