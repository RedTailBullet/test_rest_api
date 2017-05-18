import { CaseSetup } from '../../../../../test_runners/models'

const s: CaseSetup = {
  description: '1. Create product type with text attribute for error test update product type',
  requestData: {
    payload: {
      name: 'product type for update error test',
      key: 'product-type-for-update-error-test',
      description: 'product type for update error test',
      attributes: [
        {
          type: {
            name: 'text'
          },
          name: 'text-attribute-for-update-error-test',
          label: {
            en: 'text attribute for update error test',
            zh_cn: '更新错误测试用的text attribute'
          },
          isRequired: false,
          attributeConstraint: 'None',
          inputHint: 'SingleLine',
          isSearchable: true
        }
      ]
    }
  }
}

export default s
