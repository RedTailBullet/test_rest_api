## Test suite 1: Normal test for Create shipping method

#### 1. Create ShippingMethod with all property  

setups:  
1. Create zones name 'Europe', 'US Mainland' and 'US Hawaii and Alaska'.

```json
{
  "name": "Europe",
  "description": "Europe",
  "locations": [
    { 
      "country": "FR" 
    },
    { 
      "country": "ES" 
    },
    {
      "country": "DE"
    },
    {
      "country": "IT"
    }
  ]
}
{
  "name": "US Mainland",
  "description": "US Mainland",
  "locations": [
    { 
      "country": "US" 
    }
  ]
}
{
  "name": "US Hawaii and Alaska",
  "description": "US Hawaii and Alaska",
  "locations": [
    {
      "country": "US",
      "state": "Hawaii"
    },
    {
      "country": "US",
      "state": "Alaska"
    }
  ]
}
```

2. Create taxCategory name 'Standard tax category test'.  
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
    },
    {
      "name": "12.7% US Hawaii",
      "amount": 0.127,
      "includedInPrice": false,
      "country": "US",
      "state": "Hawaii"
    },
    {
      "name": "10.7% US Alaska",
      "amount": 0.107,
      "includedInPrice": false,
      "country": "US",
      "state": "Alaska"
    },
    {
      "name": "19% DE",
      "amount": 0.19,
      "includedInPrice": true,
      "country": "DE"
    },
    {
      "name": "20% FR",
      "amount": 0.19,
      "includedInPrice": true,
      "country": "FR"
    },
    {
      "name": "21% ES",
      "amount": 0.19,
      "includedInPrice": true,
      "country": "ES"
    },
    {
      "name": "22% IT",
      "amount": 0.19,
      "includedInPrice": true,
      "country": "IT"
    }
  ]
}
```

Case payload:  

```json
{
  "name": "CNYT",
  "taxCategory": {
    "typeId": "tax-category",
    "id": "Standard tax category test"
  },
  "isDefault": false,
  "zoneRates": [
    {
      "zone": {
        "typeId": "zone",
        "id": "Europe"
      },
      "shippingRates": [
        {
          "price": {
            "currencyCode": "EUR",
            "centAmount": 1000
          }
        },
        {
          "price": {
            "currencyCode": "USD",
            "centAmount": 1200
          }
        }
      ]
    },
    {
      "zone": {
        "typeId": "zone",
        "id": "US-Hawaii-and-Alaska"
      },
      "shippingRates": [
        {
          "price": {
            "currencyCode": "EUR",
            "centAmount": 3000
          }
        },
        {
          "price": {
            "currencyCode": "USD",
            "centAmount": 3400
          }
        }
      ]
    },
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

Expected result:  
1. should return positive response  
2. should return correct zone just create  
