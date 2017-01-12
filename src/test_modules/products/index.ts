import { ModuleSuites } from '../../test_runners/models/module_suites'
import createNormal from './create/normal'

const ms: ModuleSuites = {
  apiName: 'products',
  suites: [createNormal]
}

export default ms