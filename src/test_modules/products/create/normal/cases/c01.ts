import { TestCase } from '../../../../../test_runners/models'

import s01 from '../setups/s01'
import s02 from '../setups/s02'

const setups = [s01, s02]

const c: TestCase = {
  description: '1. Create product with all optional properties',
  setups: setups,
  config: function (this: TestCase) {
    if (s01.result && s01.result.data) {
      this.requestData.payload.productType.id = s01.result.data.id
    }

    if (s02.result && s02.result.data) {
      this.requestData.payload.categories[0].id = s02.result.data.id
    }
  },
  requestData: {
    payload: {
      key: 'normal test created product',
      name: {
        en: 'normal test created product',
        zh: '常规测试：创建产品'
      },
      productType: {
        id: '',
        typeId: 'product-type'
      },
      slug: {
        en: 'normal-test-created-product-slug'
      },
      description: {
        en: 'this is a product for testing'
      },
      categories: [
        {
          id: '',
          typeId: 'category'
        }
      ],
      categoryOrderHint: 0.1,
      metaTitle: {
        en: 'metaTitle for normal test created product'
      },
      metaDescription: {
        en: 'metaDescription for normal test created product'
      },
      metaKeywords: {
        en: 'metaKeywords for normal test created product'
      },
      masterVariant: {
        sku: 'sku for create product normal test',
        key: 'key for create product normal test',
        prices: [
          {
            value: {
              "currencyCode": "EUR",
              "centAmount": 4200
            },
            country: 'US',
            validFrom: '2001-09-11T14:00:00.000Z',
            validUntil: '20020-09-11T14:00:00.000Z'
          }
        ]
      },
      variants: [
        {
          sku: 'sku for create product normal test 2',
          key: 'key for create product normal test 2',
          prices: [
            {
              value: {
                "currencyCode": "USD",
                "centAmount": 4200
              },
              country: 'US',
              validFrom: '2001-09-11T14:00:00.000Z',
              validUntil: '20020-09-11T14:00:00.000Z'
            }
          ]
        },
        {
          sku: 'sku for create product normal test 3',
          key: 'key for create product normal test 3',
          prices: [
            {
              value: {
                "currencyCode": "EUR",
                "centAmount": 4500
              },
              country: 'US',
              validFrom: '2001-09-11T14:00:00.000Z',
              validUntil: '20020-09-11T14:00:00.000Z'
            }
          ]
        },
        {
          sku: 'sku for create product normal test 4',
          key: 'key for create product normal test 4',
          prices: [
            {
              value: {
                "currencyCode": "EUR",
                "centAmount": 4500
              },
              country: 'US',
              validFrom: '2001-09-11T14:00:00.000Z',
              validUntil: '20020-09-11T14:00:00.000Z'
            }
          ]
        },
      ]
    }
  },
  expectedResult: {
    httpCode: 201,
    data: {
      "id": "",
      "version": 1,
      "productType": {
        "typeId": "product-type",
        "id": ""
      },
      "catalogs": [],
      "masterData": {
        "current": {
          "name": {
            "en": "normal test created product",
            "zh": "常规测试：创建产品"
          },
          "description": {
            "en": "this is a product for testing"
          },
          "categories": [
            {
              "typeId": "category",
              "id": ""
            }
          ],
          "categoryOrderHints": {},
          "slug": {
            "en": "normal-test-created-product-slug"
          },
          "metaTitle": {
            "en": "metaTitle for normal test created product"
          },
          "metaKeywords": {
            "en": "metaKeywords for normal test created product"
          },
          "metaDescription": {
            "en": "metaDescription for normal test created product"
          },
          "masterVariant": {
            "id": 1,
            "sku": "sku for create product normal test",
            "key": "key for create product normal test",
            "prices": [
              {
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 4200
                },
                "id": "",
                "country": "US",
                "validFrom": "2001-09-11T14:00:00.000Z",
                "validUntil": "20020-09-11T14:00:00.000Z"
              }
            ],
            "images": [],
            "attributes": [],
            "assets": []
          },
          "variants": [
            {
              "id": 2,
              "sku": "sku for create product normal test 2",
              "key": "key for create product normal test 2",
              "prices": [
                {
                  "value": {
                    "currencyCode": "USD",
                    "centAmount": 4200
                  },
                  "id": "",
                  "country": "US",
                  "validFrom": "2001-09-11T14:00:00.000Z",
                  "validUntil": "20020-09-11T14:00:00.000Z"
                }
              ],
              "images": [],
              "attributes": [],
              "assets": []
            },
            {
              "id": 3,
              "sku": "sku for create product normal test 3",
              "key": "key for create product normal test 3",
              "prices": [
                {
                  "value": {
                    "currencyCode": "EUR",
                    "centAmount": 4500
                  },
                  "id": "",
                  "country": "US",
                  "validFrom": "2001-09-11T14:00:00.000Z",
                  "validUntil": "20020-09-11T14:00:00.000Z"
                }
              ],
              "images": [],
              "attributes": [],
              "assets": []
            },
            {
              "id": 4,
              "sku": "sku for create product normal test 4",
              "key": "key for create product normal test 4",
              "prices": [
                {
                  "value": {
                    "currencyCode": "EUR",
                    "centAmount": 4500
                  },
                  "id": "",
                  "country": "US",
                  "validFrom": "2001-09-11T14:00:00.000Z",
                  "validUntil": "20020-09-11T14:00:00.000Z"
                }
              ],
              "images": [],
              "attributes": [],
              "assets": []
            }
          ],
          "searchKeywords": {}
        },
        "staged": {
          "name": {
            "en": "normal test created product",
            "zh": "常规测试：创建产品"
          },
          "description": {
            "en": "this is a product for testing"
          },
          "categories": [
            {
              "typeId": "category",
              "id": ""
            }
          ],
          "categoryOrderHints": {},
          "slug": {
            "en": "normal-test-created-product-slug"
          },
          "metaTitle": {
            "en": "metaTitle for normal test created product"
          },
          "metaKeywords": {
            "en": "metaKeywords for normal test created product"
          },
          "metaDescription": {
            "en": "metaDescription for normal test created product"
          },
          "masterVariant": {
            "id": 1,
            "sku": "sku for create product normal test",
            "key": "key for create product normal test",
            "prices": [
              {
                "value": {
                  "currencyCode": "EUR",
                  "centAmount": 4200
                },
                "id": "",
                "country": "US",
                "validFrom": "2001-09-11T14:00:00.000Z",
                "validUntil": "20020-09-11T14:00:00.000Z"
              }
            ],
            "images": [],
            "attributes": [],
            "assets": []
          },
          "variants": [
            {
              "id": 2,
              "sku": "sku for create product normal test 2",
              "key": "key for create product normal test 2",
              "prices": [
                {
                  "value": {
                    "currencyCode": "USD",
                    "centAmount": 4200
                  },
                  "id": "",
                  "country": "US",
                  "validFrom": "2001-09-11T14:00:00.000Z",
                  "validUntil": "20020-09-11T14:00:00.000Z"
                }
              ],
              "images": [],
              "attributes": [],
              "assets": []
            },
            {
              "id": 3,
              "sku": "sku for create product normal test 3",
              "key": "key for create product normal test 3",
              "prices": [
                {
                  "value": {
                    "currencyCode": "EUR",
                    "centAmount": 4500
                  },
                  "id": "",
                  "country": "US",
                  "validFrom": "2001-09-11T14:00:00.000Z",
                  "validUntil": "20020-09-11T14:00:00.000Z"
                }
              ],
              "images": [],
              "attributes": [],
              "assets": []
            },
            {
              "id": 4,
              "sku": "sku for create product normal test 4",
              "key": "key for create product normal test 4",
              "prices": [
                {
                  "value": {
                    "currencyCode": "EUR",
                    "centAmount": 4500
                  },
                  "id": "",
                  "country": "US",
                  "validFrom": "2001-09-11T14:00:00.000Z",
                  "validUntil": "20020-09-11T14:00:00.000Z"
                }
              ],
              "images": [],
              "attributes": [],
              "assets": []
            }
          ],
          "searchKeywords": {}
        },
        "published": false,
        "hasStagedChanges": false
      },
      "key": "normal test created product",
      "catalogData": {},
      "lastVariantId": 4,
      "createdAt": "2017-01-12T08:20:03.199Z",
      "lastModifiedAt": "2017-01-12T08:20:03.199Z",
      "lastMessageSequenceNumber": 1
    }
  }
}

export default c