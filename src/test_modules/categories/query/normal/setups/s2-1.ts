
import { TestBase } from '../../../../../models'
let s: TestBase = {
  description: 'Setup 2-1: Create category name \'smartphone\'',
  requestData: {
    payload: {
      "name": {
        "en": "en-smartphone_for_query_function_test-1",
        "de": "de-smartphone_for_query_function_test-1"
      },
      "slug": "en-smartphone_slug_for_query_function_test-1"
    }
  }
}

export default s