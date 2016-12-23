
import { TestBase } from '../../../../../models'
let s: TestBase = {
  description: 'Setup 18-1: Create category name \'smartphone\'',
  requestData: {
    payload: {
      "name": {
        "en": "en-smartphone_for_parent_typeId_error_test",
        "de": "de-smartphone_for_parent_typeId_error_test"
      },
      "slug": {
        "en": "en-smartphone_slug_for_parent_typeId_error_test",
        "de": "de-smartphone_slug_for_parent_typeId_error_test"
      }
    }
  }
}

export default s