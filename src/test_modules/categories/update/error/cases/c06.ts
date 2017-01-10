import { TestCase, HttpResult } from '../../../../../test_runners/models'
import s3 from '../setups/s03'
import s2 from '../setups/s02'
import s1 from '../setups/s01'

const setups = [s1, s2, s3]

const c: TestCase = {
  description: '6. Change parent with wrong type id',
  setups,
  config: function (this: TestCase) {
    let result = s3.result as HttpResult
    let data = result.data
    if (data) {
      this.requestData.url += `/${data.id}`
    }
    result = s1.result as HttpResult
    data = result.data
    if (data) {
      this.requestData.payload.actions[0].parent.id = data.id
    }
  },
  requestData: {
    payload: {
      version: 0,
      actions: [
        {
          action: 'setParent',
          parent: {
            typeId: 'product-type',
            id: ''
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
