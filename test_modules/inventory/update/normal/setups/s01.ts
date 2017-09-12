import { CaseSetup } from '../../../../../test_runners/models'

const s: CaseSetup = {
  description: 'Create an inventory entry for update normal test',
  requestData: {
    payload: {
      sku: 'Inventory entry sku for update normal test',
      quantityOnStock: 200,
      restockableInDays: 20,
      expectedDelivery: '2017-01-01T06:00:00.000Z'
    }
  }
}

export default s
