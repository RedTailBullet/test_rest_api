
import { CaseSetup } from '../../../../../test_runners/models'
let s: CaseSetup = {
  description: 'Setup 2: Create the 2nd product type for delete normal test',
  requestData: {
    payload: {
      'name': 'function-test-product-type-for-delete-2',
      'description': 'function test product type for delete 2',
      'key': 'function-test-product-type-for-delete-2',
      'attributes': [
        {
          'type': {
            'name': 'ltext'
          },
          'name': 'function-test-attribute-definition-for-delete-2',
          'label': {
            'en': 'function test attribute definition for delete 2'
          },
          'isRequired': false,
          attributeConstraint: 'None',
          inputHint: 'SingleLine',
          isSearchable: true
        }
      ]
    }
  }
}

export default s
