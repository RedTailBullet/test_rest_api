import * as rp from 'request-promise'
import * as uuid from 'uuid'
import * as config from '../config'

const client_id = process.env[config.ENV_CLIENT_ID_NAME]
const client_secret = process.env[config.ENV_CLIENT_SECRET_NAME]
const project_key = process.env[config.ENV_PROJECT_KEY_NAME]

const tokenBaseUrl = `https://${client_id}:${client_secret}@auth.sphere.io/`
const tokenTailUrl = `oauth/${project_key}/anonymous/token`
let uniqueID = uuid.v4()

let accessToken

async function getAccessToken() {
  // we cache it 
  if (!accessToken) {
    const options = setOptions()
    try {
      const resp = await rp(options)
      const info = JSON.parse(resp)
      accessToken = {'Authorization': `Bearer ${info.access_token}`}
    } catch (err) {
      console.log(`Exception in GetAccessToken: ${err}`)
      process.exit(-1)
    }
  }
  return accessToken
}

function setOptions() {
  let options: rp.OptionsWithUri = {
    method: 'POST',
    uri: `${tokenBaseUrl}${tokenTailUrl}`,
    form: {
      grant_type: 'client_credentials',
      // scope: `manage_project:${project_key}`,
      scope: `manage_project:${project_key} manage_types:${project_key} manage_products:${project_key}`,
      anonymous_id: `${uniqueID}`
    }
  }
  return options
}

export default getAccessToken
