type HttpMethod = 'get' | 'post' | 'delete' | 'put'

export interface TestCase {
  description: string
  method?: HttpMethod
  url?: string
  payload?: any
  qs?: string
  result?: any
  params?: {[prop: string]: string|number|boolean}
  config?: (this: TestCase, testSuite: TestSuite) => void
}

export interface TestSuite {
  description: string
  setupMethod?: HttpMethod
  testCaseMethod?: HttpMethod
  defaultUrl?: string
  testCases: TestCase[]
  cleanups?: any
  setups?: TestCase[]
  url?: string
}