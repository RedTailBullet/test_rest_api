import callAPI from './call_api'
import runSequentially from './run_sequentially'

import { Cleanup, TestCase, TestBase, RequestData } from '../models'

import reportError from '../utilities/report_error'

let EMPTY_REQUEST: RequestData = {}

export default async function (testCase: TestCase) {
  let cleanups: Cleanup[] = []
  const setups = testCase.setups
  if (setups) {
    setups.forEach((setup) => createCleanups(setup, cleanups))
  }
  
  createCleanups(testCase, cleanups)
  return runSequentially(cleanups)
}

// we covert CaseSetup and TestCase to Cleanup so not save result on API call
function createCleanups(testBase: TestBase, cleanups: Cleanup[]) {
  let requestData = setRequest(testBase)
  if (requestData === EMPTY_REQUEST) {
    const err = new Error(`Empty result in Setup: ${testBase.description}`)
    reportError(err)
  } else {
    try {
      let testBase: Cleanup = new Cleanup("dummy", requestData)
      cleanups.unshift(testBase)
    }
    catch (error) {
      console.log(error, 'Error in cleanup, better to check it')
    }
  }
}

function setRequest(testBase: TestBase) {
  let requestData: RequestData = {}
  let result = testBase.result
  if (result && result.data) {
    requestData.method = 'delete'

    let setupUrl = testBase.requestData.url
    requestData.url = `${setupUrl}/${result.data.id}`
    requestData.params = {
      version: result.data.version
    }
  }
  return requestData
}
