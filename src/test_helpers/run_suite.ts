
import callApi from './call_api'
import runCase from './run_case'
import * as config from '../config'
import { TestCase, TestSuite } from '../models'
import reportError from '../utilities/report_error'

export default async function (apiName: string, testSuite: TestSuite) {

  let projectName = process.env[config.ENV_PROJECT_KEY_NAME]
  let defaultUrl
  if (config.LOCAL_TEST) {
    defaultUrl = `${config.LOCAL_BASEURL}/${apiName}`
  } else {
    defaultUrl = `${config.CTP_BASEURL}/${projectName}/${apiName}`
  }
  testSuite.suiteUrl = defaultUrl

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
    })
  }

  if (!testCase.requestData.method) {
    testCase.requestData.method = testSuite.testCaseMethod
  }
}


