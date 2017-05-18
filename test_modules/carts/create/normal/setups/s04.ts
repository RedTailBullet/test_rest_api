import { CaseSetup, TestBase } from '../../../../../test_runners/models'
import * as config from '../../../../../test_runners/utilities/get_configs'

const s: CaseSetup = {
  description: 'Setup 4. Create a customer.',
  config: function (this: TestBase, setups) {
    let defaultUrl = config.getBasicUrl()
    this.requestData.url = `${defaultUrl}/${this.requestData.apiName}`

    if(setups && setups[2].result) {
      let temp2 = setups[2].result
      if(temp2 && temp2.data){
        this.requestData.payload.customerGroup.id = temp2.data.id
      }
    }
  },
  requestData: {
    method: "post",
    url: "",
    apiName: 'customers',
    payload: {
      "email": "email12345@qq.com",
      "password": "password12345",
      "firstName": "firstName",
      "lastName": "lastName",
      "customerGroup": {
        "typeId": "customer-group",
        "id": ""
      }
    }
  }
}

export default s
