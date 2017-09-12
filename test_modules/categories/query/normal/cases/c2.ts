import { TestCase, HttpResult } from '../../../../../test_runners/models'
import s1 from '../setups/s2-1'
import s2 from '../setups/s2-2'
let setups = [s1, s2]

const c: TestCase = {
	description: '2. Query category when 2 categories in database',
	setups,
	requestData: {
		payload: {}
	},
	expectedResult: {
		httpCode: 200
	}
}

export default c