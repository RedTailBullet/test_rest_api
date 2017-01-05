import { TestCase } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '11. Create product type with no \'isRequired\' in attribute definition draft',
  requestData: {
    payload: {
      'name': 'error test product type 1',
      'description': 'error test product type 1',
      'attributes': [
        {
          'type': {
            'name': 'text'
          },
          'name': 'error-test-no-isRequired',
          'label': {
            'en': 'error test no isRequired'
          }
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
