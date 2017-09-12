import { CaseSetup, TestBase } from '../../../../../test_runners/models'
import * as config from '../../../../../test_runners/utilities/get_configs'

const s: CaseSetup = {
  description: "setup 7: Create shipping method",
  config: function (this: TestBase, setups) {
    let defaultUrl = config.getBasicUrl()
    this.requestData.url = `${defaultUrl}/${this.requestData.apiName}`

    if (setups && setups[5].result) {
      let temp5 = setups[5].result
      if (temp5 && temp5.data) {
        this.requestData.payload.taxCategory.id = temp5.data.id
      }
    }

    if (setups && setups[4].result) {
      let temp4 = setups[4].result
      if (temp4 && temp4.data) {
        this.requestData.payload.zoneRates[0]['zone'].id = temp4.data.id
      }
    }
  },
  requestData: {
    method: "post",
    apiName: 'shipping-methods',
    url: "",
    payload: {
      "name": "CN-SF",
      "taxCategory": {
        "typeId": "tax-category",
        "id": "Standard tax category test"
      },
      "isDefault": false,
      "zoneRates": [
        {
          "zone": {
            "typeId": "zone",
            "id": "US"
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
  }
}

export default s