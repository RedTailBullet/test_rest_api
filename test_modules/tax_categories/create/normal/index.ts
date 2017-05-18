import { TestCase, TestSuite } from '../../../../test_runners/models'

import testCases from './cases'

let testSuite: TestSuite = {
  description: 'Normal test for tax categories creation',
  testCases: testCases,
  setupMethod: 'post',
  testCaseMethod: 'post'
}

export default testSuite
