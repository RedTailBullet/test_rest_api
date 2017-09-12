import { TestBase } from '../../../../../test_runners/models'

let s: TestBase = {
  description: 'Setup 2-1: Create parent category name smartphone for function delete',
  requestData: {
    payload: {
      "name": {
        "en": "en-smartphone_for_function_delete_test",
        "de": "de-smartphone_for_function_delete_test"
      },
      "slug": "en-smartphone_slug_for_function_delete_test"
    }
  }
}

export default s