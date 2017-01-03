import { TestBase } from '../../../../../models'

let s: TestBase = {
  description: 'Setup 2-1: Create category name \'smartphone\' for delete',
  requestData: {
    payload: {
				"name": {
					"de": "en-smartphone_for_function_delete_test",
					"en": "en-smartphone_for_function_delete_test"
				},
				"slug": "en-smartphone_slug_for_delete_error_test"
    }
  }
}

export default s