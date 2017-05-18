import { TestCase, TestSuite } from '../../../../test_runners/models'

import testCases from './cases'

let testSuite: TestSuite = {
  description: 'Normal test for inventory entry query',
  testCases: testCases,
  setupMethod: 'post',
  testCaseMethod: 'get'
}

export default testSuite
