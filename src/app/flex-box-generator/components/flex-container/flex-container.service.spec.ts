import { TestBed } from '@angular/core/testing'

import { FlexContainerService } from './flex-container.service'

describe('FlexContainerService', () => {
  let service: FlexContainerService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(FlexContainerService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
