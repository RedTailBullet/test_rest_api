export type Result = 'pass' | 'error'

export interface ErrorTamplate {
    errorLocation: string
    expectedValue?: any
    returnedValue?: any
    errorMessage?: string
}

export interface TestResult {
    testName: string
    testResult: Result
    errors?: ErrorTamplate []
}

export interface TestResults {
    [prop: string]: TestResult
}

export interface Logger {
    timeStamp: number
    testRan: number
    testPassed: number
    totalErrors: number
    testResults: TestResults
}
