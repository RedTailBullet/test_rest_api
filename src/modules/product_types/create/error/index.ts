import { TestCase, TestSuite } from '../../../../models'

import testCases from './cases'

let testSuite: TestSuite = {
  description: 'Error test for product types creation',
  testCases: testCases,
  setupMethod: 'post',
  testCaseMethod: 'post'
}

export default testSuite
