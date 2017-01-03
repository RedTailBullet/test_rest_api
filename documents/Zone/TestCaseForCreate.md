## Test suite 1: Error test for Create Zone
Description: This test suite is to test whether the CreateZone is returning the correct error message while the payload is illegal.  
note: Name is required. Description and locations is optional.

### Test cases
#### 1. Create zone with no payload  
Endpoint: /{projectKey}/zones
Payload:  

```json
{}
```

Expected results:  
1. should return negative response(400)  
2. should return error message: "Payload must be a valid JSON".  

#### 2. Create zone with wrong type of 'name'   
Payload:  

```json
{
  "name" : 1234567890
}
```

Expected results:  
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON."  
3. should return detailed message: "name: JSON String expected."  

#### 3. Create zone with wrong type of 'description'  

Payload:  

```json
{
  "description": 1234567890
}
```

Expected results:  
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON."   
3. should return detailed message: "description: JSON String expected."   
4. should return detailed message: "name: Missing required value"   

#### 4. Create zone with wrong type of 'locations' 

Payload: 

```json
{
  "name": "China mainland",  
  "locations": {
    "country": "CN",
    "state": "Guangdong"
  }
}
```

Expected result:  
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON."   
3. should return detailed error message: "locations: JSON Array expected."  

#### 5. Create zone with duplicate 'name'  
setups: 
1. Create zone and 'name' value is 'China mainland'  

```json
{
  "name": "China mainland",
  "locations": []
}
```
test case:  
Payload:  

```json
{
  "name": "China mainland",
  "locations": []
}
```

Expected result:  
1. should return negative response(400)  
2. should return error message: "A duplicate value "China mainland" exists for field 'name'."  

#### 6. Create zone with "locations" and missing "country"

```json
{
  "name": "China mainland",
  "locations": [
    {
      "state": ""
    }
  ]
}
```

Expected result:  
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON."   
3. should return detailed error message: "locations -> country: Missing required value"

#### 7. Create zone with "locations" and "country" is empty  

```json
{
  "name": "China mainland",
  "locations": [
    {
      "country": ""
    }
  ]
}
```

Expected result:  
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON."   
3. should return detailed error message: "locations -> country: ISO 3166-1 country code expected."  

#### 8. Create zone with "locations" and "country" is empty  

```json
{
  "name": "China mainland",
  "locations": [
    {
      "country": "cn"
    }
  ]
}
```

Expected result:  
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON."   
3. should return detailed error message: "locations -> country: ISO 3166-1 country code expected."  


#### 9. Create zone with "locations" with error country codes   

```json
{
  "name": "test-case-zone-1",
  "locations": [
    {
      "country": "YA"
    }
  ]
}
```

Expected result:  
1. should return negative response(400)  
2. should return error message: "Request body does not contain valid JSON."   
3. should return detailed error message: "locations -> country: ISO 3166-1 country code expected."  


#### 10. Create zone with "locations" with duplicate country with duplicate state  

setups
1. Create zone with "locations"  

```json
{
  "name": "China mainland",
  "locations": [
    {
      "country": "CN",
      "state": "Guangdong"
    }
  ]
}
```

Payload:  

```json
{
  "name": "China mainland",
  "locations": [
    {
      "country": "CN",
      "state": "Guangdong"
    },
    {
      "country": "CN",
      "state": "Guangxi"
    }
  ]
}
```
Expected result:  
1. should return negative response(400)  
2. should return error message: "The location with country 'CN' with state 'Guangdong' is already assigned to the other zone."  




#### 11. Create zone with "locations" with duplicate country
setups
1. Create zone with "locations"  

```json
{
  "name": "Asia",
  "locations": [
    {
      "country": "CN"
    }
  ]
}
```

Payload:  

```json
{
  "name": "EastAsia",
  "locations": [
    {
      "country": "CN"
    },
    {
      "country": "JP"
    }
  ]
}
```

Expected result:  
1. should return negative response(400)  
2. should return error message: "The location with country 'CN' is already assigned to the other zone"    



## Test suite 1: Normal test for Create Zone

#### 1. Create zone with "name"   

Payload: 

```json
{
  "name": "China mainland"
}
```

Expected result:  
1. should return positive response  
2. should return correct zone just create  

#### 2. Create zone with empty 'locations' array   

Payload: 

```json
{
  "name": "China mainland",
  "locations": []
}
```

Expected result:  
1. should return positive response  
2. should return correct zone just create  


#### 3. Create zone with all property  

Payload: 

```json
{
  "name": "Asia",
  "description": "Asia", 
  "locations": [
    {
      "country": "KR"
    },
    {
      "country": "CN"
    },
    {
      "country": "CN",
      "state": "Beijing"
    },
    {
      "country": "JP",
      "state": "Toyot"
    }
  ]
}
```

Expected result:  
1. should return positive response  
2. should return correct zone just create  



