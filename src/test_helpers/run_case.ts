import { expect } from 'chai'
import compare from './compare_results'

import { TestCase, HttpResult, EntityProps, CaseSetup } from '../models'
import cleanCase from './clean_case'
import runSeqentially from './run_sequentially'
import runTestBase from './run_test_base'

export default async function (testCase: TestCase) {

  if (testCase.setups) {
    await runSeqentially(testCase.setups, testCase.setups)
  }
  await runTestBase(testCase)
  await cleanCase(testCase)
  compareResult(testCase)
}

function compareResult(testCase: TestCase) {
  let result = testCase.result as HttpResult
  expect(result.httpCode).to.equal((<HttpResult>testCase.expectedResult).httpCode)
  compare(testCase.description, result.data, (<HttpResult>testCase.expectedResult).data)
}