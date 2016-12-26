import * as configModel from './models/config'

export const USING_CONFIG = 'CTPConfig'

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
