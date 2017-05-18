import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s1 from '../setups/s01'

const setups = [s1]

const c: TestCase = {
  description: '13. Add attribute definition with name shorter than 2',
  setups,
  config: function (this: TestCase) {
    const result = s1.result as HttpResult
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
          action: 'addAttributeDefinition',
          attribute: {
            type: {
              name: 'text'
            },
            name: '1',
            label: {
              en: 'name too short'
            },
            isRequired: false,
            attributeConstraint: 'None',
            inputHint: 'SingleLine',
            isSearchable: true
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
