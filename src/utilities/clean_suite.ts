import callAPI from './call_api'
import runCase from './run_case'
import { TestSuite } from '../models'

import reportError from './report_error'

export default async function (testSuite: TestSuite) {
  const cleanups = testSuite.cleanups

  cleanups.forEach(async function (cleanup) {
    if (!cleanup.method) {
      cleanup.method = 'delete'
    }
    
    try {
      await runCase(cleanup, testSuite)
    } catch (error) {
      reportError(error)
    }
  })
}