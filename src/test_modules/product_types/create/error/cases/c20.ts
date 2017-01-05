import { TestCase } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '20. Create product type with name too short in attribute definition draft',
  requestData: {
    payload: {
      'name': 'error test product type attribute definition name too short',
      'description': 'error test product type attribute definition name too short',
      'attributes': [
        {
          'type': {
            'name': 'text'
          },
          'name': 'a',
          'label': {
            'en': 'error test attribute definition name too short'
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
