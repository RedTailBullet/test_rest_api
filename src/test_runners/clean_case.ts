import callAPI from './utilities/call_api'
import runSequentially from './utilities/run_sequentially'
import * as config from './utilities/get_configs'

import { Cleanup, TestCase, TestBase, RequestData, HttpResult } from './models'

import reportError from './utilities/report_error'

export default async function (testCase: TestCase) {
  let cleanups: Cleanup[] = []
  const setups = testCase.setups
  if (setups) {
    setups.forEach((setup) => createCleanups(setup, cleanups))
  }

  createCleanups(testCase, cleanups)
  await runSequentially(cleanups)
}

// we covert CaseSetup and TestCase to Cleanup so not save result on API call
function createCleanups(testBase: TestBase, cleanups: Cleanup[]) {
  let result = testBase.result as HttpResult
  let base = testBase
  if (result.httpCode !== 404) {
    if (!result.data) {
      // const err = new Error(`Empty result in Test Case: ${testBase.description}`)
      // reportError(err)
    } else {
      try {
        let requestData = setRequest(testBase)
        let cleanup: Cleanup = new Cleanup("dummy", requestData)
        cleanups.unshift(cleanup)
      }
      catch (error) {
        console.log(error, 'Error in cleanup, better to check it')
      }
    }
  }
}

function setRequest(testBase: TestBase) {
  let requestData: RequestData = {}
  let result = testBase.result

  if (result && result.data && !isEmptyObject(result.data)) {
    requestData.method = 'delete'

    let setupUrl = `${config.getBasicUrl()}/${testBase.requestData.apiName}`
    requestData.url = `${setupUrl}/${result.data.id}`
    requestData.params = {
      version: result.data.version
    }
  }
  return requestData
}

function isEmptyObject(object) {
  if (Object.keys(object).length === 0) {
    return true
  }
  return false
}
