import callAPI from './call_api'
import runSequentially from './run_sequentially'

import { TestBase, TestCase, CaseSetup, RequestData, HttpResult } from '../models'

import reportError from '../utilities/report_error'

let EMPTY_REQUEST: RequestData = {}

export default async function (testCase: TestCase) {
  const setups = testCase.setups
  if (setups) {
    let cleanups: TestBase[] = []
    setups.forEach((setup) => createCleanups(setup, cleanups))
    runSequentially(cleanups)
  }
}

function createCleanups(setup: CaseSetup, cleanups: TestBase[]) {
  let requestData = setRequest(setup)
  if (requestData === EMPTY_REQUEST) {
    const err = new Error(`Empty result in Setup: ${setup.description}`)
    reportError(err)
  } else {
    try {
      let testBase: TestBase = {
        description: "dummy",
        requestData
      }
      cleanups.unshift(testBase)
    }
    catch (error) {
      console.log(error, 'Error in cleanup, better to check it')
    }
  }
}

function setRequest(setup: CaseSetup) {
  let requestData: RequestData = {}
  let result = setup.result
  if (result && result.data) {
    requestData.method = 'delete'

    let setupUrl = setup.requestData.url
    requestData.url = `${setupUrl}/${result.data.id}`
    requestData.params = {
      version: result.data.version
    }
  }
  return requestData
}
