import { TestBase, CaseSetup, Cleanup, HttpResult } from '../models'

import callApi from './call_api'

// an uniform api to handle config for both test case and case setup
export default async function (testBase: TestBase, setups?: CaseSetup[]) {
  if (testBase.config) {
    testBase.config(setups)
  }

  let resp = await callApi(testBase.requestData)
  let tb = testBase // avoid IDE bug 
  if (!(tb instanceof Cleanup)) {

    let responseData: any = resp.data
    let result: HttpResult = {
      data: responseData,
      httpCode: resp.status
    }
    testBase.result = result
  }
}
