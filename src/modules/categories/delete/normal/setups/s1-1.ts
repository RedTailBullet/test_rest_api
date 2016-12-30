import { TestBase } from '../../../../../models'

let s: TestBase = {
  description: 'Setup 1-1: Create function-test-Category-iphone-for-delete',
  requestData: {
    payload: {
      "name": {
        "en": "en-iphone_for_function_delete_test",
        "de": "de-iphone_for_function_delete_test"
      },
      "slug": "en-iphone_slug_for_function_delete_test"
    }
  }
}

export default s