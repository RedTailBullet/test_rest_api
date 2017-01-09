import * as axios from 'axios'
import * as chai from 'chai'

import { ModuleSuites } from './test_runners/models/module_suites'
import * as config from './config'
import getAccessToken from './test_runners/utilities/get_access_token'
import reportError from './test_runners/utilities/report_error'
import runModule from './test_runners/run_module'
import compare from './test_runners/utilities/compare_object'

/***************import test modules below *******************/
import categories from './test_modules/categories'
// import productType from './test_modules/product_types'
// import inventory from './test_modules/inventory'
// import taxCategories from './test_modules/tax_categories'
let modules: ModuleSuites[] = [
    // productType
    categories,
    // inventory
    // taxCategories
]
/***************import test modules above *******************/

before(async function() {
  const usingConfig = config.USING_CONFIG
  if (config[usingConfig].NEED_ACCESS_TOKEN) {
    const accessToken = await getAccessToken()
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  }
})

describe('CTP API Test\n', function() {
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
