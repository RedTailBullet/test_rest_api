
import { TestBase } from '../../../../../test_runners/models'
let s: TestBase = {
  description: 'Setup 2-2: Create category name \'iphone\'',
  requestData: {
    payload: {
      "name": {
        "en": "en-iphone_for_query_function_test-1",
        "de": "de-iphone_for_query_function_test-1"
      },
      "slug": "en-iphone_slug_for_query_function_test-1"
    }
  }
}

export default s