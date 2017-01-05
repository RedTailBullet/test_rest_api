import { TestCase } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '18. Create product type with wrong language tag in label in attribute definition draft',
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
            '中文': 'error test wrong inputHint'
          },
          'isRequired': true,
          'inputHint': 'SingleLine'
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
