import { TestCase, TestSuite } from '../../../../models'

import testCases from './cases'

let testSuite: TestSuite = {
  description: 'Normal test for tax categories query',
  testCases: testCases,
  setupMethod: 'post',
  testCaseMethod: 'get'
}

export default testSuite
