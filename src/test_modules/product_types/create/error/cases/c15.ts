import { TestCase } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '15. Create product type with no enum label in values while the type of the attribute definition draft is enum',
  requestData: {
    payload: {
      'name': 'error test product type 1',
      'description': 'error test product type 1',
      'attributes': [
        {
          'type': {
            'name': 'enum',
            'values': [
              {
                'key': 'key1'
              }
            ]
          },
          'name': 'error-test-no-label-in-values',
          'label': {
            'en': 'error test no label in values'
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
