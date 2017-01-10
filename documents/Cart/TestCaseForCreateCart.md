## Test suite 1: Normal test for Create Cart  

#### 1. Create cart with all property  
setups:  

1. Create a product type.  

```json
{
  "name": "product type 2",
  "description": "product type 2"
}
```

2. Create a category.  

```json 
{
  "name": {
    "en": "category for create product testing"
  },
  "description": "category for create product testing",
  "slug": {
    "en": "category-for-create-product-testing"
  }
}
```

3. Create a customer group.  

```json  
{
  "groupName": "customer group 1"
}
```  

4. Create a product with all properties.

```json
{
  "key": "normal test created product",
  "name": {
    "en": "product test 1",
    "zh": "常规测试：创建产品"
  },
  "productType": {
    "id": "",
    "typeId": "product-types"
  },
  "slug": {
    "en": "normal-test-created-product-slug"
  },
  "description": {
    "en": "this is a product for testing"
  },
  "categories": [
    {
      "id": "categories",
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
        "value": 100,
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
    "taxCategory": "tax-category",
    "id": "id of tax-category"
  }
}
```

5. Create a customer.  

```json
{
  "email": "email12345@qq.com",
  "password": "password12345",
  "firstName": "firstName",
  "lastName": "lastName",
  "customerGroup": {
    "typeId": "customer-group",
    "id": ""
  }
}
```  

6. Create zone name 'US Mainland'.  

```json
{
  "name": "US Mainland Hawaii",
  "description": "US Mainland Hawaii",
  "locations": [
    { 
      "country": "US",
      "state": "Hawaii"
    }
  ]
}
```

7. Create tax category.

```json
{
  "name": "Standard tax category test",
  "description": "Standard tax category test",
  "rates": [
    {
      "name": "13.7% US Mainland",
      "amount": 0.137,
      "includedInPrice": false,
      "country": "US",
      "state": "Hawaii",
      "rate": [
        {
          "name": "salesTaxRate",
          "amount": "0.087"
        },
        {
           "name": "otherTaxRate",
           "amount": "0.05"
        }
      ]
    }
  ]
}
```

8. Create shipping method.

```json
{
  "name": "CN-SF",
  "taxCategory": {
    "typeId": "tax-category",
    "id": "Standard tax category test"
  },
  "isDefault": false,
  "zoneRates": [
    {
      "zone": {
        "typeId": "zone",
        "id": "US-Mainland"
      },
      "shippingRates": [
        {
          "price": {
            "currencyCode": "EUR",
            "centAmount": 2000
          }
        },
        {
          "price": {
            "currencyCode": "USD",
            "centAmount": 2400
          }
        }
      ]
    }
  ]
}
```

case payload:  

```json
{
  "currency": "USD",
  "customerId": "id of customer",
  "anonymousId": "id of anonymous",
  "country": "US",
  "inventoryMode": "TrackOnly",
  "taxMode": "Platform",
  "lineItems": [
    {
      "productId": "product test 1",
      "variantId": 1,
      "quantity": 1
    },
    {
      "productId": "product test 1",
      "variantId": 2,
      "quantityId": 1
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
```

