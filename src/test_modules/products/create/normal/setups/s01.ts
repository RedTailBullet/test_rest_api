import { CaseSetup } from '../../../../../models'

const s: CaseSetup = {
  description: 'Create product type for normal test of product creation',
  requestData: {
    apiName: 'product-types',
    payload: {
      'name': 'function test product type 2',
      'description': 'function test product type 2'
    }
  }
}

export default s
