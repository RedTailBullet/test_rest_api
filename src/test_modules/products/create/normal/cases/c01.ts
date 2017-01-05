import { TestCase } from '../../../../../models'

import s01 from '../setups/s01'

const setups = [ s01 ]

const c: TestCase = {
  description: '1. Create product with all optional properties',
  setups: setups,
  requestData: {
    payload: {
      key: 'normal test created product',
      name: {
        en: 'normal test created product',
        zh: '常规测试：创建产品'
      },
      productType: {
        id: 'product-types',
        typeId: ''
      },
      slug: {
        en: 'normal-test-created-product-slug'
      },
      description: {
        en: 'this is a product for testing'
      },
      categories: [
        {
          id: 'categories',
          typeId: ''
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
        sku: 'sku for product variant draft in product draft for create product normal test',
        key: 'key for product variant draft in product draft for create product normal test',
        prices: [
          {
            value: 100,
            country: 'us',
            customerGroup: {
              id: 'customer-groups',
              typeId: ''
            },

          }
        ]
      }
    }
  },
  expectedResult: {
    httpCode: 201
  }
}