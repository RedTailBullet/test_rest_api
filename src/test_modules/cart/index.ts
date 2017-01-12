import { ModuleSuites } from '../../test_runners/models/module_suites'
import createNormal from './create/normal'

const ms: ModuleSuites = {
  apiName: 'cart',
  suites: [createNormal]
}

export default ms