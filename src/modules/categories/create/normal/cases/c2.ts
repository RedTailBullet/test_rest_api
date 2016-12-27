
import { TestCase, HttpResult } from '../../../../../models'
import s1 from '../setups/s1'
let setups = [s1]
let commonData = {
  'name': {
    'de': 'de-smartphone_with_all_properties',
    'en': 'en-smartphone_with_all_properties'
  },
  'slug': {
    'de': 'de-smartphone_slug_with_all_properties',
    'en': 'en-smartphone_slug_with_all_properties'
  },
  'parent': {
    'typeId': 'category',
    'id': ''
  },
  'description': {
    'en': 'en-Smartphone is more and more popular in world',
    'de': 'de-Smartphone is more and more popular in world'
  },
  'orderHint': '0.0003148112303713502170356',
  'externalId': '1234567890QWERTYUIOP',
  'metaTitle': {
    'en': 'en-smartphone',
    'de': 'de-smartphone'
  },
  'metaDescription': {
    'en': 'en-Smartphone is more and more popular in world',
    'de': 'de-Smartphone is more and more popular in world'
  },
  'metaKeywords': {
    'en': 'en-phone',
    'de': 'de-phone'
  }
}

const c: TestCase = {
  description: 'Case 2: Create category with all required properties and all optional properties',
  setups,
  config: function (this: TestCase) {
    const result = s1.result as HttpResult
    const expected = this.expectedResult as HttpResult
    if (result.data && expected.data) {
      this.requestData.payload.parent.id = `${result.data.id}`

      expected.data['parent'].id = `${result.data.id}`
      expected.data['ancestors'] = [
        {
          typeId: 'category',
          id: `${result.data.id}`
        }
      ]
    }
  },
  requestData: {
    payload: {
      ...commonData
    }
  },
  expectedResult: {
    httpCode: 200,
    data: {
      ...commonData,
      'id': '',
      'version': 0,
      'lastMessageSequenceNumber': 1,
      'orderHint': '',
      'createdAt': '',
      'lastModifiedAt': ''
    }
  }
}

export default c