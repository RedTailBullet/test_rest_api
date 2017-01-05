import { TestCase, HttpResult, CaseSetup } from '../../../../../models'
import * as config from '../../../../../config'
import s1 from '../setups/s1'

const s: CaseSetup[] = [ s1 ]

const c: TestCase = {
  description: '1. Delete product type by key with wrong key',
  setups: s,
  config: function (this: TestCase) {
    this.requestData.url = `${this.requestData.url}/key=error-test-product-type`
  },
  requestData: {
    params: { version: 1 }
  },
  expectedResult: {
    httpCode: 404
  }
}

export default c
