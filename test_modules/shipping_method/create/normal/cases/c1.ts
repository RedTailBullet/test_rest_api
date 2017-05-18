import { TestCase, HttpResult } from '../../../../../test_runners/models'
import s1 from '../setups/s1'
import s2 from '../setups/s2'
import s3 from '../setups/s3'
import s4 from '../setups/s4'

let setups = [s1, s2, s3, s4]

let testData = {
  "name": "CNYT",
  "taxCategory": {
    "typeId": "tax-category",
    "id": "Standard tax category test"
  },
  "isDefault": false,
  "zoneRates": [
    {
      "zone": {
        "typeId": "zone",
        "id": "Europe"
      },
      "shippingRates": [
        {
          "price": {
            "currencyCode": "EUR",
            "centAmount": 1000
          }
        },
        {
          "price": {
            "currencyCode": "USD",
            "centAmount": 1200
          }
        }
      ]
    },
    {
      "zone": {
        "typeId": "zone",
        "id": "US-Hawaii-and-Alaska"
      },
      "shippingRates": [
        {
          "price": {
            "currencyCode": "EUR",
            "centAmount": 3000
          }
        },
        {
          "price": {
            "currencyCode": "USD",
            "centAmount": 3400
          }
        }
      ]
    },
    {
      "zone": {
        "typeId": "zone",
        "id": "US-Mainland"
      },
      "shippingRates": [
        {
          "price": {
            "currencyCode": "EUR",
            "centAmount": 2000
          }
        },
        {
          "price": {
            "currencyCode": "USD",
            "centAmount": 2400
          }
        }
      ]
    }
  ]
}

const c: TestCase = {
	description: 'Case 1. Create shipping method with all required properties',
	setups,
  config: function (this: TestCase) {

    let expected = this.expectedResult as HttpResult

    let result3 = setups[3].result as HttpResult
    if(result3.data && expected.data){
      this.requestData.payload.taxCategory.id = result3.data.id
      expected.data['taxCategory'].id = result3.data.id
    }

    let result0 = setups[0].result as HttpResult
    if(result0.data && expected.data){
      this.requestData.payload.zoneRates[0].zone.id = result0.data.id
      expected.data['zoneRates'][0].zone.id = result0.data.id
    }

    let result1 = setups[1].result as HttpResult
    if(result1.data && expected.data){
      this.requestData.payload.zoneRates[1].zone.id = result1.data.id
      expected.data['zoneRates'][1].zone.id = result1.data.id
    }

    let result2 = setups[2].result as HttpResult
    if(result2.data && expected.data){
      this.requestData.payload.zoneRates[2].zone.id = result2.data.id
      expected.data['zoneRates'][2].zone.id = result2.data.id
    }
  },
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