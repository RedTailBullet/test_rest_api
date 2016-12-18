import { TestCase, TestSuite } from '../models'

import callApi from './callRestApi'
import runCase from './runCase'

export default async function (testSuite: TestSuite) {
  let setups = testSuite.setups
  if (setups) {
    setups.forEach(setup => {
      if (!setup.method) {
        setup.method = testSuite.setupMethod
      }

      runCase(setup, testSuite)
      .then((res) => {
        setup.result = res
      })
    })
  }
}
