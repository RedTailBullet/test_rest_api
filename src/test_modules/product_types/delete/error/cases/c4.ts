import { TestCase, HttpResult, CaseSetup } from '../../../../../models'
import * as config from '../../../../../config'
import s1 from '../setups/s1'

const s: CaseSetup[] = [ s1 ]

const c: TestCase = {
  description: '4. Delete product type by id with non-exist id',
  setups: s,
  config: function (this: TestCase) {
    this.requestData.url = `${this.requestData.url}/00000000-xxxxxxxx-000000000-xxxxxxx`
  },
  requestData: {
    params: { version: 1 }
  },
  expectedResult: {
    httpCode: 404
  }
}

export default c
