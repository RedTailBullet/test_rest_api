import { expect } from 'chai'
import compare from './compare_results'

import { TestCase, HttpResult } from '../models'
import cleanCase from './clean_case'
import runSequentially from './run_sequentially'
import runTestBase from './run_test_base'

export default async function (testCase: TestCase) {

  let setups = testCase.setups
  try {
    if (setups) {
      await runSequentially(setups, setups)
    }

    await runTestBase(testCase)

    // should compare immediately after running TestCases to avoid cleanup errors
    compareResult(testCase)

  } finally {
    // the last step
    await cleanCase(testCase)
  }
}

function compareResult(testCase: TestCase) {
  let result = testCase.result as HttpResult
  let expectedResult = testCase.expectedResult as HttpResult

  expect(result.httpCode).to.equal(expectedResult.httpCode)

  let expectedData = expectedResult.data
  if (expectedData) {
    compare(`${testCase.description} > result's data`, expectedData, result.data)
  }
}
