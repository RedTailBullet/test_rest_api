
import { TestBase } from '../../../../../test_runners/models'
import * as config from '../../../../../test_runners/utilities/get_configs'

let s: TestBase = {
  description: "setup 3: Create zone name 'US Hawaii and Alaska'",
  config: function (this: TestBase) {
    let defaultUrl = config.getBasicUrl()
    this.requestData.url = `${defaultUrl}/${this.requestData.apiName}`
  },
  requestData: {
    method: "post",
    apiName: 'zones',
    url: "",
    payload: {
      "name": "US Hawaii and Alaska-test-1",
      "description": "US Hawaii and Alaska",
      "locations": [
        {
          "country": "US",
          "state": "test-state-6"
        },
        {
          "country": "US",
          "state": "test-state-7"
        }
      ]
    }
  }
}

export default s