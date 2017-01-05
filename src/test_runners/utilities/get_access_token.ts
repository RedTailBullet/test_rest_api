import * as request from 'axios'
import * as uuid from 'uuid'
import * as config from './get_configs'
import reportError from '../utilities/report_error'

const client_id = config.getClientID()
const client_secret = config.getClientSecret()
const project_key = config.getProjectName()

const authUrl = `https://${client_id}:${client_secret}` +
  `@auth.sphere.io/oauth/${project_key}/anonymous/token`
let uniqueID = uuid.v4()

export default async function () {
  const options = setOptions()
  try {
    const resp = await request(options)
    const accessToken = resp.data['access_token']
    return accessToken
  } catch (err) {
    console.log('Exception in GetAccessToken, please check your CTP configurations.')
    reportError(err)
    process.exit(-1)
  }
}

function setOptions() {
  let options: Axios.AxiosXHRConfig<string> = {
    method: 'POST',
    url: authUrl,
    params: {
      grant_type: 'client_credentials',
      scope: `manage_project:${project_key}`,
      anonymous_id: `${uniqueID}`
    }
  }
  return options
}

