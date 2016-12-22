import { ModuleSuites } from '../../models/module_suites'
import createError from './create/error'

const ms: ModuleSuites = {
  apiName: 'product-types',
  suites: [createError]
}


export default ms