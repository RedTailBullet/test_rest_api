import { CaseSetup } from '../../../../../models'

const s: CaseSetup = {
  description: 'Create customer group for normal test of product creation',
  requestData: {
    apiName: 'customer-groups',
    payload: {
      groupName: 'customer group for create product testing'
    }
  }
}

export default s
