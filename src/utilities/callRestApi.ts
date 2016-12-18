import * as rp from 'request-promise'
import { TestCase } from '../models'
import getAccessToken from './getAccessToken'
import * as config from '../config'

export default async function (testCase: TestCase): Promise<any> {
  let options: any = {
    uri: testCase.url,
    resolveWithFullResponse: true,
    json: true
  }

  if (testCase.payload) {
    options.body = testCase.payload
  }

  if (config.NEED_ACCESS_TOKEN) {
    let accessTokenHeader = await getAccessToken()
    console.log(`at is ${accessTokenHeader}`)
    options.headers = accessTokenHeader
  }

  if (!testCase.method) {
    testCase.method = 'get'
  }

  return rp[testCase.method](options)
    .catch((err) => {
      throw err
    })
}
