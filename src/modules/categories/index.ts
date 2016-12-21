import { ModuleSuites } from '../../models/module_suites'
import createNormal from './create/normal'

const ms: ModuleSuites = {
  apiName: 'categories',
  suites: [createNormal]
}


export default ms