import { CaseSetup, HttpResult } from '../../../../../models'

import s01 from './s01'

const s: CaseSetup = {
  description: 'Update a inventory entry add reserved quantity for update error test',
  config: function (this: CaseSetup, setups) {
    let result = s01.result as HttpResult
    if (result.data) {
      this.requestData.url += `/${result.data.id}`
    }
  },
  requestData: {
    payload: {
      version: 1,
      actions: [
        {
          action: 'addReservedQuantity',
          addReservedQuantity: 2
        }
      ]
    }
  }
}

export default s
