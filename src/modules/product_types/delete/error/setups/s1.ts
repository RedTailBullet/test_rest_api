import { CaseSetup } from '../../../../../models'

let s: CaseSetup = {
  description: 'Setup 1: Create the product type for delete error test',
  requestData: {
    payload: {
      name: 'error-test-product-type-for-delete',
      description: 'error test product type for delete',
      key: 'error-test-product-type-for-delete',
      attributes: [
        {
          type: {
            name: 'text'
          },
          name: 'error-test-attribute-definition-for-delete',
          label: {
            en: 'error test attribute definition for delete'
          },
          isRequired: true
        }
      ]
    }
  }
}

export default s
