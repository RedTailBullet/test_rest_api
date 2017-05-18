import { TestCase, TestSuite } from '../../../../test_runners/models'

import testCases from './cases'

let suite: TestSuite = {
	description: 'Normal tests for category query',
  testCases: testCases,
	setupMethod: 'post',
	testCaseMethod: 'get'
}

export default suite
