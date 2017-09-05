import {Logger, TestResults, TestResult, Result} from '../test_runners/models/result_logger'

let time = Date.now();

let logger: Logger = {
    timeStamp: time,
    testRan: 0,
    testPassed: 0,
    totalErrors: 0,
    testResults: {
        results: {}
    }
}

export function submitTestResult (testName: string) {
    if (logger.testResults.results.testName == undefined) {
        logger.testResults.results.testName = createNewTestResult (testName, true)
        logger.testPassed ++
    }
    logger.testRan ++
}

export function submitError (testName: string, error: string) {
    if (logger.testResults.results.testName == undefined) {
        logger.testResults.results.testName = createNewTestResult (testName, false)
    }
    let result = logger.testResults.results.testName
    if (result.errors == undefined) {
        result.errors = []
    }
    result.errors.push(error)
    logger.totalErrors ++
}

export function getLogs () {
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
