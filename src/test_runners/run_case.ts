import { expect } from 'chai'

import { TestCase } from './models'
import runCleanup from './clean_case'
import runSetups from './run_setups'
import runTestBase from './run_test_base'
import compareResult from './utilities/compare_result'

export default async function (testCase: TestCase) {
  describe(testCase.description, function () {

    if (testCase.setups) {
      before(`Setup for ${testCase.description}`, async function () {
        await runSetups(testCase)
      })
    }

    let description = getExpectedDataDescription(testCase)
    it(description, async function () {
      await runTestBase(testCase)
      compareResult(testCase)
    })

    after(`Cleanup for ${testCase.description}`, async function () {
      await runCleanup(testCase)
    })
  })
}

function getExpectedDataDescription(testCase) {
  if (testCase.expectedResult.description) {
    return testCase.expectedResult.description
  } else {
    return 'Should return correct httpCode and data'
  }
}
