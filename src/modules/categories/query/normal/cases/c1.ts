import { TestCase } from '../../../../../models'

const c: TestCase = {
	description: '1. Query categories with no category in database',
	requestData: {
		payload: {}
	},
	expectedResult: {
		httpCode: 200
	}
}

export default c