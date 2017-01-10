import { TestCase, HttpResult, CaseSetup } from '../../../../../test_runners/models'
import s01 from '../setups/s01'
import s02 from '../setups/s02'

const s: CaseSetup[] = [s01, s02]

const c: TestCase = {
  description: '4. Change parent',
  setups: s,
  config: function (this: TestCase) {
    let result = s01.result as HttpResult
    if (result.data) {
      this.requestData.url = `${this.requestData.url}/${result.data.id}`
    }
    result = s02.result as HttpResult
    if (result.data) {
      let resultID = result.data.id
      this.requestData.payload.actions[0].parent.id = resultID
      if (this.expectedResult.data) {
        this.expectedResult.data['parent'].id = resultID
        this.expectedResult.data['ancestors'][0].id = resultID
      }
    }
  },
  requestData: {
    payload: {
      version: 0,
      actions: [
        {
          action: 'setParent',
          parent: {
            typeId: 'category',
            id: ''
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
      },
      parent: {
        typeId: 'category',
        id: ''
      },
      ancestors: [
        {
          typeId: 'category',
          id: ''
        }
      ],
      id: '',
      lastModifiedAt: '',
      createdAt: ''
    }
  }
}

export default c
