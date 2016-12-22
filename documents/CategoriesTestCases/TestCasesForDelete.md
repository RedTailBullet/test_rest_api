## Test suite 1: Error test for delete Category

Description: This test suite is to test whether the Delete Category API returns the correct error messages.

### Test setup
Category name 'smartphone' as follow.  

```json 
{
  "version": 1,
  "name": {
    "de": "smartphone_for_function_delete_test",
    "en": "smartphone_for_function_delete_test"
  },
  "slug": {
    "de": "smartphone_slug_for_function_delete_test",
    "en": "smartphone_slug_for_function_delete_test"
  }
}
```

### Test cases 

#### 1. Delete category 'smartphone' by id with wrong id

Payload:  

Endpoint:  
/{projectKey}/categories/{error id of category 'smartphone'}  

parameter:  
'version=1'  

Expected results:  
1. Should return negative response (404).  

#### 2. Delete category 'smartphone' by id with wrong version

Payload:  

Endpoint:  
/{projectKey}/categories/{id of category 'smartphone'}  

parameter:  
'version=2'  

Expected results:  
1. Should return negative response (409).  
2. Should return error message: 'Object ${id} has a different version than expected. Expected: 2 - Actual: 1.'


## Test suite 2: Function test for Delete Category

Description: This suite is to test whether the Delete Category API works fine. When a category is deleted, all the descending categories will also be deleted. Deleting the root category deletes the whole category tree.   

### Test setup
Category name 'smartphone' as follow.  

```json 
{
  "version": 1,
  "name": {
    "de": "smartphone_for_function_delete_test",
    "en": "smartphone_for_function_delete_test"
  },
  "slug": {
    "de": "smartphone_slug_for_function_delete_test",
    "en": "smartphone_slug_for_function_delete_test"
  }
}
```

Category name 'samsung' as follow. And set it's parent is category 'smartphone'.  

```json  
{
  "version": 1,
  "name": {
    "en": "samsung_for_function_delete_test",  
    "de": "samsung_for_function_delete_test"  
  }, 
  "slug": {
    "en": "samsung_slug_for_function_delete_test",  
    "de": "samsung_slug_for_function_delete_test"  
  },
  "parent": {
    "typeId": "category",
    "id": "f065f169-306a-45d8-8a6c-4ad8ab85690f"
  }
}
```
Category name 'samsung' as follow.   

```json 
{
  "version": 1,
  "name": {
    "en": "iphone_for_function_delete_test",  
    "de": "iphone_for_function_delete_test"  
  }, 
  "slug": {
    "en": "iphone_slug_for_function_delete_test",  
    "de": "iphone_slug_for_function_delete_test"  
  }
}
```

### Test cases   

#### 1. Delete category 'iphone'
Payload:  
Endpoint:  
/{projectKey}/categories/{id of category 'iphone'}  

parameter:  
'version=1'  

Expected results:  
1. Should return positive response.  
2. Should return the product type just deleted.  

#### 2. Delete root category 'smartphone' and the whole category tree.

Payload:  
Endpoint:  
/{projectKey}/categories/{id of category 'smartphone'}  

parameter:  
'version=1'  

Expected results:  
1. Should return positive response.  
2. Should return the product type just deleted.  

#### 3. query category 'samsung' by id

Payload:   

body: no need  

parameter:  
resource ID: '${id of category 'samsung'}'  

Expected results:  
1. should return positive response  
2. should return result 0


