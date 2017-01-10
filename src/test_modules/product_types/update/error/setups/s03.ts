import { CaseSetup } from '../../../../../test_runners/models'

const s: CaseSetup = {
  description: '3. Create product type with enum attribute for error test update product type',
  requestData: {
    payload: {
      name: 'product type for update error test',
      key: 'product-type-for-update-error-test',
      description: 'product type for update error test',
      attributes: [
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
          name: 'enum-attribute-for-update-error-test',
          label: {
            en: 'enum attribute for update error test',
            zh_cn: '更新错误测试用的enum attribute'
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
