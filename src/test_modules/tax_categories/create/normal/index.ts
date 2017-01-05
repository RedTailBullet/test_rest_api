import { TestCase, TestSuite } from '../../../../models'

import testCases from './cases'

let testSuite: TestSuite = {
  description: 'Normal test for tax categories creation',
  testCases: testCases,
  setupMethod: 'post',
  testCaseMethod: 'post'
}

export default testSuite
