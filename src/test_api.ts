import * as axios from 'axios'

import * as config from './config'
import getAccessToken from './utilities/get_access_token'
import testCategories from './modules/categories'

import reportError from './utilities/report_error'

before(async function () {
  if (config.NEED_ACCESS_TOKEN) {
    const accessToken = await getAccessToken()
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  }
})

describe('CTP API Test\n', function () {

  // catch all uncaught errors here
  try {
    describe('Test Category API', function () {
      testCategories()
    })
    // more module tests here
 }
  catch (error) {
    console.log('Uncaught error in API Test, exiting...')
    reportError(error)
    process.exit(-1)
  }
})
