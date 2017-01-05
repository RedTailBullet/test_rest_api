import { TestCase, TestSuite } from '../../../../models'

import testCases from './cases'

let testSuite: TestSuite = {
  description: 'Error test for product types delete',
  testCases: testCases,
  setupMethod: 'post',
  testCaseMethod: 'delete'
}

export default testSuite