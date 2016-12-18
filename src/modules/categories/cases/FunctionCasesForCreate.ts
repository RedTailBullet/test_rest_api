import * as config from '../../../config'
import { TestSuite } from '../../../models'

let apiName = 'categories'
let basicUrl = `${config.CTP_BASEURL}/${apiName}`

const functionCasesForCreate: TestSuite = {
	description: 'Test suite 2: Function test for Create categories',
	setups: [
		{
      description: 'add name and slug',
			payload: {
				"name": {
					"de": "smartphone",
					"en": "smartphone"
				},
				"slug": {
					"de": "smartphone_slug_with_all_required_properties",
					"en": "smartphone_slug_with_all_required_properties"
				}
			}
		}
	],
	testCases: [
		{
			method: 'post',
			url: basicUrl,
			description: 'Test suite 2: Function test for Create categories',
			payload: {
				"name": {
					"de": "smartphone",
					"en": "smartphone"
				},
				"slug": {
					"de": "smartphone_slug_with_all_required_properties",
					"en": "smartphone_slug_with_all_required_properties"
				}
			},
			result: {
				expectedHttpCode: 201,
				expectedData: {
					"name": {
						"de": "smartphone",
						"en": "smartphone"
					},
					"slug": {
						"de": "smartphone_slug_with_all_required_properties",
						"en": "smartphone_slug_with_all_required_properties"
					}
				}
			}
		},
		{
			method: 'post',
			url: basicUrl,
			description: 'Create category with all required properties and all optional properties',
			payload: {
				"name": {
					"de": "smartphone",
					"en": "smartphone"
				},
				"slug": {
					"de": "smartphone_slug_with_all_properties",
					"en": "smartphone_slug_with_all_properties"
				},
				"parent": {
					"typeId": "category",
					"id": "f065f169-306a-45d8-8a6c-4ad8ab85690f"
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
					"name": {
						"de": "smartphone",
						"en": "smartphone"
					},
					"slug": {
						"de": "smartphone_slug_with_all_properties",
						"en": "smartphone_slug_with_all_properties"
					},
					"parent": {
						"typeId": "category",
						"id": "f065f169-306a-45d8-8a6c-4ad8ab85690f"
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
				}
			}
		}
	]
}

export default functionCasesForCreate
