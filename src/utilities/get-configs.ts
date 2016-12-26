import * as config from '../config'

const usingConfig = config.USING_CONFIG
const configSet = config[usingConfig]

function getBasicUrl () {
  let defaultUrl = configSet.BASEURL
  if (configSet.PROJECT_NAME) {
    defaultUrl += `/${configSet.PROJECT_NAME}`
  }
  return defaultUrl
}

function getNeedAccessToken () {
  return configSet.NEED_ACCESS_TOKEN
}

function getClientID () {
  return configSet.CLIENT_ID
}

function getClientSecret () {
  return configSet.CLIENT_SECRET
}

function getProjectName () {
  return configSet.PROJECT_NAME
}

export { getBasicUrl, getNeedAccessToken, getClientID, getClientSecret, getProjectName }
