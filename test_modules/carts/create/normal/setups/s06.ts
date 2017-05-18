import { TestBase } from '../../../../../test_runners/models'
import * as config from '../../../../../test_runners/utilities/get_configs'

let s: TestBase = {
  description: "setup 6: Create taxCategory name 'Standard tax category test'",
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
          "name": "13.7% US",
          "amount": 0.137,
          "includedInPrice": false,
          "country": "US",
          "state": "Hawaii",
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
        }
      ]
    }
  }
}

export default s