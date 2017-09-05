export type Result = 'pass' | 'error'

export interface TestResult {
    testName: string
    testResult: Result
    errors?: string []
}

export interface TestResults {
    results: {
        [prop: string]: TestResult
    }
}

export interface Logger {
    timeStamp: number
    testRan: number
    testPassed: number
    totalErrors: number
    testResults: TestResults
}
