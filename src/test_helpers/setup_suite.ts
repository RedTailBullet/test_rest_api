import { TestCase, TestSuite } from '../models'

import callApi from './call_api'
import runCase from './run_case'

export default async function (testSuite: TestSuite) {
  let setups = testSuite.setups
  if (setups) {
    setups.forEach(async function (setup) {
      if (!setup.method) {
        setup.method = testSuite.setupMethod
      }

      const resp = await runCase(setup, testSuite)
      setup.result = resp.data
    })
  }
}
