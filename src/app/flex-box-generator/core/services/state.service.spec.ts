import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';
import { Slice, Store } from './store.provider';
import { Observable, of } from 'rxjs';
import { FLEX_ITEMS } from '../fixtures/flex-items';
import { FlexItem } from '../../components/flex-items/flex-item.model';

let mockStore = class implements Partial<Store> {
  value: FlexItem[] = FLEX_ITEMS.flexItems;
  select(): Observable<any> {
    return of(FLEX_ITEMS.flexItems as FlexItem[]);
  }
  set() {
    return of(FLEX_ITEMS.flexItems as FlexItem[]);
  }
  get() {
    return of(FLEX_ITEMS as Slice<FlexItem[]>);
  }
};

const newFlexItem = new FlexItem({
  content: 'Item 1',
  style: { backgroundColor: 'red' },
});

fdescribe('StateService', () => {
  let stateService: StateService;
  let storeProvider: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [StateService] });

    storeProvider = new Store();
    stateService = new StateService(storeProvider);
    spyOn(storeProvider, 'select').and.returnValue(of(FLEX_ITEMS.flexItems));
    spyOn(storeProvider, 'set');
  });

  it('should be created', () => {
    expect(stateService).toBeTruthy();
  });

  it('#fetchState should return a slice of state', () => {
    stateService.fetchState<FlexItem[]>('flexItems').subscribe((items) => {
      expect(items).toEqual(FLEX_ITEMS.flexItems);
    });
  });

  it('#get should return a slice of state', () => {
    stateService.get<FlexItem[]>('flexItems').subscribe((items) => {
      expect(items).toEqual(FLEX_ITEMS.flexItems);
    });
  });

  it('#set should set state', () => {
    stateService.set('flexItems', [newFlexItem] as FlexItem[]);
    expect(storeProvider.set).toHaveBeenCalled();
  });
});
