import { TestCase, TestSuite } from '../../../../models'

import testCases from './cases'

let suite: TestSuite = {
	description: 'Error tests for category query',
  testCases: testCases,
	setupMethod: 'post',
	testCaseMethod: 'get'
}

export default suite