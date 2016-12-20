export type HttpMethod = 'get' | 'post' | 'delete' | 'put'

export interface RequestData {
  method?: HttpMethod
  url?: string
  payload?: any
  params?: {[prop: string]: string|number|boolean}
}

export interface HttpResult {
  httpCode: number
  data?: any 
}

export interface TestBase {
  description: string
  requestData: RequestData

  // an optional config function that takes an array of setups 
  config?: (sources?: CaseSetup[]) => void
  result?: HttpResult
  expectedResult?: HttpResult
}

export interface CaseSetup extends TestBase {
}

/**
 * A test case may have setups and cleanups. 
 */
export interface TestCase extends TestBase {
  setups?: CaseSetup[]
  cleanup?: () => void
}

export interface TestSuite {
  description: string
  setupMethod: HttpMethod
  testCaseMethod: HttpMethod
  suiteUrl: string
  testCases: TestCase[]
}
