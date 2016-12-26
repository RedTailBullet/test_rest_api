export type HttpMethod = 'get' | 'post' | 'delete' | 'put'

export interface RequestData {
  method?: HttpMethod
  url?: string
  payload?: any
  params?: {[prop: string]: string|number|boolean}
}

export interface EntityProps {
  'id': string,
  'version': number,
  [prop: string]: any
}

export interface HttpResult {
  httpCode: number
  data?: EntityProps 
}

export interface TestBase {
  description: string
  requestData: RequestData

  // an optional config function that takes an array of setups 
  config?: (setups?: CaseSetup[]) => void
  result?: HttpResult
  expectedResult?: HttpResult
  apiName?: string
}

export interface CaseSetup extends TestBase {
}

// distinguish it to not save result
export class Cleanup implements TestBase {
  constructor(public description: string, public requestData: RequestData) {
    this.description = description
    this.requestData = requestData
  }
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
  suiteUrl?: string   // set at runtime
  apiName?: string
  testCases: TestCase[]
  setupMethod: HttpMethod   // must set method at suite level
  testCaseMethod: HttpMethod  // must set method at suite level
}
