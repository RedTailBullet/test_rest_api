import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s5 from '../setups/s05'

const setups = [s5]

const c: TestCase = {
  description: '43. Change order of attributeDefinitions with lacking attribute',
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
                name: 'ltext',
              },
              name: 'number-attribute-for-update-error-test-ltext',
              label: {
                en: 'number attribute for update error test ltext',
                zh_cn: '更新错误测试用的enum attribute number'
              },
              isRequired: true,
              attributeConstraint: 'CombinationUnique',
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
