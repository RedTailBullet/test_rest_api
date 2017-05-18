import { CaseSetup, TestBase } from '../../../../../test_runners/models'
import * as config from '../../../../../test_runners/utilities/get_configs'

const s: CaseSetup = {
  description: 'Setup 1. Create product type.',
  config: function (this: TestBase) {
    let defaultUrl = config.getBasicUrl()
    this.requestData.url = `${defaultUrl}/${this.requestData.apiName}`
  },
  requestData: {
    apiName: 'product-types',
    method: "post",
    url: "",
    payload: {
      'name': 'fproduct type 2',
      'description': 'product type 2'
    }
  }
}

export default s
