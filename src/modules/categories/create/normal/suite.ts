import { TestCase, TestSuite } from '../../../models'

import testCases from './cases'

let suite: TestSuite = {
	description: 'Function test for Creating categories',
	setupMethod: 'post',
	testCaseMethod: 'post',
  testCases: testCases,
	setups: [
		{
			method: 'post',
			description: 'Setup 1: Create category name smartphone with all required properties for function test',
			payload: {
				"name": {
					"de": "smartphone",
					"en": "smartphone"
				},
				"slug": {
					"de": "smartphone_slug",
					"en": "smartphone_slug"
				}
			}
		}
	],
	cleanups: [
		{
			method: 'delete',
			description: '1. Clean up testcases 1',
			config: function (this: TestCase, testSuite: TestSuite) {
				this.url = `${testSuite.defaultUrl}/${testSuite.testCases[0].result.actualData.id}`
			},
			params: {'version': 1}
		},
		{
			method: 'delete',
			description: '2. Clean up testcases 2',
			config: function (this: TestCase, testSuite: TestSuite) {
				this.url = `${testSuite.defaultUrl}/${testSuite.testCases[1].result.actualData.id}`
			},
			params: {'version': 1}
		}, 
		{
			method: 'delete',
			description: '3: Clean up setup 1',
			config: function (this: TestCase, testSuite: TestSuite) {
				if (testSuite.setups) {
					this.url = `${testSuite.defaultUrl}/${testSuite.setups[0].result.id}`
				}
			},
			params: {'version': 1}
		},
	]
}

export default suite
