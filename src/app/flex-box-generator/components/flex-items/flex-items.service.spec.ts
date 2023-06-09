import { TestBed } from '@angular/core/testing';

import { FlexItemsService } from './flex-items.service';

describe('FlexItemsService', () => {
  let service: FlexItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlexItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
