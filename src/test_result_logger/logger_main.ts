import {Logger, TestResults, TestResult, Result, ErrorTamplate} from '../test_runners/models/result_logger'

let time = Date.now()

let currentTestName: string = ''

let logger: Logger = {
    timeStamp: time,
    testRan: 0,
    testPassed: 0,
    totalErrors: 0,
    testResults: {}
}

export function submitTestResult () {
    if (logger.testResults[currentTestName] == undefined) {
        logger.testResults[currentTestName] = createNewTestResult (currentTestName, true)
        logger.testPassed ++
    }
    logger.testRan ++
    currentTestName = ''
}

function logError (error: ErrorTamplate) {

    // console.log(error)
    
    if (logger.testResults[currentTestName] == undefined) {
        logger.testResults[currentTestName] = createNewTestResult (currentTestName, false)
    }
    let result = logger.testResults[currentTestName]
    if (result.errors == undefined) {
        result.errors = []
    }
    result.errors.push(error)
    logger.totalErrors ++
}

export function submitError (errorLocation: string, returnedValue: any, expectedValue: any) {
    let error: ErrorTamplate = {
        errorLocation: errorLocation,
        returnedValue: returnedValue,
        expectedValue: expectedValue
    }
    logError(error)
}

export function submitCustomizedError (errorLocation: string, errorMessage: string) {
    let error: ErrorTamplate = {
        errorLocation: errorLocation,
        errorMessage: errorMessage
    }
    logError(error)
}

export function setCurrentTestName (testName: string) {
    currentTestName = testName
}

export function getLogs () {
    return logger
}

export function getLogger () {
    return logger
}

function createNewTestResult (testName: string, isPasssed: boolean) {
    let testResult: Result
    if (isPasssed === true) {
        testResult = 'pass'
    }
    else {
        testResult = 'error'
    }
    let result: TestResult = {
        testName: testName,
        testResult: testResult
    }
    return result
}
