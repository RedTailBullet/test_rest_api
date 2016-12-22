## Test suite 1: Error test for Create category  
Description: This test suite is to test whether the CreateCategory is returning the correct error message while the payload is illegal.  
Name and slug is required. A correct category contain name and slug at least. And they required LocalizedString format like this:  

```json
{  
  "de": "Hundefutter",  
  "en": "dog food"  
} 
```  
Name is allow duplicate. Slug is human-readable identifier usually used as deep-link URL to the related category. Allowed are alphabetic, numeric, underscore (_) and hyphen (-) characters. Maximum size is 256. Must be unique across a project! The same category can have the same slug for different languages.
### Test setup
1. This test runs under any situations.

### Test cases
#### 1. Create category with no payload  
Payload:  

```json
{}  
```

Expected results:  
1. should return negative response(400).  
2. should return error message: "Payload must be a valid JSON".

#### 2. Create category with wrong format 'name' and no field 'slug'    
Payload:  

```json
{  
  "name": "smartphone_with_wrong_format_name_and_no_field_slug" 
} 
```

Expected results:  
1. should return negative response(400)
2. should return error message: Request body does not contain valid JSON
3. should return detailed error message: "name: JSON object expected"
4. should return detailed error message: "slug: Missing required value"

#### 3. Create category with correct format 'name' and no field 'slug'
Payload:  

```json
{
  "name": {
    "en": "smartphone_with_correct_format_name_and_no_field_slug",
    "de": "smartphone_with_correct_format_name_and_no_field_slug"
  }
}
```
Expected result:  
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON"  
3. should return detailed error message: "slug: Missing required value"  

#### 4. Create category with correct format 'name' and wrong format 'slug' 
Payload:  

```json
{
  "name": {
    "en": "smartphone_with_correct_format_name_and_wrong_format_slug",
    "de": "smartphone_with_correct_format_name_and_wrong_format_slug"
  },
  "slug": "smartphon_slug_with_correct_format_name_and_wrong_format_slug"
}
```
Expected results:  
1. should return negative response(400)
2. should return error message: "Request body does not contain valid JSON"  
3. should return detailed error message: "slug: JSON object expected."  

#### 5. Create category with correct field 'name' and field 'slug' contain illegal characters.   
Payload:  

```json 
{
  "name": {
    "en": "smartphone_slug_contain_illegal_characters",
    "de": "smartphone_slug_contain_illegal_characters"
  },
  "slug": {
    "en": "smartphone_slug_[...,,,   '''///&&&!!!@@@]",
    "de": "smartphone_slug_[...,,,   '''///&&&!!!@@@]"
  }
}
```
Expected results: 
1. should return negative response(400)  
2. should return error message: "The value '\"smartphone_slug_[...,,,   '''///&&&!!!@@@]\"' is not valid for field 'slug'. Slugs may only contain alphanumeric characters, underscores and hyphens and must have a length between 2 and 256 characters. They must match the pattern [a-zA-Z0-9_\\-]{2,256}."

#### 6. Create category with correct field 'name' and length of 'slug' exceed limit  
Payload:  

```json
{
  "name": {
    "en": "smartphone_length_of_slug_exceed_limit",
    "de": "smartphone_length_of_slug_exceed_limit"
  },
  "slug": {
    "en": "smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_",
    "de": "smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_smartphone_slug_"
  }
}
```
Expected results: 
1. should return negative response(400) 
2. should return error message: "Slugs may only contain alphanumeric characters, underscores and hyphens and must have a length between 2 and 256 characters. They must match the pattern [a-zA-Z0-9_\\-]{2,256}."

#### 7. Create category with correct field name and correct field slug

Payload:

```json 
{
  "name": {
    "en": "smartphone_with_correct_message_for_error_create_test",
    "de": "smartphone_with_correct_message_for_error_create_test"
  },
  "slug": {
    "en": "smartphone_slug_with_correct_message_for_error_create_test",
    "de": "smartphone_slug_with_correct_message_for_error_create_test"
  }
}
```
Expected results:  
1. should return positive response
2. should return category just created

#### 8. Create category with duplicate field 'name' and duplicate field 'slug'  

Payload:  

```json
{
  "name": {
    "en": "smartphone_with_correct_message_for_error_create_test",
    "de": "smartphone_with_correct_message_for_error_create_test"
  },
  "slug": {
    "en": "smartphone_slug_with_correct_message_for_error_create_test",
    "de": "smartphone_slug_with_correct_message_for_error_create_test"
  }
}
```

Expected results:  
1. should return negative response(400)  
2. should return error message: "A duplicate value '\"smartphone_slug\"' exists for field 'slug'."  
3. should return duplicateValue : "smartphone_slug"

#### 9. Create category with different field 'name' and duplicate field 'slug'  

Payload:  

```json
{
  "name": {
    "en": "smartphone_with_different_name_and_duplicate_slug",
    "de": "smartphone_with_different_name_and_duplicate_slug"
  },
  "slug": {
    "en": "smartphone_slug_with_correct_message_for_error_create_test",
    "de": "smartphone_slug_with_correct_message_for_error_create_test"
  }
}
```

Expected results:  
1. should return negative response(400)  
2. should return error message: "A duplicate value '\"smartphone_slug\"' exists for field 'slug'."  
3. should return duplicateValue : "smartphone_slug"

#### 10. Create category with wrong format 'description'  

Payload:  

```json 
{
  "name": {
    "en": "smartphone",
    "de": "smartphone"
  },
  "slug": {
    "en": "smartphone_slug_of_description_error_test",
    "de": "smartphone_slug_of_description_error_test"
  },
  "description": "Smartphone is more and more popular in world"
}
```

Expected results:  
1. should return negative response(400)
2. should return error message: "Request body does not contain valid JSON."  
3. should return detailed error message: "description: JSON object expected."

#### 11. Create category with wrong format 'metaTitle'
Payload:  

```json  
{
  "name": {
    "en": "smartphone_with_wrong_format_metaTitle",
    "de": "smartphone_with_wrong_format_metaTitle"
  },
  "slug": {
    "en": "smartphone_slug_with_wrong_format_metaTitle",
    "de": "smartphone_slug_with_wrong_format_metaTitle"
  },
  "metaTitle": "smartphone"
}
```
Expected results:  
1. should return negative response(400)
2. should return error message: "Request body does not contain valid JSON."  
3. should return detailed error message: "metaTitle: JSON object expected."   

#### 12. Create category with wrong format 'metaDescription'

Payload:  

```json
{
  "name": {
    "en": "smartphone_of_metaDescription_error_test",
    "de": "smartphone_of_metaDescription_error_test"
  },
  "slug": {
    "en": "smartphone_slug_of_metaDescription_error_test",
    "de": "smartphone_slug_of_metaDescription_error_test"
  },
  "metaDescription": "Smartphone is more and more popular in world"
}
```
Expected results:  
1. should return negative response(400)
2. should return error message: "Request body does not contain valid JSON."  
3. should return detailed error message: "metaDescription: JSON object expected."  

#### 13. Create category with wrong format 'metaKeywords'
Payload:  
body:  

```json 
{
  "name": {
    "en": "smartphone_of_metaKeywords_error_test",
    "de": "smartphone_of_metaKeywords_error_test"
  },
  "slug": {
    "en": "smartphone_slug_of_metaKeywords_error_test",
    "de": "smartphone_slug_of_metaKeywords_error_test"
  },
  "metaKeywords": "phone"
}
```
Expected results:  
1. should return negative response(400)
2. should return error message: "Request body does not contain valid JSON."  
3. should return detailed error message: "metaKeywords: JSON object expected." 

#### 14. Create category with wrong type of 'orderHint'  
Payload:  

```json 
{
  "name": {
    "en": "smartphone_of_orderHint_error_test",
    "de": "smartphone_of_orderHint_error_test"
  },
  "slug": {
    "en": "smartphone_slug_of_orderHint_error_test",
    "de": "smartphone_slug_of_orderHint_error_test"
  },
  "orderHint": 0.00031481093037113502170356
}
```
Expected results:  
1. should return negative response(400)
2. should return error message: "Request body does not contain valid JSON."  
3. should return detailed error message: "orderHint: JSON String expected." 

#### 15. Create category with wrong type of 'externalId'  
Payload:   

```json 
{
  "name": {
    "en": "smartphone_of_externalId_error_test",
    "de": "smartphone_of_externalId_error_test"
  },
  "slug": {
    "en": "smartphone_slug_of_externalId_error_test",
    "de": "smartphone_slug_of_externalId_error_test"
  },
  "externalId": 1234567890
}
```
Expected results:  
1. should return negative response(400)
2. should return error message: "Request body does not contain valid JSON."  
3. should return detailed error message: "externalId: JSON String expected." 

#### 16. Create category with parent and no teyeId
Note: Different category have different id. The unique ID of the category.
Payload:  

```json
{
  "name": {
    "en": "iphone_error_test_with_no_typeId",
    "de": "iphone_error_test_with_no_typeId"
  },
  "slug": {
    "en": "iphone_slug_error_test_with_no_typeId",
    "de": "iphone_slug_error_test_with_no_typeId" 
  },
  "parent": {
    "id": "f065f169-306a-45d8-8a6c-4ad8ab85690f"
  }
}
```
Expected results: 
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON."  
3. should return detailed message: "parent -> typeId: Missing required value"  

#### 17. Create category with parent and no id
Payload:   

```json 
{
  "name": {
    "en": "iphone_error_test_with_no_id",
    "de": "iphone_error_test_with_no_id"
  },
  "slug": {
    "en": "iphone_slug_error_test_with_no_id", 
    "de": "iphone_slug_error_test_with_no_id" 
  }, 
  "parent": {
    "typeId": "category"
  }
}
```
Expected results: 
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON."  
3. should return detailed message: "parent -> id: Missing required value"  

#### 18. Create category with parent and wrong 'id' value
Payload:   

```json 
{
  "name": {
    "en": "iphone_error_test_with_wrong_id_value",
    "de": "iphone_error_test_with_wrong_id_value"
  },
  "slug": {
    "en": "iphone_slug_error_test_with_wrong_id_value", 
    "de": "iphone_slug_error_test_with_wrong_id_value" 
  }, 
  "parent": {
    "typeId": "category",
    "id": "11111169-306a-45d8-8a6c-4ad8ab85690f"
  }
}
```
Expected results: 
1. should return positive response  
2. should return category just create with no parent field

#### 19. Create category with parent and wrong 'typeId' value
Payload:  

```json 
{
  "name": {
    "en": "iphone_error_test_with_wrong_typeId_value",
    "de": "iphone_error_test_with_wrong_typeId_value"
  },
  "slug": {
    "en": "iphone_slug_error_test_with_wrong_typeId_value", 
    "de": "iphone_slug_error_test_with_wrong_typeId_value" 
  }, 
  "parent": {
    "typeId": "product",
    "id": "f065f169-306a-45d8-8a6c-4ad8ab85690f"
  }
}
```
      
Expected results: 
1. should return positive response  
2. should return category just create with parent and 'typeId' value is 'category'.


## Test suite 2: Function test for CreateCategory 
Description: This test is to test whether CreateCategory API works fine.
### Test setup  
1. Database should contain a category name 'smartphone'as follow: 

```json 
{
  "name": {
    "de": "smartphone",
    "en": "smartphone"
  },
  "slug": {
    "de": "smartphone_slug",
    "en": "smartphone_slug"
  }
}
```

### Test cases
#### 1. Create category with all required properties  
Payload:  

```json  
{
  "name": {
    "de": "smartphone_with_all_required_properties",
    "en": "smartphone_with_all_required_properties"
  },
  "slug": {
    "de": "smartphone_slug_with_all_required_properties",
    "en": "smartphone_slug_with_all_required_properties"
  }
}
```
Expected results:
1. should return positive response.
2. should return category just created

#### 2. Create category with all required properties and all optional properties   
Payload:  

```json  
{
  "name": {
    "de": "smartphone_with_all_properties",
    "en": "smartphone_with_all_properties"
  },
  "slug": {
    "de": "smartphone_slug_with_all_properties",
    "en": "smartphone_slug_with_all_properties"
  },
  "parent": {
    "typeId": "category",
    "id": "id of setup's smartphone"
  },
  "description": {
    "en": "Smartphone is more and more popular in world",
    "de": "Smartphone is more and more popular in world"
  },
  "orderHint": "0.00031481123037113502170356",
  "externalId": "1234567890QWERTYUIOP",
  "metaTitle": {
    "en": "smartphone",
    "de": "smartphone"
  },
  "metaDescription": {
    "en": "Smartphone is more and more popular in world",
    "de": "Smartphone is more and more popular in world"
  },
  "metaKeywords": {
    "en": "phone", 
    "de": "phone"
  }
}
```
Expected results:
1. should return positive response.
2. should return category just created  

