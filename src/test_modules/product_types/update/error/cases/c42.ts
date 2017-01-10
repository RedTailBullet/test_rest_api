import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s4 from '../setups/s04'

const setups = [s4]

const c: TestCase = {
  description: '42. Add localized enum with value of plain enum value',
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
          action: 'addLocalizedEnumValue',
          attributeName: 'lenum-attribute-for-update-error-test',
          value: {
            key: 'keyAdded',
            label: 'labelAdded'
          }
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
