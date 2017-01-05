import { TestCase } from '../../../../../models'

const c: TestCase = {
  description: '21. Create product type with name too long in attribute definition draft',
  requestData: {
    payload: {
      'name': 'error test product type attribute definition name too short',
      'description': 'error test product type attribute definition name too short',
      'attributes': [
        {
          'type': {
            'name': 'text'
          },
          'name': 'oiqsq6rHskFOzn4PNtGkTZAVJroAEQRuT2n7iiDY6xAsN5ViELsiyhEl3KTG78drcsCns2cSL5TIPXv6j2xeG5AUiPOLTZMoCtPxN5FQqhjBw7yNPabJOmXdVJk925i9Vz2NVCMuC2DaqlIiNT60Q0y1h9hVTnVRGDgSlLBBUzebfqR3YqhuaY1RFtTNs27a4HoSqz7nnQy8F1iZl1nBXPnynydAA9wZX7xXiQNQnGyqYcWDFGNT113HKI7qJL2PE',
          'label': {
            'en': 'error test attribute definition name too long'
          },
          'isRequired': false
        }
      ]
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
