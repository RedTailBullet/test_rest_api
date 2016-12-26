import { TestCase, HttpResult, CaseSetup } from '../../../../../models'
import s02 from '../setups/s02'

const s: CaseSetup[] = [
  s02
]

const c: TestCase = {
  description: '2. Delete product type by key',
  config: function (this: TestCase) {
    this.requestData.url = `${this.requestData.url}/key=${s02.requestData.payload.key}`
  },
  setups: s,
  requestData: {
    params: { version: 1 }
  },
  expectedResult: {
    httpCode: 200,
    data: {
      'id': '86159859-b730-4ca5-88d8-021821ee06ea',
      'version': 1,
      'name': 'function-test-product-type-for-delete-2',
      'description': 'function test product type for delete 2',
      'classifier': 'Complex',
      'attributes': [
        {
          'name': 'function-test-attribute-definition-for-delete-2',
          'label': {
            'en': 'function test attribute definition for delete 2'
          },
          'isRequired': false,
          'type': {
            'name': 'ltext'
          },
          'attributeConstraint': 'None',
          'isSearchable': true,
          'inputHint': 'SingleLine',
          'displayGroup': 'Other'
        }
      ],
      'key': 'function-test-product-type-for-delete-2',
      'createdAt': '2016-12-13T08:31:23.558Z',
      'lastModifiedAt': '2016-12-13T08:31:23.558Z'
    }
  }
}

export default c
