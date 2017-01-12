import { TestCase, HttpResult } from '../../../../../test_runners/models'
import s01 from '../setups/s01'
import s02 from '../setups/s02'
import s03 from '../setups/s03'
import s04 from '../setups/s04'
import s05 from '../setups/s05'
import s06 from '../setups/s06'
import s07 from '../setups/s07'
import s08 from '../setups/s08'

let setups = [s01, s02, s03, s04, s05, s06, s07, s08] 

let testData = {
  "currency": "USD",
  "customerId": "id of customer",
  "country": "US",
  "inventoryMode": "TrackOnly",
  "taxMode": "Platform",
  "lineItems": [
    {
      "productId": "id of product",
      "variantId": 1,
      "quantity": 1
    }
  ],
  "shippingAddress": {
    "country": "US",
    "state": "Hawaii"
  },
  "billingAddress": {
    "country": "US",
    "state": "Hawaii"
  },
  "shippingMethod": {
    "typeId": "shipping-methods",
    "id": "id of shipping-methods"
  }
}

const c: TestCase = {
  description: 'Case 1. Create cart with all properties',
  setups,
  config: function (this: TestCase) {
    let expected = this.expectedResult as HttpResult

    if(s04.result && s04.result.data) {
      this.requestData.payload.customerId = s04.result.data['customer'].id
      s04.result.data.id = s04.result.data['customer'].id
      console.log('customerId---- ', this.requestData.payload.customerId)
    }

    if(s08.result && s08.result.data) {
      this.requestData.payload.lineItems[0].productId = s08.result.data.id
      console.log('productId---- ', this.requestData.payload.lineItems[0].productId)
    }

    if(s07.result && s07.result.data) {
      this.requestData.payload.shippingMethod.id = s07.result.data.id
      console.log('shippingMethod.id---- ', this.requestData.payload.shippingMethod.id)
    }
  },
  requestData: {
    payload: {
      ...testData
    }
  },
  expectedResult: {
    httpCode: 200,
  }
}

export default c