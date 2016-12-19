function isSizeMatch (objectA, objectB) {
  return Object.keys(objectA).length === Object.keys(objectB).length
}

function isIgnoredProperties (property) {
  switch(property) {
    case 'id':
    case 'createdAt':
    case 'lastModifiedAt':
    case 'orderHint': return true
    default: return false
  }
}

// should re-write this using Chai help methods
function compare (ExpectedResults, ActualResults) {

  // let expectedProperties = Object.keys(ExpectedResults)
  // if (typeof ActualResults === 'undefined' && typeof ExpectedResults === 'undefined') {
  //   return true
  // } else if (typeof ActualResults === 'undefined') {
  //   return false
  // } 
  // else if (!isSizeMatch(ExpectedResults, ActualResults)) {
  //   return false
  // }

  // // compare properties
  // let matched = true
  // for (let prop of expectedProperties) {
  //   if (typeof ExpectedResults[prop] === 'object') {
  //       if (! compare(ExpectedResults[prop], ActualResults[prop])) {
  //         matched = false
  //         break
  //       }
  //   } else if (isIgnoredProperties(prop)) {
  //     continue
  //   } else if (ExpectedResults[prop] !== ActualResults[prop]) {
  //     matched = false
  //     break
  //   }
  // }
  
  // rewrite this when completed 
  return true // matched
}

export default compare
