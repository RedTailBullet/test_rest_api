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
            en: 'text attribute for update error test',
            zh_cn: '更新错误测试用的text attribute'
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
            en: 'number attribute for update error test',
            zh_cn: '更新错误测试用的number attribute'
          },
          isRequired: false,
          attributeConstraint: 'None',
          isSearchable: false
        },
        {
          type: {
            name: 'enum',
            values: [
              {
                key: 'enumKey1',
                label: 'enumLabel1'
              },
              {
                key: 'enumKey2',
                label: 'enumLabel2'
              },
              {
                key: 'enumKey3',
                label: 'enumLabel3'
              }
            ]
          },
          name: 'number-attribute-for-update-error-test-enum',
          label: {
            en: 'number attribute for update error test',
            zh_cn: '更新错误测试用的enum attribute'
          },
          isRequired: true,
          attributeConstraint: 'CombinationUnique',
          isSearchable: true
        },
        {
          type: {
            name: 'lenum',
            values: [
              {
                key: 'lenumKey1',
                label: {
                  en: 'lenumLabel1',
                  zh_cn: '本地化枚举值1'
                }
              },
              {
                key: 'lenumKey2',
                label: {
                  en: 'lenumLabel2',
                  zh_cn: '本地化枚举值2'
                }
              },
              {
                key: 'lenumKey3',
                label: {
                  en: 'lenumLabel3',
                  zh_cn: '本地化枚举值3'
                }
              }
            ]
          },
          name: 'lenum-attribute-for-update-error-test-lenum',
          label: {
            en: 'lenum attribute for update error test',
            zh_cn: '更新错误测试用的enum attribute'
          },
          isRequired: false,
          attributeConstraint: 'CombinationUnique',
          isSearchable: false
        }
      ]
    }
  }
}

export default s
