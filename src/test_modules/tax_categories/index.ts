import { ModuleSuites } from '../../test_runners/models/module_suites'
import createNormal from './create/normal'
import queryNormal from './query/normal'

const ms: ModuleSuites = {
  apiName: 'tax-categories',
  suites: [
    createNormal,
    queryNormal
  ]
}


export default ms