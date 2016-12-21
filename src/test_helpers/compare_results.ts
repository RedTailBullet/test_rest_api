import * as chai from 'chai'
let expect = chai.expect

function isSizeMatch(objectA, objectB) {
  return Object.keys(objectA).length === Object.keys(objectB).length
}

function isIgnoredProperties(property) {
  switch (property) {
    case 'id':
    case 'createdAt':
    case 'lastModifiedAt':
    case 'orderHint': return true
    default: return false
  }
}

// should re-write this using Chai help methods
function compare(description: string, ExpectedResults, ActualResults) {

  let errorMsg = description
  expect(isSizeMatch(ExpectedResults, ActualResults), `${errorMsg} -> size doesn't match`).to.be.true

  // compare properties
  let matched = true
  let expectedProperties = Object.keys(ExpectedResults)
  for (let prop of expectedProperties) {
    if (typeof ExpectedResults[prop] === 'object') {
      compare(`${errorMsg} -> ${prop}`, ExpectedResults[prop], ActualResults[prop])
    } else if (isIgnoredProperties(prop)) {
      continue
    } else {
      expect(ExpectedResults[prop], `${errorMsg} -> ${prop} -> value doesn't match`).to.equal(ActualResults[prop])
    }
  }
}

export default compare
