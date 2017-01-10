import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s4 from '../setups/s04'

const setups = [s4]

const c: TestCase = {
  description: '47. Change the order of localized enum values with lacking value',
  setups,
  config: function (this: TestCase) {
    const result = s4.result as HttpResult
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
          action: 'setLocalizedEnumValueOrder',
          attributeName: 'number-attribute-for-update-error-test',
          values: [
            // {
            //   key: 'lenumKey1',
            //   label: {
            //     en: 'lenumLabel1',
            //     zh_cn: '本地化枚举值1'
            //   }
            // },
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
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
