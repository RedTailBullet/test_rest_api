import * as chai from 'chai'

import * as logger from '../../test_result_logger/logger_main'

let expect = chai.expect

const IGNORED = ['id', 'createdAt', 'lastModifiedAt', 'orderHint']

function compare(formerLocation: string, ExpectedResults, ActualResults) {

  if (ActualResults === undefined) {
    // throw new chai.AssertionError(`${description} is undefined`)
    logger.submitError (formerLocation, ActualResults, ExpectedResults)
  }

  // compare properties
  let expectedProperties = Object.keys(ExpectedResults)
  for (let prop of expectedProperties) {
    const currentLocation = `${formerLocation} > ${prop}`

    let fields
    try {
      fields = getFields(prop, ExpectedResults, ActualResults)
    } catch (err) {
      // throw new chai.AssertionError(`${msg} ${err}`)
      logger.submitCustomizedError (currentLocation, err)
    }
    let expected = fields.expected
    let actual = fields.actual

    if (typeof expected === 'object') {
      compare(currentLocation, expected, actual)
    } else if (IGNORED.indexOf(prop) !== -1) {

      // expect(actual, msg).to.not.be.undefined
      if (actual === undefined) {
        logger.submitError (currentLocation, actual, expected)
      }
      continue
    } else if (actual === undefined) {
      // throw new chai.AssertionError(`${msg} is undefined in actual data`)
      logger.submitError (currentLocation, actual, expected)
    } else {
      // expect(actual, msg).to.equal(expected)
      if (actual !== expected) {
        logger.submitError (currentLocation, actual, expected)
      }
    }
  }
}

function getFields(prop, ExpectedResults, ActualResults) {
  const unOrderedArrayRule = /_UnOrdered$/
  let expected
  let actual

  expected = ExpectedResults[prop]
  if (unOrderedArrayRule.test(prop)) {
    prop = prop.replace(unOrderedArrayRule, '')
    actual = sortActual(expected, ActualResults[prop])
  } else {
    actual = ActualResults[prop]
  }
  return {
    expected,
    actual
  }
}

function isMatch(a, b) {
  if (typeof a === 'object') {
    if (a.key) {
      if (a.key === b.key) {
        return true
      }
    } else if (a.sku) {
      if (a.sku === b.sku) {
        return true
      }
    } else if (a.name) {
      if (a.name === b.name) {
        return true
      }
    } else if (a[0] === b[0]) {
      return true
    }
  } else {
    if (a === b) {
      return true
    }
  }
  return false
}

function sortActual(expected, actual) {
  const result: any = []
  let actualData = actual.slice()
  for (let data of expected) {
    let index
    let matchedFlag
    for (index = 0, matchedFlag = 0; index < actualData.length; index++) {
      if (isMatch(data, actualData[index])) {
        result.push(actualData[index])
        actualData.splice(index, 1)
        matchedFlag = 1
        break
      }
    }
    if (matchedFlag === 0) {
      throw `Array doesn't match in actual data\n
        expected\n
        ${JSON.stringify(data)}\n
        to be included in\n
        ${JSON.stringify(actual)}`
    }
  }
  return result
}

export default compare
