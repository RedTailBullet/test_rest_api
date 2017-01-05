## Test suite 1: Normal test for Create Zone

#### 1. Create zone with all property  

Payload: 

```json
{
  "name": "Asia",
  "description": "The future is Asia", 
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
      "country": "CN",
      "state": "Guangdong"
    },
    {
      "country": "JP",
      "state": "Tokyo"
    }
  ]
}
```

Expected result:  
1. should return positive response  
2. should return correct zone just create  

