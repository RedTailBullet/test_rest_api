import { expect } from 'chai'

import callApi from './call_api'
import setupSuite from './setup_suite'
import cleanSuite from './clean_suite'
import runCase from './run_case'
import * as config from '../config'
import { TestSuite } from '../models'
import reportError from './report_error'

import compare from './compare_results'

export default async function (apiName: string, testSuite: TestSuite) {

  let defaultUrl = `${config.CTP_BASEURL}${process.env[config.ENV_PROJECT_KEY_NAME]}/${apiName}`
  testSuite.defaultUrl = defaultUrl

  describe(testSuite.description, async function () {
    try {
      before(async function () {
        if (testSuite.setups) {
          await setupSuite(testSuite)
        }
      })

      execTestSuite(testSuite)

      after(async function () {
        if (testSuite.cleanups) {
          await cleanSuite(testSuite)
        }
      })
    } catch (error) {
      reportError(error)
    }
  })
}

function execTestSuite(testSuite: TestSuite) {
  testSuite.testCases.forEach(testCase => {
    let result = testCase.result
    it(testCase.description, async function () {
      try {
        let resp = await runCase(testCase, testSuite)
        testCase.result.actualData = resp.data
        expect(resp.status).to.equal(result.expectedHttpCode)
        expect(compare(resp.data, result.actualData)).to.be.true
      } catch (error) {
        reportError(error)
      }
    })
  })
}
