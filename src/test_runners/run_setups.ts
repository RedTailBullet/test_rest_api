import runSequentially from './utilities/run_sequentially'

async function runSetups (testCase) {
  await runSequentially(testCase.setups, testCase.setups)
}

export default runSetups
