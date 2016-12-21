import runSuite from './run_suite'
import { ModuleSuites } from '../models/module_suites'

export default function (ms: ModuleSuites) {
  ms.suites.forEach(testSuite => {
    describe(`Run module ${ms.apiName}`, function () {
      runSuite(ms.apiName, testSuite)
    })
  })
}