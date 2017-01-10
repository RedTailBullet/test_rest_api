import { TestCase, HttpResult } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '18. Add supported language with language code length 257',
  requestData: {
    payload: {
      version: 8,
      actions: [
        {
          action: 'addSupportLanguage',
          languageCode: 'w99g93760qEMnb9gCL6wiYNhNX7oDltmPQJPjG1Pacv5NSS49xQw024qtlsAVGujIwHfTx61smygmKP51PCknDDejinB1MJBCwMEmQ5ouSn4ozUPHqh6SrJgUfFInfJI7HGYacKsAVR1BPEw26JfLqNHwXiBzq2qe7988fnBxt3GLvFbgrr2Si3OdzegTP5alDXMBx6V8jxJI94uHstaGJmBOsEpGWvP14OcmhI4JEYJ2zOcdWe5PbWDiZaabq2A8'
        }
      ] 
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
