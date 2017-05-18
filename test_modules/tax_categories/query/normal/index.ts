import { TestCase, TestSuite } from '../../../../test_runners/models'

import testCases from './cases'

let testSuite: TestSuite = {
  description: 'Normal test for tax categories query',
  testCases: testCases,
  setupMethod: 'post',
  testCaseMethod: 'get'
}

export default testSuite
