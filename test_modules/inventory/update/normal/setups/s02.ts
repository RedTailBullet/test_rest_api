import { CaseSetup, HttpResult } from '../../../../../test_runners/models'

import s01 from './s01'

const s: CaseSetup = {
  description: 'Update a inventory entry add reserved quantity for update normal test',
  config: function (this: CaseSetup, setups) {
    let result = s01.result as HttpResult
    if (result.data) {
      this.requestData.url += `/${result.data.id}`
    }
  },
  requestData: {
    method: 'put',
    payload: {
      version: 0,
      actions: [
        {
          action: 'addReserved',
          addReservedQuantity: 50
        }
      ]
    }
  }
}

export default s
