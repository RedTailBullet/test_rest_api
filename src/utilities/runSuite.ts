import { expect } from 'chai'

import callApi from './callRestApi'
import setupSuite from './setupSuite'
import cleanSuite from './cleanSuite'

import runCase from './runCase'
import * as config from '../config'
import { TestSuite } from '../models'

let isSizeMatch = function (objectA, objectB) {
  return Object.keys(objectA).length === Object.keys(objectB).length
}

let match = function (ExpectedResults, ActualResults) {
  let expectedProperties = Object.keys(ExpectedResults)
  if (typeof ActualResults === 'undefined' && typeof ExpectedResults === 'undefined') {
    return true
  } else if (typeof ActualResults === 'undefined') {
    throw (`Lacking result in ActualResults`)
  } 
  else if (!isSizeMatch(ExpectedResults, ActualResults)) {
    throw (`Size doesn't match!`)
  }
  for (let value of expectedProperties) {
    if (typeof ExpectedResults[value] === 'object') {
      try {
        match(ExpectedResults[value], ActualResults[value])
      } catch (err) {
        throw (`${value} -> ${err}`)
      }
    } else if (config.isExpectedProperties(value)) {
      continue
    } else if (ExpectedResults[value] !== ActualResults[value]) {
      throw (`'${value}': '${ActualResults[value]}' doesn't match expected '${value}': '${ExpectedResults[value]}'`)
    }
  }
  return true
}

export default async function (testSuite: TestSuite) {

  if (testSuite.setups) {
    before(`setup ${testSuite.description}`, async function() {
      await setupSuite(testSuite)
    })
  }

  describe(testSuite.description, async function () {
    testSuite.testCases.forEach((testCase) => {
      let result = testCase.result
      it(testCase.description, async function () {
        let resp = await runCase(testCase, testSuite)
        expect(resp.statusCode).to.be(result.expectedHttpCode)
        try {
          expect(match(resp.body, result.actualData)).to.be.true
        } catch (err) {
          throw (`${testCase.description} -> ${err}`)
        }
      })
    })
  })

  if (testSuite.cleanups) {
    after('Cleaning up', async function () {
      await cleanSuite(testSuite)
    })
  }
}
