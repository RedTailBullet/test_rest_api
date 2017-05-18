import { TestCase } from '../../../../../test_runners/models'

const c: TestCase = {
	description: '1. Error test with no category in database',
	config: function (this: TestCase) {
		this.requestData.url = `${this.requestData.url}/xxxxxxxx-qqqqqqqq-dddddddd-aaaaaa`
	},
	requestData: {
		payload: {}
	},
	expectedResult: {
		httpCode: 404
	}
}

export default c