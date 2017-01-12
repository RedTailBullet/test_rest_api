import { CaseSetup } from '../../../../../test_runners/models'

const s: CaseSetup = {
  description: 'Create product type for normal test of product creation',
  requestData: {
    apiName: 'product-types',
    payload: {
      'name': 'function test product type',
      'description': 'function test product type'
    }
  }
}

export default s
