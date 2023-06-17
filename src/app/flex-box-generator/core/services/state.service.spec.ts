import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { StateService } from './state.service';
import { StoreProvider } from './store.provider';
import { FlexItem } from '../../components/flex-items/flex-item.model';
import { FLEX_ITEMS } from '../fixtures/flex-items';


const newFlexItem = new FlexItem({
  content: 'Item 1',
  style: { backgroundColor: 'red' },
});

fdescribe('StateService', () => {
  let stateService: StateService;
  let storeProvider: StoreProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [StateService] });

    storeProvider = new StoreProvider();
    stateService = new StateService(storeProvider);
    spyOn(storeProvider, 'select').and.returnValue(of(FLEX_ITEMS));
    spyOn(storeProvider, 'set');
  });

  it('should be created', () => {
    expect(stateService).toBeTruthy();
  });

  it('#fetchState should return a slice of state', () => {
    stateService.fetchState<FlexItem[]>('flexItems').subscribe((items) => {
      expect(items).toEqual(FLEX_ITEMS);
    });
  });

  it('#get should return a slice of state', () => {
    stateService.get<FlexItem[]>('flexItems').subscribe((items) => {
      expect(items).toEqual(FLEX_ITEMS);
    });
  });

  it('#set should set state', () => {
    stateService.set('flexItems', [newFlexItem] as FlexItem[]);
    expect(storeProvider.set).toHaveBeenCalled();
  });
});
