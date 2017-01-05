import { TestBase } from '../models'
import runTestBase from '../run_test_base'

export default async function (array: TestBase[], setups?: TestBase[]) {
  for(let testBase of array) {
    await runTestBase(testBase, setups)
  }
}
