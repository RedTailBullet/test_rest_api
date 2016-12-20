import { TestBase } from '../models'
import runTestBase from './run_test_base'

// use the reduce pattern to call test cases and setups sequentially
// the 2nd parameter is used by CaseSetup to config
export default async function (array: TestBase[], setups?: TestBase[]) {
  // the p will be re-assigned in the reduce 
  let p = Promise.resolve()

  array.reduce(
    (p, setup) => {
      p.then(() => {
        return runTestBase(setup, setups)
      })
      return p
    },
    p
  )
  // make sure everything is done
  await p 
}