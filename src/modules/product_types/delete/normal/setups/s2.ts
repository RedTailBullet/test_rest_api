
import { CaseSetup } from '../../../../../models'
let s: CaseSetup = {
  description: 'Setup 2: Create the 2nd product for delete normal test',
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
          'isRequired': false
        }
      ]
    }
  }
}

export default s
