import callAPI from './callRestApi'
import runCase from './runCase'
import { TestSuite }from '../models'

export default async function (testSuite: TestSuite) {
  const cleanups = testSuite.cleanups

  cleanups.forEach( cleanup => {
    if (!cleanup.method) {
      cleanup.method = 'delete'
    }

    runCase(cleanup, testSuite)
    .then(resp => {
      cleanup.result = resp
    })
  })
}