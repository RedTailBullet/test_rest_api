import { TestCase, TestSuite } from '../../../../test_runners/models'

import testCases from './cases'

let suite: TestSuite = {
	description: 'Normal tests for category update',
  testCases: testCases,
	setupMethod: 'post',
	testCaseMethod: 'put'
}

export default suite
