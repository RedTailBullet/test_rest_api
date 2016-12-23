# Test cases for Query and Get

## Test suite 1: Error test with no category in database  
Description: This test suite is to test whether QueryCategories, GetCategorybyID APIs return the correct error message when there are no product type in database.
### Test setup  
1. There is no category in database.  

### Test cases
#### 1. Get Category by wrong ID  

Payload:  

Endpoint: '/{projectKey}/categories/xxxxxxxx-qqqqqqqq-dddddddd-aaaaaa'

Expected results:  
1. should return negative response(404)

## Test suite 2: Function test for query categories
Description: This test suite is to test whether QueryCatetgory, GetCategorybyID API works fine.   

### Test cases
#### 1. Query categories with no category in database 
Payload:  

Endpoint: '/{projectKey}/categories'  

Expected results:  
1. should return positive response（200）  
2. should return 0 result  

#### 2. Query category when 2 categories in database
Test setup  
1. Create category name 'smartphone'

```json  
{
  "name": {
    "en": "en-smartphone_for_query_function_test",
    "de": "de-smartphone_for_query_function_test"
  },
  "slug": {
    "en": "en-smartphone_slug_for_query_function_test",
    "de": "de-smartphone_slug_for_query_function_test"
  }
}
```
2.  Create category name 'iphone'.

```json  
{
  "name": {
    "en": "en-iphone_for_query_function_test",
    "de": "de-iphone_for_query_function_test"
  },
  "slug": {
    "en": "en-iphone_slug_for_query_function_test",
    "de": "de-iphone_slug_for_query_function_test"
  }
}
```

Payload:  
Endpoint: '/{projectKey}/categories'  

Expected results:
1. Should return positive response.
2. Should return 2 results.
3. Should return correct results.

#### 3. Get category by ID when 1 category in database

Test setup  
1. Create category name 'smartphone'

```json  
{
  "name": {
    "en": "en-smartphone_for_queryByID_function_test",
    "de": "de-smartphone_for_queryByID_function_test"
  },
  "slug": {
    "en": "en-smartphone_slug_for_queryByID_function_test",
    "de": "de-smartphone_slug_for_queryByID_function_test"
  }
}
```

Payload:  
Endpoint: '/{projectKey}/categories/{id of category 'smartphone'}'  

Expected results:
1. Should return positive results.
2. Should return the correct product type.







