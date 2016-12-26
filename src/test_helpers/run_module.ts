import runSuite from './run_suite'
import { ModuleSuites } from '../models/module_suites'

export default function (ms: ModuleSuites) {
  describe(`Run module ${ms.apiName}`, function () {
    ms.suites.forEach(testSuite => {
      if (!testSuite.apiName) {
        testSuite.apiName = ms.apiName
      }
      runSuite(testSuite)
    })
  })
}