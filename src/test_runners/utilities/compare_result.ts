import * as chai from 'chai'
import { TestCase, HttpResult } from '../models'
import compareObject from './compare_object'
let expect = chai.expect

function compareResult(testCase: TestCase) {
  let result = testCase.result as HttpResult
  let expectedResult = testCase.expectedResult as HttpResult

  expect(result.httpCode).to.equal(expectedResult.httpCode)

  let expectedData = expectedResult.data
  if (expectedData) {
    compareObject(testCase.description, expectedData, result.data)
  }
}

export default compareResult
