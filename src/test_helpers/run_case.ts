import { TestCase, HttpResult, EntityProps, CaseSetup } from '../models'
import callApi from './call_api'
import runSeqentially from './run_sequentially'
import runTestBase from './run_test_base'

export default async function (testCase: TestCase) {

  if (testCase.setups) {
    before('case setup', function () {
      return setup(testCase)
    })
  }

  before('run case', function() {
    runTestBase(testCase)
  })
}

// setup must run sequentially 
function setup(testCase: TestCase) {
  // use the reduce pattern to call test cases sequentially
  let setups = testCase.setups
  if (setups) {
    return runSeqentially(setups, setups)
  }

  return Promise.resolve()
}
