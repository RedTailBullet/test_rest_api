import { TestCase, HttpResult } from '../../../../../models'

let setups = []

const c: TestCase = {
	description: '1. Delete category \'iphone\' by wrong \'id\' value',
	config: function (this: TestCase) {
		this.requestData.url = `${this.requestData.url}/00000000-xxxxxxxx-000000000-xxxxxxx`
	},
	requestData: {
		payload: {},
		params: {
			version: 0
		},
	},
	expectedResult: {
		httpCode: 404
	}
}

export default c