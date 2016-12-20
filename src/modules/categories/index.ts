import runSuite from '../../test_helpers/run_suite'
import functionForCreate from './function_for_create/suite'

const apiName = 'categories'
export default function() {
  runSuite(apiName, functionForCreate)
}
