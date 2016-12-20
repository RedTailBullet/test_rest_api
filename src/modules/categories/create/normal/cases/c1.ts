import { TestCase } from '../../../../../models'
let commonData1 = {
	'name': {
		"de": "de-smartphone_with_all_required_properties",
		"en": "en-smartphone_with_all_required_properties"
	},
	"slug": {
		"de": "de-smartphone_slug_with_all_required_properties",
		"en": "en-smartphone_slug_with_all_required_properties"
	}
}

const c: TestCase = {
	description: 'Case 1. Create category with all required properties',
	requestData: {
		method: 'post',
		payload: {
			...commonData1
		}
	},
	expectedResult: {
		httpCode: 201,
		data: {
			"id": "",
			"version": 1,
			"ancestors": [],
			...commonData1
		}
	}
}

export default c