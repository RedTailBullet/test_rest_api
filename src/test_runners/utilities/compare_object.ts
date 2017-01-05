import * as chai from 'chai'
let expect = chai.expect

const IGNORED = [ 'id', 'createdAt', 'lastModifiedAt', 'orderHint']

function compare(description: string, ExpectedResults, ActualResults) {
  let errorMsg = description

  // compare properties
  let expectedProperties = Object.keys(ExpectedResults)
  for (let prop of expectedProperties) {
    const expected = ExpectedResults[prop]
    const actual =  ActualResults[prop]
    const msg = `${errorMsg} > ${prop}`
    
    if (typeof expected === 'object') {
      compare(msg, expected, actual)
    } else if (IGNORED.indexOf(prop) !== -1) {
      expect(actual, msg).to.not.be.undefined
      continue
    } else if (actual === undefined) {
      throw new chai.AssertionError(`${msg} is undefined in actual data`)
    } else {
      expect(actual, msg).to.equal(expected)
    }
  }
}

export default compare
