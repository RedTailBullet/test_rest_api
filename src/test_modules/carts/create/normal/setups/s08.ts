import { CaseSetup, TestBase } from '../../../../../test_runners/models'
import * as config from '../../../../../test_runners/utilities/get_configs'

const s: CaseSetup = {
  description: "setup 8: Create a products",
  config: function (this: TestBase, setups) {

    let defaultUrl = config.getBasicUrl()
    this.requestData.url = `${defaultUrl}/${this.requestData.apiName}`

    if(setups && setups[0].result) {
      let temp0 = setups[0].result
      if(temp0 && temp0.data){
        this.requestData.payload.productType.id = temp0.data.id
      }
    }

    if(setups && setups[1].result) {
      let temp1 = setups[1].result
      if(temp1 && temp1.data){
        this.requestData.payload.categories[0].id = temp1.data.id
      }
    }

    if (setups && setups[5].result) {
      let temp5 = setups[5].result
      if (temp5 && temp5.data) {
        this.requestData.payload.taxCategory.id = temp5.data.id
      }
    }
  },
  requestData: {
    method: "post",
    apiName: 'products',
    url: "",
    payload: {
      "key": "normal test created product",
      "name": {
        "en": "product test 1",
        "zh": "常规测试：创建产品"
      },
      "productType": {
        "id": "dc60f4e5-dd69-4c1b-9eee-518ede2a9c5d",
        "typeId": "product-type"
      },
      "slug": {
        "en": "normal-test-created-product-slug"
      },
      "description": {
        "en": "this is a product for testing"
      },
      "categories": [
        {
          "id": "dc60f4e5-dd69-4c1b-9eee-518ede2a9c5d",
          "typeId": "category"
        }
      ],
      "categoryOrderHint": "0.1",
      "metaTitle": {
        "en": "metaTitle for normal test created product"
      },
      "metaDescription": {
        "en": "metaDescription for normal test created product"
      },
      "metaKeywords": {
        "en": "metaKeywords for normal test created product"
      },
      "masterVariant": {
        "sku": "sku for product variant 1",
        "key": "key for product variant 1",
        "prices": [
          {
            "value": {
              "currencyCode": "USD",
              "centAmount":4200
            },
            "country": "US",
            "validFrom": "2001-09-11T14:00:00.000Z",
            "validUntil": "20020-09-11T14:00:00.000Z"
          }
        ]
      },
      "variant": [
        {
          "sku": "sku for product variant 2",
          "key": "key for product variant 2",
          "price": [
            {
              "value": 200,
              "country": "US",
              "validFrom": "2001-09-11T14:00:00.000Z",
              "validUntil": "20020-09-11T14:00:00.000Z"
            }
          ]
        },
        {
          "sku": "sku for product variant 3",
          "key": "key for product variant 3",
          "price": [
            {
              "value": 300,
              "country": "US",
              "validFrom": "2001-09-11T14:00:00.000Z",
              "validUntil": "20020-09-11T14:00:00.000Z"
            }
          ]
        }
      ],
      "taxCategory": {
        "typeId": "tax-category",
        "id": "dc60f4e5-dd69-4c1b-9eee-518ede2a9c5d"
      }
    }
  }
}

export default s


