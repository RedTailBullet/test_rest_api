import * as configModel from './test_runners/models/config'

export const USING_CONFIG = 'LocalConfig'

export const CTPConfig: configModel.config = {
  BASEURL: `https://api.sphere.io`,
  NEED_ACCESS_TOKEN: true,
  CLIENT_ID: process.env.CTP_CLIENT_ID,
  CLIENT_SECRET: process.env.CTP_CLIENT_SECRET,
  PROJECT_NAME: process.env.CTP_PROJECT_KEY
}

export const LocalConfig: configModel.config = {
  BASEURL: 'http://localhost:8088',
  NEED_ACCESS_TOKEN: false
}

export const LocalConfig2: configModel.config = {
  BASEURL: 'http://192.168.8.151:8088',
  NEED_ACCESS_TOKEN: false
}
