import { TestCase, HttpResult, CaseSetup } from '../../../../../test_runners/models'
import s01 from '../setups/s01'

const s: CaseSetup[] = [s01]

const c: TestCase = {
  description: '3. Set description',
  setups: s,
  config: function (this: TestCase) {
    let result = s01.result as HttpResult
    if (result.data) {
      this.requestData.url = `${this.requestData.url}/${result.data.id}`
    }
  },
  requestData: {
    payload: {
      version: 0,
      actions: [
        {
          action: 'setDescription',
          description: {
            en: 'category for update normal test updated',
            zh_cn: '用于功能测试的category 更新后'
          }
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 200,
    data: {
      version: 1,
      name: {
        en: 'category for update normal test',
        zh_cn: '用于功能测试的category'
      },
      description: {
        en: 'category for update normal test updated',
        zh_cn: '用于功能测试的category 更新后'
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
      },
      id: '',
      lastModifiedAt: '',
      createdAt: ''
    }
  }
}

export default c
