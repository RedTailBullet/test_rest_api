import * as request from 'axios'
import * as uuid from 'uuid'
import * as config from '../config'
import reportError from '../utilities/report_error'

const client_id = process.env[config.ENV_CLIENT_ID_NAME]
const client_secret = process.env[config.ENV_CLIENT_SECRET_NAME]
const project_key = process.env[config.ENV_PROJECT_KEY_NAME]

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

