import { CaseSetup } from '../../../../../test_runners/models'

const s: CaseSetup = {
  description: '5. Create product type with multiple attributes for error test update product type',
  requestData: {
    payload: {
      name: 'product type for update error test',
      key: 'product-type-for-update-error-test',
      description: 'product type for update error test',
      attributes: [
        {
          type: {
            name: 'number'
          },
          name: 'number-attribute-for-update-error-test',
          label: {
            en: 'number attribute for update error test',
            zh_cn: '更新错误测试用的number attribute'
          },
          isRequired: false,
          attributeConstraint: 'None',
          isSearchable: false
        }
      ]
    }
  }
}

export default s
