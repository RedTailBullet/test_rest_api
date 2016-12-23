import runSuite from './run_suite'
import { ModuleSuites } from '../models/module_suites'

export default function (ms: ModuleSuites) {
  describe(`Run module ${ms.apiName}`, function () {
    ms.suites.forEach(testSuite => {
      runSuite(ms.apiName, testSuite)
    })
  })
}