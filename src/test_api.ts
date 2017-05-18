import * as axios from 'axios'
import * as chai from 'chai'

import { ModuleSuites } from './test_runners/models/module_suites'
import * as config from './test_runners/utilities/get_configs'
import getAccessToken from './test_runners/utilities/get_access_token'
import reportError from './test_runners/utilities/report_error'
import runModule from './test_runners/run_module'
import compare from './test_runners/utilities/compare_object'

import testModules from '../test_modules'

before(async function() {
  if (config.getNeedAccessToken()) {
    const accessToken = await getAccessToken()
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  }
})

describe('CTP API Test\n', function() {
    // catch all uncaught errors here
  try {
      testModules.forEach(runModule)
  }
  catch (error) {
      console.log('Uncaught error in API Test, exiting...')
      reportError(error)
      process.exit(-1)
  }
})
