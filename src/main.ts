import * as Mocha from 'mocha'
let date = new Date()

let mocha: any = new Mocha ({
  timeout: 8000,
  reporter: 'mochawesome'
})

// To avoid typescript's type check
let reporterOptions = {
  reportDir: `../test_report/`,
  reportName: 'apiTestReport'
}

mocha.options.reporterOptions = reporterOptions

mocha.addFile('./test_api')
mocha.run()
