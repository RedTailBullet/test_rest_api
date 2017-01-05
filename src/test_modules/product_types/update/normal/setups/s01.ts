import { CaseSetup } from '../../../../../models'

let s: CaseSetup = {
  description: 'Setup 1: Create the product type for update normal test',
  requestData: {
    payload: {
      'name': 'normal test product type for update',
      'key': 'normal-test-product-type-for-update',
      'description': 'normal test product type for update',
      'attributes': [
        {
          'type': {
            'name': 'text'
          },
          'name': 'normal-test-attribute-definition-text',
          'label': {
            'en': 'normal test attribute definition text'
          },
          'isRequired': true
        },
        {
          'type': {
            'name': 'enum',
            'values': [
              {
                'key': 'key1',
                'label': 'label1'
              },
              {
                'key': 'key2',
                'label': 'label2'
              },
              {
                'key': 'key3',
                'label': 'label3'
              }
            ]
          },
          'name': 'normal-test-attribute-definition-enum',
          'label': {
            'en': 'normal test attribute definition enum'
          },
          'isRequired': false
        },
        {
          'type': {
            'name': 'lenum',
            'values': [
              {
                'key': 'lenumKey1',
                'label': {
                  'en': 'lenumLabel1'
                }
              },
              {
                'key': 'lenumKey2',
                'label': {
                  'en': 'lenumLabel2'
                }
              }
            ]
          },
          'name': 'normal-test-attribute-definition-lenum',
          'label': {
            'en': 'normal test attribute definition lenum'
          },
          'isRequired': true
        }
      ]
    }
  }
}

export default s
