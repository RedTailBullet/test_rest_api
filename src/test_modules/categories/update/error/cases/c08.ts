import { TestCase, HttpResult } from '../../../../../test_runners/models'
import s3 from '../setups/s03'
import s1 from '../setups/s01'

const setups = [s1, s3]

const c: TestCase = {
  description: '7. Change parent no id',
  setups,
  config: function (this: TestCase) {
    let result = s3.result as HttpResult
    let data = result.data
    if (data) {
      this.requestData.url += `/${data.id}`
    }
  },
  requestData: {
    payload: {
      version: 0,
      actions: [
        {
          action: 'setParent',
          parent: {
            typeId: 'category'
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
