import { CaseSetup, HttpResult } from '../../../../../test_runners/models'

import s2 from './s02'

const s: CaseSetup = {
  description: '3. Create child2 category for update error test',
  config: function (this: CaseSetup) {
    const result = s2.result as HttpResult
    const data = result.data
    if (data) {
      this.requestData.payload.parent.id = data.id
    }
  },
  requestData: {
    payload: {
      name: {
        en: 'category for update error test child2',
        zh_cn: '升级错误测试用category child2'
      },
      description: {
        en: 'category for update error test child2',
        zh_cn: '升级错误测试用category child2'
      },
      parent: {
        typeId: 'category',
        id: ''
      },
      slug: 'category-for-update-error-test-child2',
      externalId: 'category for update error test child2',
      metaTitle: {
        en: 'category for update error test child2',
        zh_cn: '升级错误测试用category child2'
      },
      metaDescription: {
        en: 'this is a category for update error test child2',
        zh_cn: '这是一个用于升级错误测试的category child2'
      },
      metaKeywords: {
        en: 'test update error child2',
        zh_cn: '升级 错误 测试 子级2'
      }
    }
  }
}

export default s
