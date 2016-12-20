import { TestCase, HttpResult, EntityProps, CaseSetup } from '../models'
import callApi from './call_api'
import runSeqentially from './run_sequentially' 
import runTestBase from './run_test_base'

export default async function (testCase: TestCase) {

  if (testCase.setups) {
    setup(testCase)
  }

  let resp = await runTestBase(testCase)
  let responseData = JSON.parse(resp.data)

  let result: HttpResult = {
    data: responseData as EntityProps,
    httpCode: resp.status
  }
  testCase.result = result
}

// setup must run sequentially 
function setup(testCase: TestCase) {
  // use the reduce pattern to call test cases sequentially
  let setups = testCase.setups
  if (setups) {
    runSeqentially(setups, setups)
  }
}
