import { TestCase, HttpResult } from '../../../../../test_runners/models'
import s1 from '../setups/s2-1'

let setups = [s1]

const c: TestCase = {
  description: '2. Delete category \'smartphone\' by id with wrong version',
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
      version: 10
    }
  },
  expectedResult: {
    httpCode: 409
  }
}

export default c