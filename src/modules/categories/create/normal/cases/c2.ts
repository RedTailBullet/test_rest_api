
import { TestCase, HttpResult } from '../../../../../models'

let commonData2 = {
	"name": {
		"de": "de-smartphone_with_all_properties",
		"en": "en-smartphone_with_all_properties"
	},
	"slug": {
		"de": "de-smartphone_slug_with_all_properties",
		"en": "en-smartphone_slug_with_all_properties"
	},
	"parent": {
		"typeId": "category",
		"id": ""
	},
	"description": {
		"en": "en-Smartphone is more and more popular in world",
		"de": "de-Smartphone is more and more popular in world"
	},
	"orderHint": "0.00031481123037113502170356",
	"externalId": "1234567890QWERTYUIOP",
	"metaTitle": {
		"en": "en-smartphone",
		"de": "de-smartphone"
	},
	"metaDescription": {
		"en": "en-Smartphone is more and more popular in world",
		"de": "de-Smartphone is more and more popular in world"
	},
	"metaKeywords": {
		"en": "en-phone",
		"de": "de-phone"
	}
}

const c: TestCase = {
	description: 'Case 2: Create category with all required properties and all optional properties',

	config: function (this: TestCase, sources) {
		if (sources) {
			let result = sources[0].result as HttpResult
			this.requestData.payload.parent.id = `${result.data.id}`
			const er = this.expectedResult as HttpResult
			er.data.parent.id = `${result.data.id}`
			er.data.ancestors = [
				{
					typeId: 'category',
					id: `${result.data.id}`
				}
			]
		}
	},

	requestData: {
	  method: 'post',
		payload: {
			...commonData2
		}
	},
	expectedResult: {
		httpCode: 201,
		data: {
			...commonData2,
			"id": "",
			"version": 1,
			"lastMessageSequenceNumber": 1
		}
	}
}

export default c