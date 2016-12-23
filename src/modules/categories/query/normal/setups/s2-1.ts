
import { TestBase } from '../../../../../models'
let s: TestBase = {
  description: 'Setup 2-1: Create category name \'smartphone\'',
  requestData: {
    payload: {
      "name": {
        "en": "en-smartphone_for_query_function_test",
        "de": "de-smartphone_for_query_function_test"
      },
      "slug": {
        "en": "en-smartphone_slug_for_query_function_test",
        "de": "de-smartphone_slug_for_query_function_test"
      }
    }
  }
}

export default s