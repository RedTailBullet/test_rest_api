import { CaseSetup } from '../../../../../test_runners/models'

let s: CaseSetup = {
  description: 'Setup 2: Create the category for update normal test parent',
  requestData: {
    payload: {
      name: {
        en: 'category for update normal test parent',
        zh_cn: '用于功能测试的category 父级'
      },
      description: {
        en: 'category for update normal test parent',
        zh_cn: '用于功能测试的category 父级'
      },
      slug: 'category-for-update-normal-test-parent',
      metaTitle: {
        en: 'category for update normal test parent',
        zh_cn: '用于功能测试的category 父级'
      },
      metaDescription: {
        en: 'category for update normal test parent',
        zh_cn: '用于功能测试的category 父级'
      },
      metaKeywords: {
        en: 'update normal test'
      }
    }
  }
}

export default s
