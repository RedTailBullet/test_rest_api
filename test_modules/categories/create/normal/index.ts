import { TestCase, TestSuite } from '../../../../test_runners/models'

import testCases from './cases'

let suite: TestSuite = {
	description: 'Normal tests for category creation',
  testCases: testCases,
	setupMethod: 'post',
	testCaseMethod: 'post'
}

export default suite
