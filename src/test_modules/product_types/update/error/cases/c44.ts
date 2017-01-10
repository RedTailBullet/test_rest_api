import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s5 from '../setups/s05'

const setups = [s5]

const c: TestCase = {
  description: '44. Change order of attributeDefinitions with some fields in attribute wrong',
  setups,
  config: function (this: TestCase) {
    const result = s5.result as HttpResult
    const data = result.data
    if (data) {
      this.requestData.url += `/${data.id}`
    }
  },
  requestData: {
    payload: {
      version: 0,
      actions: [
        {
          action: 'setAttributeOrder',
          attributes: [
            {
              type: {
                name: 'number'
              },
              name: 'number-attribute-for-update',                    // wrong field, should be number-attribute-for-update-error-test-number
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
                zh_cn: '更新错误测试用的enum attribute number'            // wrong field, should be 更新错误测试用的enum attribute ltext
              },
              isRequired: true,
              attributeConstraint: 'CombinationUnique',
              isSearchable: true
            },
            {
              type: {
                name: 'text'
              },
              name: 'text-attribute-for-update-error-test-text',
              label: {
                en: 'text attribute for update error test text',
                zh_cn: '更新错误测试用的text attribute text'
              },
              isRequired: true,                                         // wrong field, should be false
              attributeConstraint: 'None',
              inputHint: 'SingleLine',
              isSearchable: true
            }
          ]
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
