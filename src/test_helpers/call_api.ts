import * as request from 'axios'
import { RequestData } from '../models'
import * as config from '../config'

async function callApi(requestData: RequestData): Promise<Axios.AxiosXHR<string>> {
  let options: Axios.AxiosXHRConfig<string> = {
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

  return request(options)
}

export default callApi
