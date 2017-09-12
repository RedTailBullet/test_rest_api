import * as chai from 'chai'
import { TestCase, HttpResult } from '../models'
import compareObject from './compare_object'
import * as logger from '../../test_result_logger/logger_main'

let expect = chai.expect

function compareResult(testCase: TestCase) {
  
  logger.setCurrentTestName(testCase.description)

  let result = testCase.result as HttpResult
  let expectedResult = testCase.expectedResult as HttpResult
  let resultData = result.data

  // expect(result.httpCode).to.equal(expectedResult.httpCode)
  if (result.httpCode !== expectedResult.httpCode) {
    logger.submitError('HttpCode', expectedResult.httpCode, result.httpCode)
    // throw new chai.AssertionError(`Error while running ${testCase.description}\n
    //   expected status: ${expectedResult.httpCode}\n
    //   actual status: ${result.httpCode}\n
    //   returned data: \n${JSON.stringify(resultData, null, 2)}`)
  }

  let expectedData = expectedResult.data
  if (expectedData) {
    compareObject('', expectedData, result.data)
  }

  logger.submitTestResult()
}

export default compareResult
