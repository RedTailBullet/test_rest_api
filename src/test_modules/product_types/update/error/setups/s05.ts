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
            name: 'text'
          },
          name: 'text-attribute-for-update-error-test-text',
          label: {
            en: 'text attribute for update error test text',
            zh_cn: '更新错误测试用的text attribute text'
          },
          isRequired: false,
          attributeConstraint: 'None',
          inputHint: 'SingleLine',
          isSearchable: true
        },
        {
          type: {
            name: 'number'
          },
          name: 'number-attribute-for-update-error-test-number',
          label: {
            en: 'number attribute for update error test number',
            zh_cn: '更新错误测试用的number attribute number'
          },
          isRequired: false,
          attributeConstraint: 'None',
          isSearchable: false
        },
        {
          type: {
            name: 'ltext',
          },
          name: 'number-attribute-for-update-error-test-ltext',
          label: {
            en: 'number attribute for update error test ltext',
            zh_cn: '更新错误测试用的enum attribute ltext'
          },
          isRequired: true,
          attributeConstraint: 'CombinationUnique',
          isSearchable: true
        }
      ]
    }
  }
}

export default s
