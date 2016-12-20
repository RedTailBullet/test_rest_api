import { TestBase, CaseSetup } from '../models'

import callApi from './call_api'

// an uniform api to handle config for both test case and case setup
export default async function (testBase: TestBase, setups?: CaseSetup[]) {
  if (testBase.config) {
    testBase.config(setups)
  }
  return callApi(testBase.requestData)    
}
