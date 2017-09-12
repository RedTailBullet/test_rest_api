import { CaseSetup, TestBase } from '../../../../../test_runners/models'
import * as config from '../../../../../test_runners/utilities/get_configs'

const s: CaseSetup = {
  description: 'Setup 2. Create category.',
  config: function (this: TestBase) {
    let defaultUrl = config.getBasicUrl()
    this.requestData.url = `${defaultUrl}/${this.requestData.apiName}`
  },
  requestData: {
    method: "post",
    url: "",
    apiName: 'categories',
    payload: {
      "name": {
        "en": "category for create product testing"
      },
      "description": {
        "en": "category for create product testing"
      },
      "slug": {
        "en": "category-for-create-product-testing"
      }
    }
  }
}

export default s
