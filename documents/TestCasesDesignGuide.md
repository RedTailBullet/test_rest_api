# Test cases design guide

## What is this about?

This document shows how I design my test cases. I also hope this can help anyone that are trying to design test cases too.

## Testing environment setup

For test environment setup, please follow the instruction [here](https://github.com/reactivesw/rest_test).

## What is test cases

Test cases is a specific situation that you put the API in. Each test cases should contain inputs and expected outputs.

## How to design reasonable test cases

### Test cases should be specified

* The input values must be designed to match a specific situation.
* The outputs must be predictable.

### Test cases should cover as much situations as possible

#### Test cases can be divided into two types according to the outputs

  1. Function test

      This type of test should use the correct inputs and get positive outputs to test whether the API is working fine.  
      If the API response an error, the test is failed.  
      * Function test should cover the situations of:  
            1. Input contains all values or just the required values.  
            2. Input contains edge values.  

  2. Error test

      This type of test focus on the wrong-input situations and test that whether the API return the expected error messages.  
      If the API response a positive output, the test is failed.  
      * Error test should cover the situations of:  
            1. Lacking values or too much values.  
            2. Ineffective format.  
            3. Values beyond limits.  
            4. Insecure inputs.  
            5. Ineffective permission.  

* Within these two tests, Error test is actually the more important and more complicated one. So, while designing test cases, you can use one or more typical input cases to finish the function test and then use a bunch of edge inputs to do the error test.  

## How to organize test cases  

### A test can be divided into three parts:  

  1. Setup (before):   
    In this part you should clarify that in which situation should this test be started and how to achieve that situation.  

  2. Test suite (describe):  
    All similar test cases can be organized under a test suite.  
    The test suite should have a clear name.  
    A test suite can contain setup, test suites and test cases.  

  3. Test cases (it):  
    In this part, a detailed test case is presented.  
    A setup can also be a test case too!  

* I recommend do the request in a test case rather than a setup. Because only test cases (it) will show the time it used to complete the operation.

* **Test organizing sample**  

        before('', function () {
          // setup the test environment here.
        })
        describe('describe the setup here', function () {
          describe('describe the test suite here', function () {
            describe('describe the nested test suite here', function () {
              it('describe the test case here', function () {
                // do the test case.
              })
            })
          })
        })

