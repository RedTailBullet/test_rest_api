import { CaseSetup, HttpResult } from '../../../../../test_runners/models'

const s: CaseSetup = {
  description: '6. Update product type to increase the version',
  config: function (this: CaseSetup, setups: CaseSetup[]) {
    const result = setups[0].result as HttpResult
    const data = result.data
    if (data) {
      this.requestData.url += `/${data.id}`
    }
  },
  requestData: {
    method: 'put',
    payload: {
      version: 0,
      actions: [
        {
          action: 'setName',
          name: 'nameChanged'
        }
      ]
    }
  }
}

export default s
