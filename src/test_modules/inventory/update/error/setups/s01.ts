import { CaseSetup } from '../../../../../test_runners/models'

const s: CaseSetup = {
  description: 'Create an inventory entry for update error test',
  requestData: {
    payload: {
      sku: 'Inventory entry sku for update error test',
      quantityOnStock: 10,
      restockableInDays: 10,
      expectedDelivery: '2017-01-01T06:00:00.000Z'
    }
  }
}

export default s
