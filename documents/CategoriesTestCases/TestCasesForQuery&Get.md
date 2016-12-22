# Test cases for Query and Get

## Test suite 1: Function test with no category in database  
Description: This test suite is to test whether QueryCatetgory API works fine with no category in database.  

### Test setup
1. There is no category in database.  

### Test case
#### 1. Query categories

Payload:  

Endpoint: '/{projectKey}/categories'  

Expected results:  
1. should return positive response  
2. should return 0 result  

## Test suite 2: Error test with no category in database  
Description: This test suite is to test whether QueryCategories, GetCategorybyID APIs return the correct error message when there are no product type in database.
### Test setup  
1. There is no category in database.  

### Test cases
#### 1. Get Category by wrong ID  

Payload:  

Endpoint: '/{projectKey}/categories/xxxxxxxx-qqqqqqqq-dddddddd-aaaaaa'

Expected results:  
1. should return positive response.  
2. should return 0 results.  

## Test suite 3: Function test with 2 category in database
Description: This test suite is to test whether QueryCatetgory, GetCategorybyID API works fine with 2 category in database.   

### Test setup  
1. Create category name 'smartphone'

```json  
{
  "name": {
    "de": "smartphone",
    "en": "smartphone"
  },
  "slug": {
    "de": "smartphone_slug_for_create_function_test",
    "en": "smartphone_slug_for_create_function_test"
  }
}
```
2.  Create category name 'iphone'.

```json  
{
  "name": {
    "de": "iphone",
    "en": "iphone"
  },
  "slug": {
    "de": "iphone_slug_for_create_function_test",
    "en": "iphone_slug_for_create_function_test"
  }
}
```

### Test cases     
#### 1. Query category 
Payload:  
Endpoint: '/{projectKey}/categories'  

Expected results:
1. Should return positive response.
2. Should return 2 results.
3. Should return correct results.

#### 2. Get category by ID
Payload:  
Endpoint: '/{projectKey}/categories/{id of category 'smartphone'}'  

Expected results:
1. Should return positive results.
2. Should return the correct product type.







