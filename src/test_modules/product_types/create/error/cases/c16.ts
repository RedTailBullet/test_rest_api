import { TestCase } from '../../../../../models'

const c: TestCase = {
  description: '16. Create product type with wrong constraint in attributeConstraint in attribute definition',
  requestData: {
    payload: {
      'name': 'error test product type 1',
      'description': 'error test product type 1',
      'attributes': [
        {
          'type': {
            'name': 'text'
          },
          'name': 'error-test-wrong-attributeConstraint',
          'label': {
            'en': 'error test wrong attributeConstraint'
          },
          'isRequired': true,
          'attributeConstraint': 'no constraint'
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
