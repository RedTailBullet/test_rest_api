## Test suite 1: Error test for Update Category   
Description: This test is to test whether the Update Category API returns the correct error message while the input is wrong.
### Test setup  
1. Create category name 'smartphone'.  

```json
  {
      "name": {
        "de": "smartphone_setup_for_update_error_test",
        "en": "smartphone_setup_for_update_error_test"
      },
      "slug": {
        "de": "smartphone_slug_setup_for_update_error_test",
        "en": "smartphone_slug_setup_for_update_error_test"
      }
  }
```

2. Create category name 'iphone' and its parent is 'smartphone'.  

```json  
  {
      "name": {
        "en": "iphone_setup_for_update_error_test",
        "de": "iphone_setup_for_update_error_test"
      },
      "slug": {
        "en": "iphone_slug_setup_for_update_error_test",
        "de": "iphone_slug_setup_for_update_error_test"
      },
      "description": {
        "de": "iphone is more and more popular in world",
        "en": "iphone is more and more popular in world"
      },
      "parent": {
        "typeId": "category",
        "id": "${id of smartphone}"
      },
      "orderHint": "0.00031481123037113502170356",
      "externalId": "1234567890QWERTYUIOP",
      "metaTitle": {
        "de": "smartphone",
        "en": "smartphone"
      },
      "metaKeywords": {
        "de": "phone",
        "en": "phone"
      },
      "metaDescription": {
        "de": "Smartphone is more and more popular in world",
        "en": "Smartphone is more and more popular in world"
      }
    }
```

3. Create category name 'samsung' with no parent.  

```json  
{
  "name": {
    "en": "samsung_setup_for_update_error_test",
    "de": "samsung_setup_for_update_error_test"
  }, 
  "slug": {
    "en": "samsung_slug_setup_for_update_error_test", 
    "de": "samsung_slug_setup_for_update_error_test"
  }
}
```

### Test cases  

Description: You should prepare resource ID for update operations. And should provide version number and actions to serve.
The expected version of the category on which the changes should be applied. If the expected version does not match the actual version, a 409 Conflict will be returned.
Actions is array of UpdateAction. The list of update actions to be performed on the category.

#### 1. Update Category with no version  

Payload:  
Endpoint:  
/{projectKey}/categories/{id of category 'iphone'}   
body:  

```json  
{
  "actions": [
    {
      "action": "changeOrderHint",
      "orderHint": "0.20935832570132487129"
    }
  ]
}
```  
Expected results:
1. should return negative response(400)
2. should return error message: "Request body does not contain valid JSON."
3. should return detailed message: "version: Missing required value"

#### 2. Update Category with wrong version  

Payload:   
Endpoint:   
/{projectKey}/categories/{id of category 'iphone'}    
body:   

```json  
{
  "version": 2,
  "actions": [
    {
      "action": "changeOrderHint",  
      "orderHint": "0.20935832570132487129"  
    }
  ]
}
```
Expected results:
1. should return negative response(409)
2. should return error message: "message": "Object ${id from smartphone} has a different version than expected. Expected: 2 - Actual: 1."

#### 3. Update Category with no actions 

Payload:  
Endpoint:  
/{projectKey}/categories/{id of category 'iphone'}   
body:  

```json
{
  "version": 1
}
```
Expected results:
1. should return negative response(400)
2. should return error message: "Request body does not contain valid JSON."
3. should return detailed message: "actions: Missing required value"

#### 4. Update Category by ID with wrong action 
Payload:  
Endpoint:   
/{projectKey}/categories/{id of category 'iphone'}  
body:  

```json
{
  "version": 1,
  "actions": [
    {
      "action": "setOrderHint",
      "orderHint": "0.20935832570132487129"
    }
  ]
}
```
Expected results:
1. should return negative response(400)
2. should return error message: "Request body does not contain valid JSON."
3. should return detailed message: "actions: Invalid type value 'setOrderHint' in '{\"action\":\"setOrderHint\",\"orderHint\":\"0.20935832570132487129\"}'"

#### 5. Update Category by ID with no value in action  
Payload:  
Endpoint:   
/{projectKey}/categories/{id of category 'iphone'}  
body:  

```json
{
  "version": 1,
  "actions": [
    {
      "action": "changeOrderHint"  
    }
  ]
}
```

Expected results:
1. should return negative response(400)
2. should return error message: "Request body does not contain valid JSON."
3. should return detailed message: "actions -> orderHint: Missing required value"

#### 6. changing orderHint with wrong type
Payload:  
Endpoint:   
/{projectKey}/categories/{id of category 'iphone'}  
body:   

```json 
{
  "version": 1,
  "actions": [
    {
      "action": "changeOrderHint",
      "orderHint": 0.20935832570132487129
    }
  ]
}
```
Expected results:  
1. should return negative response(400)
2. should return error message: "Request body does not contain valid JSON."
3. should return detailed error message: "actions -> orderHint: JSON String expected."  

#### 7. changing name with wrong format 

Payload:  
Endpoint:   
/{projectKey}/categories/{id of category 'iphone'}  
body:  

```json 
{
  "version": 1,
  "actions": [
    {
      "action": "changeName",
      "name": "iphone_update_name_test"
    }
  ]
}
```
Expected results:  
1. should return negative response(400)
2. should return error message: "Request body does not contain valid JSON."
3. should return detailed error message: "actions -> name: JSON object expected."  

#### 8. changing slug with wrong format  
Payload:  
Endpoint:   
/{projectKey}/categories/{id of category 'iphone'}   
body:  

```json
{
  "version": 1,
  "actions": [
    {
      "action": "changeSlug",
      "slug": "iphone_slug_update"
    }
  ]
}
```

Expected results:  
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON."  
3. should return detailed error message: "actions -> slug: JSON object expected."  

#### 9. changing slug contain illegal characters  
Payload:  
Endpoint:   
/{projectKey}/categories/{id of category 'iphone'}   
body:  

```json
{
  "version": 1,
  "actions": [
    {
      "action": "changeSlug",
      "slug": {
        "en": "iphone_slug_update_[...,,,   '''///&&&!!!@@@]",
        "de": "iphone_slug_update_[...,,,   '''///&&&!!!@@@]"
      }
    }
  ]
}
```

Expected results:  
1. should return negative response(400)  
2. should return error message: "The value '\"iphone_slug_update_[...,,,   '''///&&&!!!@@@]\"' is not valid for field 'slug'. Slugs may only contain alphanumeric characters, underscores and hyphens and must have a length between 2 and 256 characters. They must match the pattern [a-zA-Z0-9_\\-]{2,256}."  

#### 10. set description with wrong format 'description'
Payload:  
Endpoint:   
/{projectKey}/categories/{id of category 'iphone'}   
body:  

```json 
{
  "version": 1,
  "actions": [
    {
      "action": "setDescription",  
      "description": "iphone is more and more popular in world"  
    }
  ]
}
```
Expected results:  
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON."  
3. should return detailed error message: "actions -> description: JSON object expected."   

#### 11. changing category 'samsung' parent with no 'typeId'
Payload:  
Endpoint:   
/{projectKey}/categories/{id of category 'samsung'}   
body:  

f065f169-306a-45d8-8a6c-4ad8ab85690f

```json 
{
  "version": 1,
  "actions": [
    {
      "action": "changeParent",  
      "parent": {
        "id": "${id of 'smartphone'}"
      }
    }
  ]
}
```  

Expected results:  
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON."  
3. should return detailed error message: "actions -> parent -> typeId: Missing required value"  

#### 12. changing category 'samsung' parent with no 'id'  
Payload:   
Endpoint:   
/{projectKey}/categories/{id of category 'samsung'}   
body:  

```json 
{
  "version": 1,
  "actions": [
    {
      "action": "changeParent",  
      "parent": {
        "typeId": "category"
      }
    }
  ]
}
```  

Expected results:   
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON."  
3. should return detailed error message: "actions -> parent -> id: Missing required value"  

#### 13. changing category 'samsung' parent with wrong 'id' value
Payload:   
Endpoint:   
/{projectKey}/categories/{id of category 'samsung'}   
body:  

```json 
{
  "version": 1,
  "actions": [
    {
      "action": "changeParent",  
      "parent": {
        "typeId": "category",
        "id": "11111169-306a-45d8-8a6c-4ad8ab85690f"
      }
    }
  ]
}
```  

Expected results:  
1. should return negative response(400)  
2. should return error message: "The referenced object of type 'category' with identifier '11111169-306a-45d8-8a6c-4ad8ab85690f' not found."  

#### 14. changing category 'samsung' parent with wrong 'typeId' value 'product'   
Payload:   
Endpoint:   
/{projectKey}/categories/{id of category 'samsung'}   
```json
{
  "version": 1,
  "actions": [
    {
      "action": "changeParent",  
      "parent": {
        "typeId": "product",
        "id": "${id of smartphone}"
      }
    }
  ]
}
```

Expected results:  
1. should return negative response(400)  
2. should return error message: "Invalid reference type 'product'. Expected 'category'."

#### 15. set externalId with wrong type  
Endpoint:   
/{projectKey}/categories/{id of category 'iphone'}   
Payload:  
body:  

```json 
{
  "version": 1,
  "actions": [
    {
      "action": "setExternalId",  
      "externalId": 1234567890
    }
  ]
}
```

Expected results:  
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON."  
3. should return detailed error message: "externalId: JSON String expected."  

#### 16. set metaTitle with wrong format  
Payload:   
Endpoint:   
/{projectKey}/categories/{id of category 'iphone'}   
body:  

```json
{
  "version": 1,
  "actions": [
    {
      "action": "setMetaTitle",  
      "metaTitle": "iphone"  
    }
  ]
}
```

Expected results:  
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON."  
3. should return detailed error message: "actions -> metaTitle: JSON object expected." 

#### 17. set metaDescription with wrong format
Payload:  
Endpoint:   
/{projectKey}/categories/{id of category 'iphone'}   
body:  

```json  
{
  "version": 1,
  "actions": [
    {
      "action": "setMetaDescription",  
      "metaDescription": "iphone is more and more popular in world"  
    }
  ]
}
```

Expected results:
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON."  
3. should return detailed error message: "actions -> metaDescription: JSON object expected."  

#### 18. set setMetaKeywords with wrong format
Payload:  
Endpoint:    
/{projectKey}/categories/{id of category 'iphone'}    
body:  

```json  
{
  "version": 1,
  "actions": [
    {
      "action": "setMetaKeywords",  
      "metaKeywords": "iphone" 
    }
  ]
}
```

Expected results:
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON."  
3. should return detailed error message: "actions -> metaKeywords: JSON object expected."    


## Test suite 2: Function test for update category
Description: This test is to test whether update category works fine.  

### Test setup  
1. Create category name 'smartphone' as follow. 

```json 
{
  "name": {
    "de": "smartphone_for_update_function_test",  
    "en": "smartphone_for_update_function_test"  
  },
  "slug": {
    "de": "smartphone_slug_for_update_function_test",
    "en": "smartphone_slug_for_update_function_test"
  }
}
```

2. Create category name 'iphone' as follow.  

```json
{
  "name": {
    "en": "iphone_for_update_function_test",  
    "de": "iphone_for_update_function_test"  
  }, 
  "slug": {
    "en": "iphone_slug_for_update_function_test",  
    "de": "iphone_slug_for_update_function_test"  
  }
}
```

3. Create category name 'samsung' as follow.  

```json
{
  "name": {
    "en": "samsung_for_update_function_test",  
    "de": "samsung_for_update_function_test"  
  }, 
  "slug": {
    "en": "samsung_slug_for_update_function_test",  
    "de": "samsung_slug_for_update_function_test"  
  }
}
```

4. Create category name 'huawei' as follow.  

```json
{
  "name": {
    "en": "huawei_for_update_function_test",  
    "de": "huawei_for_update_function_test"  
  }, 
  "slug": {
    "en": "huawei_slug_for_update_function_test",  
    "de": "huawei_slug_for_update_function_test"  
  }
}
```

### Test cases
#### 1. update category iphone's name, slug, description  
Payload:   
Endpoint:   
/{projectKey}/categories/{id of category 'iphone'}   
body:  

```json
{
  "version": 1, 
  "actions": [
    {
      "action": "changeName",
      "name": {
        "en": "iphone_for_update_function_test_1",
        "de": "iphone_for_update_function_test_1"
      }
    },
    {
      "action": "changeSlug",  
      "slug": {
        "en": "iphone_slug_for_update_function_test_1",
        "de": "iphone_slug_for_update_function_test_1"
      }
    },
    {
      "action": "setDescription",  
      "description": {
        "en": "iphone is more and more popular in world",
        "de": "iphone is more and more popular in world"
      }
    }
  ]
}
```
Expected results:
1. Should return positive response.  
2. All update operations should be fulfilled.  

#### 2. update category samsung's parent, orderHint, externalId  
Payload:  
Endpoint:   
/{projectKey}/categories/{id of category 'samsung'}   
body:  

```json
{
  "version": 1, 
  "actions": [
    {
      "action": "changeParent",
      "parent": {
        "typeId": "category",
        "id": "${id of smartphone}"
      }
    },
    {
      "action": "changeOrderHint",  
      "orderHint": "0.20935832008132487128"  
    },
    {
      "action": "setExternalId",  
      "externalId": "1234567890"  
    }
  ]
}
```
Expected results:  
1. Should return positive response.  
2. All update operations should be fulfilled.  

#### 3. update category huawei metaTitle, metaDescription, metaKeywords
Payload:  
Endpoint:   
/{projectKey}/categories/{id of category 'huawei'}    
body:  

```json
{
  "version": 1, 
  "actions": [
    {
      "action": "setMetaTitle",  
      "metaTitle": {
        "en": "huawei", 
        "de": "huawei"
      } 
    },
    {
      "action": "setMetaDescription",  
      "metaDescription": {
        "en": "huawei is more and more popular in world" ,
        "de": "huawei is more and more popular in world" 
      } 
    },
    {
      "action": "setMetaKeywords",  
      "metaKeywords": {
        "en": "huawei",  
        "de": "huawei"  
      }
    }
  ]
}
```

Expected results:
1. Should return positive response.  
2. All update operations should be fulfilled.  


