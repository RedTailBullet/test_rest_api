import { TestCase, TestSuite } from '../../../../models'

import testCases from './cases'

let testSuite: TestSuite = {
  description: 'Normal test for inventory entry update',
  testCases: testCases,
  setupMethod: 'post',
  testCaseMethod: 'put'
}

export default testSuite
