
import { TestBase } from '../../../../../test_runners/models'
let s: TestBase = {
  description: 'Setup 3-1: Create category name \'smartphone\'',
  requestData: {
    payload: {
      "name": {
        "en": "en-smartphone_for_queryByID_function_test-1",
        "de": "de-smartphone_for_queryByID_function_test-1"
      },
      "slug": "en-smartphone_slug_for_queryByID_function_test-6"
    }
  }
}

export default s