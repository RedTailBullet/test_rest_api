import { ModuleSuites } from '../../test_runners/models/module_suites'
import createNormal from './create/normal'

const ms: ModuleSuites = {
  apiName: 'zones',
  suites: [createNormal]
}

export default ms