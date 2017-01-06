
import { TestBase } from '../../../../../test_runners/models'
import * as config from '../../../../../test_runners/utilities/get_configs'

let s: TestBase = {
  description: "setup 4: Create taxCategory name 'Standard tax category test'",
  config: function (this: TestBase) {
    let defaultUrl = config.getBasicUrl()
    this.requestData.url = `${defaultUrl}/${this.requestData.apiName}`
  },
  requestData: {
    method: "post",
    apiName: 'tax-categories',
    url: "",
    payload: {
      "name": "Standard tax category test",
      "description": "Standard tax category test",
      "rates": [
        {
          "name": "13.7% US Mainland",
          "amount": 0.137,
          "includedInPrice": false,
          "country": "US",
          "rate": [
            {
              "name": "salesTaxRate",
              "amount": "0.087"
            },
            {
              "name": "otherTaxRate",
              "amount": "0.05"
            }
          ]
        },
        {
          "name": "12.7% US Hawaii",
          "amount": 0.127,
          "includedInPrice": false,
          "country": "US",
          "state": "Hawaii"
        },
        {
          "name": "10.7% US Alaska",
          "amount": 0.107,
          "includedInPrice": false,
          "country": "US",
          "state": "Alaska"
        },
        {
          "name": "19% DE",
          "amount": 0.19,
          "includedInPrice": true,
          "country": "DE"
        },
        {
          "name": "20% FR",
          "amount": 0.19,
          "includedInPrice": true,
          "country": "FR"
        },
        {
          "name": "21% ES",
          "amount": 0.19,
          "includedInPrice": true,
          "country": "ES"
        },
        {
          "name": "22% IT",
          "amount": 0.19,
          "includedInPrice": true,
          "country": "IT"
        }
      ]
    }
  }
}

export default s