import { TestCase, HttpResult } from '../../../../../test_runners/models'
import s01 from '../setups/s01'
import s02 from '../setups/s02'
import s03 from '../setups/s03'
import s04 from '../setups/s04'
import s05 from '../setups/s05'
import s06 from '../setups/s06'
import s07 from '../setups/s07'
import s08 from '../setups/s08'

let setups = [s01, s02, s03, s04, s05, s06, s07, s08]

let testData = {
  "currency": "USD",
  "customerId": "id of customer",
  "anonymousId": "id of anonymous session",
  "country": "US",
  "inventoryMode": "TrackOnly",
  "taxMode": "Platform",
  "lineItems": [
    {
      "productId": "id of product",
      "variantId": 1,
      "quantity": 1
    }
  ],
  "shippingAddress": {
    "country": "US",
    "state": "Hawaii"
  },
  "billingAddress": {
    "country": "US",
    "state": "Hawaii"
  },
  "shippingMethod": {
    "typeId": "shipping-method",
    "id": "id of shipping-method"
  }
}

const c: TestCase = {
  description: 'Case 1. Create cart with all properties',
  setups,
  config: function (this: TestCase) {
    let expected = this.expectedResult as HttpResult

    if (s04.result && s04.result.data) {
      this.requestData.payload.customerId = s04.result.data['customer'].id
      if(expected.data) {
        expected.data['customerId'] = s04.result.data['customer'].id
      }
      s04.result.data = s04.result.data['customer']
    }

    if (s08.result && s08.result.data) {
      this.requestData.payload.lineItems[0].productId = s08.result.data.id
      if(expected.data) {
        expected.data['lineItems'][0].productId = s08.result.data.id
      }
    }

    if (s07.result && s07.result.data) {
      this.requestData.payload.shippingMethod.id = s07.result.data.id
    }
  },
  requestData: {
    payload: {
      ...testData
    }
  },
  expectedResult: {
    httpCode: 201,
    data: {
      "type": "Cart",
      "id": "",
      "version": 1,
      "customerId": "",
      "anonymousId": "id of anonymous session",
      "createdAt": "",
      "lastModifiedAt": "",
      "lineItems": [
        {
          "id": "",
          "productId": "",
          "name": {
            "zh": "常规测试：创建产品",
            "en": "product test 1"
          },
          "productType": {
            "typeId": "product-type",
            "id": "",
            "version": 1
          },
          "variant": {
            "id": 1,
            "sku": "sku for product variant 1",
            "key": "key for product variant 1",
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
          "price": {
            "value": {
              "currencyCode": "USD",
              "centAmount": 4200
            },
            "id": "",
            "country": "US",
            "validFrom": "2001-09-11T14:00:00.000Z",
            "validUntil": "20020-09-11T14:00:00.000Z"
          },
          "quantity": 1,
          "discountedPricePerQuantity": [],
          "taxRate": {
            "name": "13.7% US",
            "amount": 0.137,
            "includedInPrice": false,
            "country": "US",
            "state": "Hawaii",
            "id": "h-W7cYhV",
            "subRates": []
          },
          "state": [
            {
              "quantity": 1,
              "state": {
                "typeId": "state",
                "id": "10f2a7a2-0af9-48c6-a9a1-f344d6bcfe58"
              }
            }
          ],
          "priceMode": "Platform",
          "totalPrice": {
            "currencyCode": "USD",
            "centAmount": 4200
          },
          "taxedPrice": {
            "totalNet": {
              "currencyCode": "USD",
              "centAmount": 4200
            },
            "totalGross": {
              "currencyCode": "USD",
              "centAmount": 4775
            }
          }
        }
      ],
      "cartState": "Active",
      "totalPrice": {
        "currencyCode": "USD",
        "centAmount": 6600
      },
      "taxedPrice": {
        "totalNet": {
          "currencyCode": "USD",
          "centAmount": 6600
        },
        "totalGross": {
          "currencyCode": "USD",
          "centAmount": 7504
        },
        "taxPortions": [
          {
            "rate": 0.137,
            "amount": {
              "currencyCode": "USD",
              "centAmount": 904
            },
            "name": "13.7% US"
          }
        ]
      },
      "country": "US",
      "shippingAddress": {
        "state": "Hawaii",
        "country": "US"
      },
      "billingAddress": {
        "state": "Hawaii",
        "country": "US"
      },
      "customerGroup": {
        "typeId": "customer-group",
        "id": ""
      },
      "shippingInfo": {
        "shippingMethodName": "CN-SF",
        "price": {
          "currencyCode": "USD",
          "centAmount": 2400
        },
        "shippingRate": {
          "price": {
            "currencyCode": "USD",
            "centAmount": 2400
          }
        },
        "taxRate": {
          "name": "13.7% US",
          "amount": 0.137,
          "includedInPrice": false,
          "country": "US",
          "state": "Hawaii",
          "id": "h-W7cYhV",
          "subRates": []
        },
        "taxCategory": {
          "typeId": "tax-category",
          "id": "ea498769-a280-417c-8b4a-a70c5076236f"
        },
        "deliveries": [],
        "shippingMethod": {
          "typeId": "shipping-method",
          "id": "2cf6f42e-8af1-42c0-ba1b-1d1b70cc7ab2"
        },
        "taxedPrice": {
          "totalNet": {
            "currencyCode": "USD",
            "centAmount": 2400
          },
          "totalGross": {
            "currencyCode": "USD",
            "centAmount": 2729
          }
        }
      },
      "customLineItems": [],
      "discountCodes": [],
      "inventoryMode": "TrackOnly",
      "taxMode": "Platform",
      "taxRoundingMode": "HalfEven"
    }
  }
}

export default c