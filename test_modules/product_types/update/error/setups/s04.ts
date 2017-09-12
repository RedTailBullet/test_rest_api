import { CaseSetup } from '../../../../../test_runners/models'

const s: CaseSetup = {
  description: '4. Create product type with lenum attribute for error test update product type',
  requestData: {
    payload: {
      name: 'product type for update error test',
      key: 'product-type-for-update-error-test',
      description: 'product type for update error test',
      attributes: [
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
          name: 'lenum-attribute-for-update-error-test',
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
