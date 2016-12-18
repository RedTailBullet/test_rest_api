import { TestCase, TestSuite }  from '../models'
import callApi from './callRestApi'

export default async function (testCase: TestCase, testSuite: TestSuite) {
  if (!testCase.url) {
    testCase.url = testSuite.defaultUrl
  }

  if (testCase.config) {
    testCase.config(testSuite)
  }

  if (!testCase.method) {
    testCase.method = testSuite.testCaseMethod
  }
  
  return callApi(testCase)
}
