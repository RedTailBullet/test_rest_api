import { TestCase, HttpResult } from '../../../../../test_runners/models'

import s1 from '../setups/s01'

const setups = [s1]

const c: TestCase = {
  description: '18. Add attribute definition with label length 257',
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
            name: 'label-too-long',
            label: {
              en:  'whdKG1PGIpT5XlhXr03nvc0XmQ2WDstLgSapxTbph1Bq97bYdBQLC7ZBKmGqUdF2IQzKP7Wob8U7z4UoJBzy3QPl63EXO9zN3NjfSrHzBWTYDUEMDkBUgmfEIhDjsUFnLXvOWQHjnEThcaXl2N7hcmqpBdMovCaht1sMBp6hBLXgCmvszSVb537K7k5pS6vJJKFB4cma5XOVNn2BKXqtPxGxSpdeC4CTtOl3wFMBgXFQaDncgIDaH5e7JMIBDomOs'
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
