import * as Mocha from 'mocha'
let date = new Date()

let mocha = new Mocha({ 
  timeout: 15000,
  reporter: 'mochawesome'
})

mocha.addFile('./test_api')
mocha.run()
