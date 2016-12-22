import { TestCase } from '../../../../../models'

const c: TestCase = {
  description: '7. Create product type with wrong format in name in attribute definition draft',
  requestData: {
    payload: {
      'name': 'error test product type 1',
      'description': 'error test product type 1',
      'attributes': [
        {
          'type': {
            'name': 'text'
          },
          'name': 'error test wrong format in name',
          'label': {
            'en': 'error test wrong format in name'
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
