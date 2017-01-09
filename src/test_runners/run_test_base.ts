import { TestBase, CaseSetup, Cleanup, HttpResult } from './models'

import callApi from './utilities/call_api'

// an uniform api to handle config for both test case and case setup
export default async function (testBase: TestBase, setups?: CaseSetup[]) {
  if (testBase.config) {
    testBase.config(setups)
  }

  let resp = await callApi(testBase.requestData)
  let tb = testBase // avoid IDE bug
  if (testBase['exceptedResults']) {
    if (resp.status !== testBase['exceptedResults'].httpCode) {
      logError(resp)
    }
  } else if (resp.status !== 200 && !(tb instanceof Cleanup)) {
    logError(resp)
  }
  if (!(tb instanceof Cleanup)) {
    let responseData: any = resp.data
    let result: HttpResult = {
      data: responseData,
      httpCode: resp.status
    }
    testBase.result = result
  }
}

function logError(resp) {
  console.log(`status: ${resp.data.status}`)
  console.log(`message: ${resp.data.message}`)
  console.log('--------------------------')
}
