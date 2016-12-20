import runSuite from '../../test_helpers/run_suite'
import functionForCreate from './create/normal'

const apiName = 'categories'
export default function() {
  runSuite(apiName, functionForCreate)
}
