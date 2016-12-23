import { TestCase, TestSuite } from '../../../../models'

import testCases from './cases'

let suite: TestSuite = {
	description: 'Error tests for category deletion',
  testCases: testCases,
	setupMethod: 'post',
	testCaseMethod: 'post'
}

export default suite

