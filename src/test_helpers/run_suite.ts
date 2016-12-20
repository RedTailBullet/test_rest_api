import { expect } from 'chai'

import callApi from './call_api'
import runCase from './run_case'
import * as config from '../config'
import { TestCase, TestSuite, HttpResult } from '../models'
import reportError from '../utilities/report_error'

import compare from './compare_results'

export default async function (apiName: string, testSuite: TestSuite) {

  let defaultUrl = `${config.CTP_BASEURL}${process.env[config.ENV_PROJECT_KEY_NAME]}/${apiName}`
  testSuite.suiteUrl = defaultUrl

  describe(testSuite.description, function () {
    try {
      testSuite.testCases.forEach(testCase => {
        setupCaseRequest(testCase, testSuite)
        it(testCase.description, async function () {
          console.log(`run case at: ${Date.now().toLocaleString()}`)
          await runCase(testCase)
          compareResult(testCase)
        })
      })
    } catch (error) {
      reportError(error)
    }
  })
}

function setupCaseRequest(testCase: TestCase, testSuite: TestSuite) {
  if (!testCase.requestData.url) {
    testCase.requestData.url = testSuite.suiteUrl
  }
  if (!testCase.requestData.method) {
    testCase.requestData.method = testSuite.testCaseMethod
  }
}

function compareResult(testCase: TestCase) {
  let result = testCase.result as HttpResult
  expect(result.httpCode).to.equal((<HttpResult>testCase.expectedResult).httpCode)
  expect(compare(result.data, (<HttpResult>testCase.expectedResult).data)).to.be.true
}

