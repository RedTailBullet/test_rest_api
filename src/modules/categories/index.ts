import { ModuleSuites } from '../../models/module_suites'
import createNormal from './create/normal'
import createError from './create/error'
import deleteNormal from './delete/normal'
import deleteError from './delete/error'
import queryNormal from './query/normal'
import queryError from './query/error'

const ms: ModuleSuites = {
  apiName: 'categories',
  suites: [queryNormal, queryError]
}

export default ms