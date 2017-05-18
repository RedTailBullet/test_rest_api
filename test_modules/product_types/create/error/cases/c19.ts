import { TestCase } from '../../../../../test_runners/models'

const c: TestCase = {
  description: '19. Create product type with key too long',
  requestData: {
    payload: {
      'name': 'error test product type key too long',
      'description': 'error test product type key too long',
      'key': 'oiqsq6rHskFOzn4PNtGkTZAVJroAEQRuT2n7iiDY6xAsN5ViELsiyhEl3KTG78drcsCns2cSL5TIPXv6j2xeG5AUiPOLTZMoCtPxN5FQqhjBw7yNPabJOmXdVJk925i9Vz2NVCMuC2DaqlIiNT60Q0y1h9hVTnVRGDgSlLBBUzebfqR3YqhuaY1RFtTNs27a4HoSqz7nnQy8F1iZl1nBXPnynydAA9wZX7xXiQNQnGyqYcWDFGNT113HKI7qJL2PE'
    }
  },
  expectedResult: {
    httpCode: 400
  }
}

export default c
