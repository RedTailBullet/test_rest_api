import { ModuleSuites } from '../../models/module_suites'
import createError from './create/error'
import createNormal from './create/normal'
import deleteNormal from './delete/normal'
import deleteError from './delete/error'
import updateNormal from './update/normal'

const ms: ModuleSuites = {
  apiName: 'product-types',
  suites: [
    // createError,
    // createNormal,
    // deleteNormal,
    // deleteError,
    updateNormal
  ]
}


export default ms