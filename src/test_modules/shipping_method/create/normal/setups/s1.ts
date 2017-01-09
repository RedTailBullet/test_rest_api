
import { TestBase } from '../../../../../test_runners/models'
import * as config from '../../../../../test_runners/utilities/get_configs'

let s: TestBase = {
  description: "setup 1: Create zone name 'Europe'",
  config: function (this: TestBase) {
    let defaultUrl = config.getBasicUrl()
    this.requestData.url = `${defaultUrl}/${this.requestData.apiName}`
  },
  requestData: {
    method: "post",
    apiName: 'zones',
    url: "",
    payload: {
      "name": "Europe-test-1",
      "description": "Europe",
      "locations": [
        { 
          "country": "FR",
          "state": "test-state-1" 
        },
        { 
          "country": "ES",
          "state": "test-state-2" 
        },
        {
          "country": "DE",
          "state": "test-state-3"
        },
        {
          "country": "IT",
          "state": "test-state-4"
        }
      ]
    }
  }
}

export default s