import { TestCase } from '../../../../../models'
let testData = {
	'name': {
		'de': 'de-smartphone_with_all_required_properties',
		'en': 'en-smartphone_with_all_required_properties'
	},
	'slug': {
		'de': 'de-smartphone_slug_with_all_required_properties',
		'en': 'en-smartphone_slug_with_all_required_properties'
	}
}

const c: TestCase = {
	description: 'Case 1. Create category with all required properties',
	requestData: {
		payload: {
			...testData
		}
	},
	expectedResult: {
		httpCode: 201,
		data: {
			...testData,
			'id': '',
			'version': 1,
			'ancestors': []
		}
	}
}

export default c