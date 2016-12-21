import * as Mocha from 'mocha'
let date = new Date()

let mocha: any = new Mocha ({
  timeout: 5000,
  reporter: 'mochawesome'
})

// To avoid typescript's type check
let reporterOptions = {
  reportDir: `../test_report/${date.toLocaleString().replace(/\//g, '-')}`,
  reportName: 'apiTestReport'
}

mocha.options.reporterOptions = reporterOptions

mocha.addFile('./test_api')
mocha.run()
