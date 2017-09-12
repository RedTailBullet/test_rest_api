import { ModuleSuites } from '../../test_runners/models/module_suites'
import updateNormal from './update/normal'
import updateError from './update/error'

const ms: ModuleSuites = {
  apiName: 'projects/international',
  suites: [
    updateNormal,
    // updateError,
  ]
}

export default ms