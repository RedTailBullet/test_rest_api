
import { TestCase, TestSuite } from '../../../models'

let cases:TestCase[] = [
	{
		method: 'post',
		description: 'Case 1. Create category with all required properties',
		payload: {
			"name": {
				"de": "smartphone_with_all_required_properties",
				"en": "smartphone_with_all_required_properties"
			},
			"slug": {
				"de": "smartphone_slug_with_all_required_properties",
				"en": "smartphone_slug_with_all_required_properties"
			}
		},
		result: {
			expectedHttpCode: 201,
			expectedData: {
				"id": "",
				"version": 1,
				"name": {
					"de": "smartphone_with_all_required_properties",
					"en": "smartphone_with_all_required_properties"
				},
				"slug": {
					"de": "smartphone_slug_with_all_required_properties",
					"en": "smartphone_slug_with_all_required_properties"
				},
				"ancestors": []
			}
		}
	},
	{
		method: 'post',
		description: 'Case 2: Create category with all required properties and all optional properties',
		config: function (this: TestCase, testSuite: TestSuite) {
			if (testSuite.setups) {
				this.payload.parent.id = `${testSuite.setups[0].result.id}`,
					this.result.expectedData.parent.id = `${testSuite.setups[0].result.id}`
				this.result.expectedData.ancestors = [
					{
						typeId: 'category',
						id: `${testSuite.setups[0].result.id}`
					}
				]
			}
		},
		payload: {
			"name": {
				"de": "smartphone_with_all_properties",
				"en": "smartphone_with_all_properties"
			},
			"slug": {
				"de": "smartphone_slug_with_all_properties",
				"en": "smartphone_slug_with_all_properties"
			},
			"parent": {
				"typeId": "category",
				"id": ""
			},
			"description": {
				"en": "Smartphone is more and more popular in world",
				"de": "Smartphone is more and more popular in world"
			},
			"orderHint": "0.00031481123037113502170356",
			"externalId": "1234567890QWERTYUIOP",
			"metaTitle": {
				"en": "smartphone",
				"de": "smartphone"
			},
			"metaDescription": {
				"en": "Smartphone is more and more popular in world",
				"de": "Smartphone is more and more popular in world"
			},
			"metaKeywords": {
				"en": "phone",
				"de": "phone"
			}
		},
		result: {
			expectedHttpCode: 201,
			expectedData: {
				"id": "",
				"version": 1,
				"name": {
					"de": "smartphone_with_all_properties",
					"en": "smartphone_with_all_properties"
				},
				"slug": {
					"de": "smartphone_slug_with_all_properties",
					"en": "smartphone_slug_with_all_properties"
				},
				"description": {
					"en": "Smartphone is more and more popular in world",
					"de": "Smartphone is more and more popular in world"
				},
				"ancestors": [],
				"parent": {
					"typeId": "category",
					"id": ""
				},
				"externalId": "1234567890QWERTYUIOP",
				"metaTitle": {
					"en": "smartphone",
					"de": "smartphone"
				},
				"metaKeywords": {
					"en": "phone",
					"de": "phone"
				},
				"metaDescription": {
					"en": "Smartphone is more and more popular in world",
					"de": "Smartphone is more and more popular in world"
				},
				"lastMessageSequenceNumber": 1
			}
		}
	}
]

export default cases