
import callApi from './call_api'
import runCase from './run_case'
import * as config from '../utilities/get-configs'
import { TestCase, TestSuite } from '../models'
import reportError from '../utilities/report_error'

export default async function (testSuite: TestSuite) {

  const apiName = testSuite.apiName
  let defaultUrl = config.getBasicUrl()
  testSuite.suiteUrl = `${defaultUrl}/${apiName}`

  describe(testSuite.description, function () {
    try {
      testSuite.testCases.forEach(testCase => {
        setupCaseRequest(testCase, testSuite)
        it(testCase.description, function () {
          return runCase(testCase)
        })
      })
    } catch (error) {
      reportError(error)
    }
  })
}

// should set case url, setup url, and their methods
function setupCaseRequest(testCase: TestCase, testSuite: TestSuite) {
  if (!testCase.requestData.url) {
    testCase.requestData.url = testSuite.suiteUrl
  }
  if (testCase.setups) {
    testCase.setups.forEach(setup => {
      if (!setup.requestData.url) {
        setup.requestData.url = testSuite.suiteUrl
      }
      if (!setup.requestData.method) {
        setup.requestData.method = testSuite.setupMethod
      }
      if (!setup.apiName) {
        setup.apiName = testSuite.apiName
      }
    })
  }

  if (!testCase.requestData.method) {
    testCase.requestData.method = testSuite.testCaseMethod
  }
  if (!testCase.apiName) {
    testCase.apiName = testSuite.apiName
  }
}


