import { TestCase } from '../../../../../test_runners/models'
let testData = {
	'name': {
		'de': 'de-smartphone_with_all_required_properties',
		'en': 'en-smartphone_with_all_required_properties'
	},
	'slug': 'en-smartphone_slug_with_all_required_properties'
}

const c: TestCase = {
	description: 'Case 1. Create category with all required properties',
	requestData: {
		payload: {
			...testData
		}
	},
	expectedResult: {
		httpCode: 200,
		data: {
			...testData,
			'id': '',
			'version': 0,
			'ancestors': [],
      'createdAt': '',
      'lastModifiedAt': ''
		}
	}
}

export default c