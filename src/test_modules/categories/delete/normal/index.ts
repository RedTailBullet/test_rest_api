import { TestCase, TestSuite } from '../../../../test_runners/models'

import testCases from './cases'

let suite: TestSuite = {
	description: 'Normal tests for category deletion',
  testCases: testCases,
	setupMethod: 'post',
	testCaseMethod: 'delete'
}

export default suite

