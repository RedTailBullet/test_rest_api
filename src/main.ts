import * as Mocha from 'mocha'
let date = new Date()

let mocha = new Mocha({ 
  timeout: 5000,
  reporter: 'mochawesome' 
})

mocha['reporterOptions'] = {
  reportDir: `../../testReport/${date.toLocaleString().replace(/[\/:]|.?\s/g, '-')}`,
  reportName: 'apiTestReport'
}

mocha.addFile('./testRestApi')
mocha.run()
