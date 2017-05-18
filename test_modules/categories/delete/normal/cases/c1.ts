import { TestCase, HttpResult } from '../../../../../test_runners/models'
import s1 from '../setups/s1-1'

let setups = [s1]

const c: TestCase = {
	description: '1. Delete category \'iphone\' by id',
	config: function (this: TestCase) {
		let result = s1.result as HttpResult
		if (result && result.data) {
			this.requestData.url = `${this.requestData.url}/${result.data.id}`
		}
	},
	setups,
	requestData: {
		payload: {},
		params: {
			version: 0
		}
	},
	expectedResult: {
		httpCode: 200
	}
}

export default c