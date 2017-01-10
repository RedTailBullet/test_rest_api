import { TestCase, TestSuite } from '../../../../test_runners/models'

import testCases from './cases'

let testSuite: TestSuite = {
  description: 'Error test for product types update',
  testCases: testCases,
  setupMethod: 'post',
  testCaseMethod: 'put'
}

export default testSuite
