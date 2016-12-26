import { TestCase, TestSuite } from '../../../../models'

import testCases from './cases'

let testSuite: TestSuite = {
  description: 'Normal test for product types update',
  testCases: testCases,
  setupMethod: 'post',
  testCaseMethod: 'post'
}

export default testSuite
