import { TestBase, HttpResult } from '../../../../../test_runners/models'

let s: TestBase = {
  description: 'Setup 2-2: Create function-test-Category-samsung-for-delete',
  config: function (this: TestBase, setups: TestBase[]) {
    let result = setups[0].result as HttpResult
    if (result && result.data) {
      this.requestData.payload.parent.id = `${result.data.id}`
    }
  },
  requestData: {
    payload: {
      "name": {
        "en": "en-samsung_for_function_delete_test",
        "de": "de-samsung_for_function_delete_test"
      },
      "slug": "en-samsung_slug_for_function_delete_test",
      "parent": {
        "typeId": "category",
        "id": 'id of smartphone'
      }
    }
  }
}

export default s