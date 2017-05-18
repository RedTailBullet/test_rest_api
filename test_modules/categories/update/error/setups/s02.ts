import { CaseSetup, HttpResult } from '../../../../../test_runners/models'

import s1 from './s01'

const s: CaseSetup = {
  description: '2. Create child1 category for update error test',
  config: function (this: CaseSetup) {
    const result = s1.result as HttpResult
    const data = result.data
    if (data) {
      this.requestData.payload.parent.id = data.id
    }
  },
  requestData: {
    payload: {
      name: {
        en: 'category for update error test child1',
        zh_cn: '升级错误测试用category child1'
      },
      description: {
        en: 'category for update error test child1',
        zh_cn: '升级错误测试用category child1'
      },
      parent: {
        typeId: 'category',
        id: ''
      },
      slug: 'category-for-update-error-test-child1',
      externalId: 'category for update error test child1',
      metaTitle: {
        en: 'category for update error test child1',
        zh_cn: '升级错误测试用category child1'
      },
      metaDescription: {
        en: 'this is a category for update error test child1',
        zh_cn: '这是一个用于升级错误测试的category child1'
      },
      metaKeywords: {
        en: 'test update error child1',
        zh_cn: '升级 错误 测试 子级1'
      }
    }
  }
}

export default s
