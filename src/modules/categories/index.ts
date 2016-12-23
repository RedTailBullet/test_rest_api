import { ModuleSuites } from '../../models/module_suites'
import createNormal from './create/normal'
import createError from './create/error'

const ms: ModuleSuites = {
  apiName: 'categories',
  suites: [createError]
}


export default ms