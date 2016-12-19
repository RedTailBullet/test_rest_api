import * as request from 'axios'
import { TestCase } from '../models'
import * as config from '../config'

async function runTestSuit(testCase: TestCase): Promise<Axios.AxiosXHR<string>> {
  let options: Axios.AxiosXHRConfig<string> = {
    url: testCase.url as string,
    headers: { 'Content-Type': 'application/json' }
  }

  if (testCase.payload) {
    options.data = testCase.payload
  }

  if (!testCase.method) {
    testCase.method = 'get'
  }

  options.method = testCase.method

  if (testCase.params) {
    options.params = testCase.params
  }

  return request(options)
}

export default runTestSuit
