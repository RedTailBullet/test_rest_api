import { TestCase, HttpResult } from '../../../../../test_runners/models'
import s1 from '../setups/s2-1'
import s2 from '../setups/s2-2'

let setups = [s1, s2]

const c: TestCase = {
  description: '2. Delete parent category \'smartphone\' by id',
  config: function (this: TestCase) {
    let result = s1.result as HttpResult
    if (result && result.data) {
      this.requestData.url = `${this.requestData.url}/${result.data.id}`
    }
  },
  setups,
  requestData: {
    payload: {},
    params: {
      version: 0
    }
  },
  expectedResult: {
    httpCode: 200
  }
}

export default c