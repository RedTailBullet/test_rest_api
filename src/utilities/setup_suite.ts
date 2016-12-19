import { TestCase, TestSuite } from '../models'

import callApi from './call_api'
import runCase from './run_case'
import reportError from './report_error'

export default async function (testSuite: TestSuite) {
  let setups = testSuite.setups
  if (setups) {
    setups.forEach(async function (setup) {
      if (!setup.method) {
        setup.method = testSuite.setupMethod
      }

      try {
        const resp = await runCase(setup, testSuite)
        setup.result = resp.data
      }
      catch (error) {
        reportError(error)
      }
    })
  }
}
