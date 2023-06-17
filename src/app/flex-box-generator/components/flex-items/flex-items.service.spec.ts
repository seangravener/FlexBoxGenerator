import { TestBed, fakeAsync, flush, flushMicrotasks, tick, waitForAsync } from '@angular/core/testing';

import { FlexItemsService } from './flex-items.service';
import { StateService } from '../../core/services/state.service';
import { FLEX_ITEMS } from '../../core/fixtures/flex-items';
import { from, of, tap } from 'rxjs';
import { StoreProvider } from '../../core/services/store.provider';
import { FlexItem } from './flex-item.model';
import { FLEX_ITEM } from './flex-item.constants';

fdescribe('FlexItemsService', () => {
  let flexItemsService: FlexItemsService;
  let stateService: StateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateService, FlexItemsService, StoreProvider],
    });

    stateService = new StateService(new StoreProvider());
    flexItemsService = new FlexItemsService(stateService);

    TestBed.configureTestingModule({});
    flexItemsService = TestBed.inject(FlexItemsService);
  });

  afterEach(fakeAsync(() => {
    flush();
  }));

  it('should be created', () => {
    expect(flexItemsService).toBeInstanceOf(FlexItemsService);
  });

  it('should test some asynchronous code', fakeAsync(() => {
    let testObservable = from(Promise.resolve(true));
    let flag = false;
    testObservable.subscribe((result) => {
      flag = true;
    });
    flushMicrotasks();
    expect(flag).toBe(true); // PASSES
  }));

  it('should have a default state', fakeAsync(() => {
    const result: [FlexItem[]] = [[]] as [FlexItem[]];
    let result2: FlexItem[] = []
    let spy = spyOn(stateService, 'get').and.returnValue(of(FLEX_ITEMS));

    flexItemsService.flexItems$.pipe(tap(console.log)).subscribe((items) => {
      result2 = items;
    });

    // result2 = FLEX_ITEMS
    tick(1000);
    // flushMicrotasks()
    // console.log(result2)
    expect(stateService.get).toHaveBeenCalled()
    // expect(result2).toBe(FLEX_ITEMS);

  }));
});
