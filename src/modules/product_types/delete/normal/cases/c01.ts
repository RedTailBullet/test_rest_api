import { TestCase, HttpResult, CaseSetup } from '../../../../../models'
import s01 from '../setups/s01'

const s: CaseSetup[] = [ s01 ]

const c: TestCase = {
  description: '1. Delete product type by id',
  config: function (this: TestCase) {
    let result = s01.result as HttpResult
    if (result.data) {
      this.requestData.url = `${this.requestData.url}/${result.data.id}`
    }
  },
  setups: s,
  requestData: {
    params: { version: 1 }
  },
  expectedResult: {
    httpCode: 200,
    data: {
      'id': '2cba3d03-58e3-4dff-a703-a5a6eced4969',
      'version': 1,
      'name': 'function-test-product-type-for-delete-1',
      'description': 'function test product type for delete 1',
      'classifier': 'Complex',
      'attributes': [
        {
          'name': 'function-test-attribute-definition-for-delete-1',
          'label': {
            'en': 'function test attribute definition for delete 1'
          },
          'isRequired': true,
          'type': {
            'name': 'text'
          },
          'attributeConstraint': 'None',
          'isSearchable': true,
          'inputHint': 'SingleLine',
          'displayGroup': 'Other'
        }
      ],
      'key': 'function-test-product-type-for-delete-1',
      'createdAt': '2016-12-13T08:28:11.741Z',
      'lastModifiedAt': '2016-12-13T08:28:11.741Z'
    }
  }
}

export default c
