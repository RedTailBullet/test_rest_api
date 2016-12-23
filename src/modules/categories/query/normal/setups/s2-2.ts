
import { TestBase } from '../../../../../models'
let s: TestBase = {
  description: 'Setup 2-2: Create category name \'iphone\'',
  requestData: {
    payload: {
      "name": {
        "en": "en-iphone_for_query_function_test",
        "de": "de-iphone_for_query_function_test"
      },
      "slug": {
        "en": "en-iphone_slug_for_query_function_test",
        "de": "de-iphone_slug_for_query_function_test"
      }
    }
  }
}

export default s