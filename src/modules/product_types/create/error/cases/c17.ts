import { TestCase } from '../../../../../models'

const c: TestCase = {
  description: '17. Create product type with wrong inputHint in attribute definition',
  requestData: {
    payload: {
      'name': 'error test product type 1',
      'description': 'error test product type 1',
      'attributes': [
        {
          'type': {
            'name': 'text'
          },
          'name': 'error-test-wrong-inputHint',
          'label': {
            'en': 'error test wrong inputHint'
          },
          'isRequired': true,
          'inputHint': 'nothing to input'
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
