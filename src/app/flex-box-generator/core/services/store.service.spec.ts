import { TestBed } from '@angular/core/testing';

import { StoreProvider } from './store.provider';

describe('StoreService', () => {
  let service: StoreProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
