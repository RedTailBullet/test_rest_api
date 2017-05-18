
import { TestBase } from '../../../../../test_runners/models'
let s: TestBase = {
  description: 'Setup 1: Create category name smartphone with all required properties for function test',
  requestData: {
    payload: {
      "name": {
        "de": "smartphone",
        "en": "smartphone"
      },
      "slug": "en-smartphone_slug"
    }
  }
}

export default s