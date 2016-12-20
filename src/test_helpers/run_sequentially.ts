import { TestBase } from '../models'
import runTestBase from './run_test_base'

// use the reduce pattern to call setups and cleanups sequentially
// the 2nd parameter is used by CaseSetup to config
export default function (array: TestBase[], setups?: TestBase[]) {
  let p = Promise.resolve()
  array.forEach(testBase => {
    p = p.then(()=> {
      return runTestBase(testBase, setups)
    })
  })  
  return Promise.all([p])
}