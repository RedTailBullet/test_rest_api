
import { TestBase } from '../../../../../test_runners/models'
import * as config from '../../../../../test_runners/utilities/get_configs'

let s: TestBase = {
  description: "setup 2: Create zone name \'US Mainland\'",
  config: function (this: TestBase) {
    let defaultUrl = config.getBasicUrl()
    this.requestData.url = `${defaultUrl}/${this.requestData.apiName}`
  },
  requestData: {
    method: "post",
    apiName: 'zones',
    url: "",
    payload: {
      "name": "US Mainland-test-1",
      "description": "US Mainland",
      "locations": [
        { 
          "country": "US",
          "state": "test-state-5" 
        }
      ]
    }
  }
}

export default s