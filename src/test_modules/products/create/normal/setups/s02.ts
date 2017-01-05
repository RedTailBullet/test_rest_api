import { CaseSetup } from '../../../../../test_runners/models'

const s: CaseSetup = {
  description: 'Create category for normal test of product creation',
  requestData: {
    apiName: 'categories',
    payload: {
      name: {
        en: 'category for create product testing'
      },
      description: 'category for create product testing',
      slug: {
        en: 'category-for-create-product-testing'
      }
    }
  }
}

export default s
