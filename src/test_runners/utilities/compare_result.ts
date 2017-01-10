import * as chai from 'chai'
import { TestCase, HttpResult } from '../models'
import compareObject from './compare_object'
let expect = chai.expect

function compareResult(testCase: TestCase) {
  let result = testCase.result as HttpResult
  let expectedResult = testCase.expectedResult as HttpResult
  let resultData = result.data

  // expect(result.httpCode).to.equal(expectedResult.httpCode)
  if (result.httpCode !== expectedResult.httpCode) {
    throw new chai.AssertionError(`Error while running ${testCase.description}\n
      expected status: ${expectedResult.httpCode}\n
      actual status: ${result.httpCode}\n
      message: ${JSON.stringify(resultData)}`)
  }

  let expectedData = expectedResult.data
  if (expectedData) {
    compareObject(testCase.description, expectedData, result.data)
  }
}

export default compareResult
