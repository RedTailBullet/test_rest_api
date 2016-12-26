import * as request from 'axios'
import { RequestData } from '../models'

/**
 * convert HTTP response errors into normal response result 
 */
export default async function callApi(requestData: RequestData) {
  const options = setOptions(requestData)
  let resp
  try {
    resp = await request(options)
  }
  catch (err) {
    if (err.response) {
      resp = err.response
    } 
    else {
      throw err
    }
  }
  return resp
}

function setOptions (requestData: RequestData) {
  const options: Axios.AxiosXHRConfig<string> = {
    url: requestData.url as string,
    headers: { 'Content-Type': 'application/json' }
  }

  if (requestData.payload) {
    options.data = requestData.payload
  }

  options.method = requestData.method

  if (requestData.params) {
    options.params = requestData.params
  }

  return options
}
