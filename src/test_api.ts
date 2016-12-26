import * as axios from 'axios'

import { ModuleSuites } from './models/module_suites'
import * as config from './config'
import getAccessToken from './utilities/get_access_token'
import reportError from './utilities/report_error'
import runModule from './test_helpers/run_module'

/***************import test modules below *******************/
import categories from './modules/categories'
import productType from './modules/product_types'
let modules: ModuleSuites[] = [
  productType,
  // categories
]
/***************import test modules above *******************/

before(async function () {
  const usingConfig = config.USING_CONFIG
  if (config[usingConfig].NEED_ACCESS_TOKEN) {
    const accessToken = await getAccessToken()
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  }
})

describe('CTP API Test\n', function () {

  // catch all uncaught errors here
  try {
    modules.forEach(runModule)
 }
  catch (error) {
    console.log('Uncaught error in API Test, exiting...')
    reportError(error)
    process.exit(-1)
  }
})
