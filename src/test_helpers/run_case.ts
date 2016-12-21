import { expect } from 'chai'
import compare from './compare_results'

import { TestCase, HttpResult } from '../models'
import cleanCase from './clean_case'
import runSequentially from './run_sequentially'
import runTestBase from './run_test_base'

export default async function (testCase: TestCase) {

  if (testCase.setups) {
    await runSequentially(testCase.setups, testCase.setups)
  }
  await runTestBase(testCase)
  await cleanCase(testCase)
  compareResult(testCase)
}

function compareResult(testCase: TestCase) {
  let result = testCase.result as HttpResult
  let expectedResult = testCase.expectedResult as HttpResult
  expect(result.httpCode).to.equal(expectedResult.httpCode)
  compare(`${testCase.description} -> result's data`, result.data, (expectedResult.data))
}
