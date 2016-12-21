
import { CaseSetup } from '../../../../../models'
let s: CaseSetup = {
  description: 'Setup 1: Create category name smartphone with all required properties for function test',
  requestData: {
    payload: {
      "name": {
        "de": "smartphone",
        "en": "smartphone"
      },
      "slug": {
        "de": "smartphone_slug",
        "en": "smartphone_slug"
      }
    }
  }
}

export default s