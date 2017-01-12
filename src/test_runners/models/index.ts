export type HttpMethod = 'get' | 'post' | 'delete' | 'put'

export interface RequestData {
  /**
   * the http method for api request. default method are in test suite.
   */
  method?: HttpMethod
  url?: string
  payload?: any
  params?: {[prop: string]: string|number|boolean}
  /**
   * the api name of this api, used to form the url.
   */
  apiName?: string
}

export interface EntityProps {
  'id'?: string,
  'version'?: number,
  [prop: string]: any
}

export interface HttpResult {
  httpCode: number
  /**
   * an output description of what should be expected in actual result
   * it usually goes like: 'Should return correct http code and data'
   * the default output is 'Should return correct http code and data'
   */
  description?: string
  data?: EntityProps
  /**
   * this Object storage the raw response from the server.
   */
  response?: Object
}

export interface TestBase {
  description: string
  requestData: RequestData
  /**
   * an optional config function that takes an array of setups.
   * @setups: the setups from this test case
   */
  config?: (setups?: CaseSetup[]) => void
  result?: HttpResult
}

export interface CaseSetup extends TestBase {
}

/**
 * distinguish it to not save result
 */
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
  expectedResult: HttpResult
}

export interface TestSuite {
  description: string
  suiteUrl?: string   // set at runtime
  apiName?: string
  testCases: TestCase[]
  setupMethod: HttpMethod   // must set method at suite level
  testCaseMethod: HttpMethod  // must set method at suite level
}
