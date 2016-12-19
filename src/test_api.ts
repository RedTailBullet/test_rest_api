import * as axios from 'axios'

import * as config from './config'
import getAccessToken from './utilities/get_access_token'
import testCategories from './modules/categories'

describe('CTP API Test\n', function () {
  before(async function () {
    if (config.NEED_ACCESS_TOKEN) {
      const accessToken = await getAccessToken()
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    }
  })

  describe('Test Category API', function () {
     testCategories()
  })
})
