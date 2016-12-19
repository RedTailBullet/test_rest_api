import runSuite from '../../utilities/run_suite'
import functionForCreate from './function_for_create/suites'

let apiName = 'categories'
export default function() {
  runSuite(apiName, functionForCreate)
}

