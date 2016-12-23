
import { CaseSetup } from '../../../../../models'
let s: CaseSetup = {
  description: 'Setup 1: Create the 1st product for delete normal test',
  requestData: {
    payload: {
      'name': 'function-test-product-type-for-delete-1',
      'description': 'function test product type for delete 1',
      'key': 'function-test-product-type-for-delete-1',
      'attributes': [
        {
          'type': {
            'name': 'text'
          },
          'name': 'function-test-attribute-definition-for-delete-1',
          'label': {
            'en': 'function test attribute definition for delete 1'
          },
          'isRequired': true
        }
      ]
    }
  }
}

export default s
