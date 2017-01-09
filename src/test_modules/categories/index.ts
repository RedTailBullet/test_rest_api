import { ModuleSuites } from '../../test_runners/models/module_suites'
import createNormal from './create/normal'
import createError from './create/error'
import deleteNormal from './delete/normal'
import deleteError from './delete/error'
import queryNormal from './query/normal'
import queryError from './query/error'
import updateNormal from './update/normal'

const ms: ModuleSuites = {
  apiName: 'categories',
  suites: [
    updateNormal
  ]
}

export default ms