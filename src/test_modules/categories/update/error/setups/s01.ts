import { CaseSetup } from '../../../../../test_runners/models'

const s: CaseSetup = {
  description: '1. Create category for update error test',
  requestData: {
    payload: {
      name: {
        en: 'category for update error test',
        zh_cn: '升级错误测试用category'
      },
      description: {
        en: 'category for update error test',
        zh_cn: '升级错误测试用category'
      },
      slug: 'category-for-update-error-test',
      externalId: 'category for update error test',
      metaTitle: {
        en: 'category for update error test',
        zh_cn: '升级错误测试用category'
      },
      metaDescription: {
        en: 'this is a category for update error test',
        zh_cn: '这是一个用于升级错误测试的category'
      },
      metaKeywords: {
        en: 'test update error',
        zh_cn: '升级 错误 测试'
      }
    }
  }
}

export default s
