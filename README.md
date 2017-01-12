# test_rest_api
Test Rest API

This project is for automated REST API testing.  

## How to run this?  

To run, just install Node.js, open this folder in the terminal and input:  

```
npm i
npm test
```

The `npm i` order are only needed on the first run.  

## How the test cases are organized  

The basic unit is a test case  

About the guide of test case design, please refers to `documents/TestCaseDesignGuide.md`

### Test case  

A test case should contains the following properties:  

1. description: The description of this test case. This description will be presented in the test report.  
2. requestData: The request data included url, apiName, body, param and method.
3. setups: An array of setups for this test case
4. config: A function which you can use it to setup your test case. The input of this function will be the setup array of this test case.
5. expectedResult: The expected result from the API. The required result is the http code. If a `data` is presented, the runner will try to match the data with the body of the response.  
6. result: This field will be created once the API responses. It contains the http code and the body of the response.  

### Test suite  

Multiple test cases will be organized in a test suite.  

A test suite should contains the following properties:  

1. description: The description of this test suite. This will be presented in the test report.  
2. testCases: The test cases you wanna run for this suite.  
3. setupMethod: The default http method for the setups for the test cases in this suite.  
4. testMethod: The default http method for the test cases in this suite.  

### Test module  

All test suites are organized in a test module.  

A test module should contains the following properties:  

1. apiName: The api name that are used to form the url of the test cases.  
2. suites: An array contains all test suites for this test module  

### Test modules  

an array of the test modules that you wanna run in this test.  

## The file structure  

All the test modules are in the test_modules folder. There is a index.ts inside that imports all test modules that you want to run.  

The test modules are usually distinguished by different url tail ends.  

Each module contains 4 basic actions: Create, Delete, Query, Update.  

Each action contains at least 2 type of test: Normal and Error. Each of this type forms a test suite.  

Inside Normal or Error or other type of test, there are cases and setups.  

1. The cases folder contains all the test cases and are organized as testCases in the index.ts  
2. The setups folder contains all the setups for test cases. The setups should be imported individually by test case.  

## About models  

All the basic modules such as TestCase, TestSuite, CaseSetup, HttpResult are being contained in the index.ts in `src/test_runner/modules`.  

The module for config is in the Config.ts in the same folder as above.  

## About configurations  

All the configurations for connecting to the server is being storage in `src/config.ts`. The configurations will be loaded according to the configuration's name.  

## About case running  

According to the design, each case should run individually.  

Test cases within one suite will run one by one. but the test suites may run in parallel.  

The setups and cleanups for one case will run one by one too.  

Each test case will clean itself up after running. However, cleanup might failed if the server doesn't return the correct id and version.  

The running order of a test case will be: setup's config -> setup itself -> testCase's config -> testCase itself -> compare results -> cleanup test case -> cleanup setups in contrary order.  

Cleanups will try to use the delete method with the same tail end of the test cases.  

Cleanups will run under any circumstances and ignore the response. Which means if the api rejects or returned a http code with error, the runner ignores it and run the next cleanup.  

## About error reports  

I tried to make the error report look nice but it actually depends on the situations.  

The regular error reports appears when the actual result doesn't match the expected result. The runner will display the expected http code as well as the actual one, and the body of the actual response.  

## About suffix  

As some special needs are presented, I added a suffix system. This system uses suffix like `_UnOrdered` to solve some special matching condition. However the conditions it supports is limited now and it is not organized well at this time.  

## About test reports  

The test reports are in `test_report/` and are named by time. To review the report please open the `apiTestReport.html` in the browser.  
