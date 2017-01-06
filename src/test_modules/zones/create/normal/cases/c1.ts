import { TestCase } from '../../../../../test_runners/models'
let testData = {
  "name": "Asia",
  "description": "The future is Asia", 
  "locations": [
    {
      "country": "CN",
      "state": "Beijing"
    },
    {
      "country": "CN",
      "state": "Guangdong"
    },
    {
      "country": "KR"
    },
    {
      "country": "JP",
      "state": "Tokyo"
    },
    {
      "country": "CN"
    }
  ]
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
      'createdAt': '',
      'lastModifiedAt': ''
		}
	}
}

export default c