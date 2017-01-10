import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s3 from '../setups/s03'

const setups = [s3]

const c: TestCase = {
  description: '45. Change the order of enum values with lacking enum value',
  setups,
  config: function (this: TestCase) {
    const result = s3.result as HttpResult
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
          action: 'setPlainEnumValueOrder',
          attributeName: 'enum-attribute-for-update-error-test',
          values: [
            {
              key: 'enumKey1',
              label: 'enumLabel1'
            },
            // {
            //   key: 'enumKey2',
            //   label: 'enumLabel2'
            // },
            {
              key: 'enumKey3',
              label: 'enumLabel3'
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
