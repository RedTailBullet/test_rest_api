import runSuite from './run_suite'
import { TestSuite } from '../models'

export function runSuites (apiName: string, testSuites: TestSuite[]) {
  testSuites.forEach(testSuite => {
    describe(testSuite.description, function () {
      runSuite(apiName, testSuite)
    })
  })
}