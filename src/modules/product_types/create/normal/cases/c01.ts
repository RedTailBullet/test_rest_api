import { TestCase } from '../../../../../models'

const c: TestCase = {
  description: '1. Create product type with all properties',
  requestData: {
    payload: {
      'name': 'function-test-product-type-1',
      'key': 'function-test-product-type-1',
      'description': 'function test product type 1',
      'attributes': [
        {
          'type': {
            'name': 'text'
          },
          'name': 'function-test-attribute-definition-text',
          'label': {
            'en': 'function test attribute definition text'
          },
          'inputTip': {
            'en': 'nothing to input'
          },
          'isRequired': false,
          'attributeConstraint': 'Unique',
          'inputHint': 'MultiLine',
          'isSearchable': false
        },
        {
          'type': {
            'name': 'enum',
            'values': [
              {
                'key': 'enum-key1',
                'label': 'enum-label1'
              },
              {
                'key': 'enum-key2',
                'label': 'enum-label2'
              }
            ]
          },
          'name': 'function-test-attribute-definition-enum',
          'label': {
            'en': 'function test attribute definition enum'
          },
          'inputTip': {
            'en': 'nothing to input'
          },
          'isRequired': false,
          'attributeConstraint': 'Unique',
          'inputHint': 'SingleLine',
          'isSearchable': false
        },
        {
          'type': {
            'name': 'boolean'
          },
          'name': 'function-test-attribute-definition-boolean',
          'label': {
            'en': 'function test attribute definition boolean'
          },
          'inputTip': {
            'en': 'nothing to input'
          },
          'isRequired': true,
          'attributeConstraint': 'CombinationUnique',
          'inputHint': 'MultiLine',
          'isSearchable': true
        },
        {
          'type': {
            'name': 'ltext'
          },
          'name': 'function-test-attribute-definition-ltext',
          'label': {
            'en': 'function test attribute definition ltext'
          },
          'inputTip': {
            'en': 'this is an ltext'
          },
          'isRequired': false,
          'attributeConstraint': 'SameForAll',
          'inputHint': 'SingleLine',
          'isSearchable': true
        },
        {
          'type': {
            'name': 'lenum',
            'values': [
              {
                'key': 'lenum-key1',
                'label': {
                  'en': 'lenum-label1'
                }
              },
              {
                'key': 'lenum-key2',
                'label': {
                  'en': 'lenum-label2'
                }
              }
            ]
          },
          'name': 'function-test-attribute-definition-lenum',
          'label': {
            'en': 'function test attribute definition lenum'
          },
          'inputTip': {
            'en': 'this is lenum'
          },
          'isRequired': true,
          'attributeConstraint': 'None',
          'inputHint': 'MultiLine',
          'isSearchable': true
        },
        {
          'type': {
            'name': 'number'
          },
          'name': 'function-test-attribute-definition-number',
          'label': {
            'en': 'function test attribute definition number'
          },
          'inputTip': {
            'en': 'this is number'
          },
          'isRequired': false,
          'attributeConstraint': 'None',
          'inputHint': 'SingleLine',
          'isSearchable': false
        },
        {
          'type': {
            'name': 'money'
          },
          'name': 'function-test-attribute-definition-money',
          'label': {
            'en': 'function test attribute definition money'
          },
          'inputTip': {
            'en': 'this is money'
          },
          'isRequired': true,
          'attributeConstraint': 'SameForAll',
          'inputHint': 'SingleLine',
          'isSearchable': true
        },
        {
          'type': {
            'name': 'date'
          },
          'name': 'function-test-attribute-definition-date',
          'label': {
            'en': 'function test attribute definition date'
          },
          'inputTip': {
            'en': 'this is date'
          },
          'isRequired': false,
          'attributeConstraint': 'Unique',
          'inputHint': 'SingleLine',
          'isSearchable': true
        },
        {
          'type': {
            'name': 'time'
          },
          'name': 'function-test-attribute-definition-time',
          'label': {
            'en': 'function test attribute definition time'
          },
          'inputTip': {
            'en': 'this is time'
          },
          'isRequired': true,
          'attributeConstraint': 'CombinationUnique',
          'inputHint': 'MultiLine',
          'isSearchable': false
        },
        {
          'type': {
            'name': 'datetime'
          },
          'name': 'function-test-attribute-definition-datetime',
          'label': {
            'en': 'function test attribute definition datetime'
          },
          'inputTip': {
            'en': 'this is datetime'
          },
          'isRequired': false,
          'attributeConstraint': 'None',
          'inputHint': 'SingleLine',
          'isSearchable': false
        },
        {
          'type': {
            'name': 'reference',
            'referenceTypeId': 'product-type'
          },
          'name': 'function-test-attribute-definition-reference',
          'label': {
            'en': 'function test attribute definition reference'
          },
          'inputTip': {
            'en': 'this is reference'
          },
          'isRequired': true,
          'attributeConstraint': 'None',
          'inputHint': 'SingleLine',
          'isSearchable': true
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 201,
    data: {
      'id': 'd1604c66-0b46-48ca-9749-6059505b19a5',
      'version': 1,
      'name': 'function-test-product-type-1',
      'description': 'function test product type 1',
      'classifier': 'Complex',
      'attributes': [
        {
          'name': 'function-test-attribute-definition-text',
          'label': {
            'en': 'function test attribute definition text'
          },
          'inputTip': {
            'en': 'nothing to input'
          },
          'isRequired': false,
          'type': {
            'name': 'text'
          },
          'attributeConstraint': 'Unique',
          'isSearchable': false,
          'inputHint': 'MultiLine',
          'displayGroup': 'Other'
        },
        {
          'name': 'function-test-attribute-definition-enum',
          'label': {
            'en': 'function test attribute definition enum'
          },
          'inputTip': {
            'en': 'nothing to input'
          },
          'isRequired': false,
          'type': {
            'name': 'enum',
            'values': [
              {
                'key': 'enum-key1',
                'label': 'enum-label1'
              },
              {
                'key': 'enum-key2',
                'label': 'enum-label2'
              }
            ]
          },
          'attributeConstraint': 'Unique',
          'isSearchable': false,
          'inputHint': 'SingleLine',
          'displayGroup': 'Other'
        },
        {
          'name': 'function-test-attribute-definition-boolean',
          'label': {
            'en': 'function test attribute definition boolean'
          },
          'inputTip': {
            'en': 'nothing to input'
          },
          'isRequired': true,
          'type': {
            'name': 'boolean'
          },
          'attributeConstraint': 'CombinationUnique',
          'isSearchable': true,
          'inputHint': 'MultiLine',
          'displayGroup': 'Other'
        },
        {
          'name': 'function-test-attribute-definition-ltext',
          'label': {
            'en': 'function test attribute definition ltext'
          },
          'inputTip': {
            'en': 'this is an ltext'
          },
          'isRequired': false,
          'type': {
            'name': 'ltext'
          },
          'attributeConstraint': 'SameForAll',
          'isSearchable': true,
          'inputHint': 'SingleLine',
          'displayGroup': 'Other'
        },
        {
          'name': 'function-test-attribute-definition-lenum',
          'label': {
            'en': 'function test attribute definition lenum'
          },
          'inputTip': {
            'en': 'this is lenum'
          },
          'isRequired': true,
          'type': {
            'name': 'lenum',
            'values': [
              {
                'key': 'lenum-key1',
                'label': {
                  'en': 'lenum-label1'
                }
              },
              {
                'key': 'lenum-key2',
                'label': {
                  'en': 'lenum-label2'
                }
              }
            ]
          },
          'attributeConstraint': 'None',
          'isSearchable': true,
          'inputHint': 'MultiLine',
          'displayGroup': 'Other'
        },
        {
          'name': 'function-test-attribute-definition-number',
          'label': {
            'en': 'function test attribute definition number'
          },
          'inputTip': {
            'en': 'this is number'
          },
          'isRequired': false,
          'type': {
            'name': 'number'
          },
          'attributeConstraint': 'None',
          'isSearchable': false,
          'inputHint': 'SingleLine',
          'displayGroup': 'Other'
        },
        {
          'name': 'function-test-attribute-definition-money',
          'label': {
            'en': 'function test attribute definition money'
          },
          'inputTip': {
            'en': 'this is money'
          },
          'isRequired': true,
          'type': {
            'name': 'money'
          },
          'attributeConstraint': 'SameForAll',
          'isSearchable': true,
          'inputHint': 'SingleLine',
          'displayGroup': 'Other'
        },
        {
          'name': 'function-test-attribute-definition-date',
          'label': {
            'en': 'function test attribute definition date'
          },
          'inputTip': {
            'en': 'this is date'
          },
          'isRequired': false,
          'type': {
            'name': 'date'
          },
          'attributeConstraint': 'Unique',
          'isSearchable': true,
          'inputHint': 'SingleLine',
          'displayGroup': 'Other'
        },
        {
          'name': 'function-test-attribute-definition-time',
          'label': {
            'en': 'function test attribute definition time'
          },
          'inputTip': {
            'en': 'this is time'
          },
          'isRequired': true,
          'type': {
            'name': 'time'
          },
          'attributeConstraint': 'CombinationUnique',
          'isSearchable': false,
          'inputHint': 'MultiLine',
          'displayGroup': 'Other'
        },
        {
          'name': 'function-test-attribute-definition-datetime',
          'label': {
            'en': 'function test attribute definition datetime'
          },
          'inputTip': {
            'en': 'this is datetime'
          },
          'isRequired': false,
          'type': {
            'name': 'datetime'
          },
          'attributeConstraint': 'None',
          'isSearchable': false,
          'inputHint': 'SingleLine',
          'displayGroup': 'Other'
        },
        {
          'name': 'function-test-attribute-definition-reference',
          'label': {
            'en': 'function test attribute definition reference'
          },
          'inputTip': {
            'en': 'this is reference'
          },
          'isRequired': true,
          'type': {
            'name': 'reference',
            'referenceTypeId': 'product-type'
          },
          'attributeConstraint': 'None',
          'isSearchable': true,
          'inputHint': 'SingleLine',
          'displayGroup': 'Other'
        }
      ],
      'key': 'function-test-product-type-1',
      'createdAt': '2016-12-09T05:56:41.419Z',
      'lastModifiedAt': '2016-12-09T05:56:41.419Z'
    }
  }
}

export default c
