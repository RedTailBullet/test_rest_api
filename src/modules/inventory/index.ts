import { ModuleSuites } from '../../models/module_suites'
import createNormal from './create/normal'
import updateNormal from './update/normal'
import queryNormal from './query/normal'

const ms: ModuleSuites = {
  apiName: 'inventory',
  suites: [
    // createNormal,
    updateNormal
    // queryNormal
  ]
}


export default ms