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
              en:  'w99g93760qEMnb9gCL6wiYNhNxxxX7oDltmPQJPjG1Pacv5NSS49xQw024qtlsAVGujIwHfTx61smygmKP51PCknDDejinB1MJBCwMEmQ5ouSn4ozUPHqh6SrJgUfFInfJI7HGYacKsAVR1BPEw26JfLqNHwXiBzq2qe7988fnBxt3GLvFbgrr2Si3OdzegTP5alDXMBx6V8jxJI94uHstaGJmBOsEpGWvP14OcmhI4JEYJ2zOcdWe5PbWDiZaabq2A8'
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
