import { TestCase, TestSuite } from '../../../../test_runners/models'

import testCases from './cases'

let suite: TestSuite = {
	description: 'Error tests for international update',
  testCases: testCases,
	setupMethod: 'post',
	testCaseMethod: 'put'
}

export default suite
