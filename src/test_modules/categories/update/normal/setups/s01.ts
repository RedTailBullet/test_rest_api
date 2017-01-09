import { CaseSetup } from '../../../../../test_runners/models'

let s: CaseSetup = {
  description: 'Setup 1: Create the category for update normal test',
  requestData: {
    payload: {
      name: {
        en: 'category for update normal test',
        zh_cn: '用于功能测试的category'
      },
      description: {
        en: 'category for update normal test',
        zh_cn: '用于功能测试的category'
      },
      slug: 'category-for-update-normal-test',
      metaTitle: {
        en: 'category for update normal test',
        zh_cn: '用于功能测试的category'
      },
      metaDescription: {
        en: 'category for update normal test',
        zh_cn: '用于功能测试的category'
      },
      metaKeywords: {
        en: 'update normal test'
      }
    }
  }
}

export default s
