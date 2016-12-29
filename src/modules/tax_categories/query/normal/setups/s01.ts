import { CaseSetup } from '../../../../../models'

const s: CaseSetup = {
  description: '1. Create tax categories without subRate for query normal test',
  requestData: {
    payload: {
      name: 'tax categories for query normal test',
      description: 'tax categories for query normal test',
      rates: [
        {
          name: 'tax rate draft for query normal test',
          amount: 0.15,
          includedInPrice: false,
          country: 'US',
          state: 'Los Angeles'
        }
      ]
    }
  }
}

export default s
