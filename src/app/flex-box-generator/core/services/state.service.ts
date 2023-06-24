import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable, delay, map, of, shareReplay, tap } from 'rxjs';

import { Slice, StoreProvider } from './store.provider';
import { DEFAULT_FLEX_ITEMS } from '../../components/flex-items/flex-item.constants';
import { DEFAULT_FLEX_CONTAINER } from '../../components/flex-container/flex-container.constants';
import { FlexContainer } from '../../components/flex-container/flex-container.model';
import { FlexItem } from '../../components/flex-items/flex-item.model';

interface FlexGeneratorStateDTO {
  status: string;
  data: {
    flexItems: Slice<any>;
    flexContainer: Slice<any>;
  };
}

interface FlexGeneratorState {
  flexItems: Slice<FlexItem[]>;
  flexContainer: Slice<FlexContainer>;
}

const fakeApi$ = of({
  flexItems: DEFAULT_FLEX_ITEMS,
  flexContainer: DEFAULT_FLEX_CONTAINER,
} as FlexGeneratorState);

@Injectable({ providedIn: 'root' })
export class StateService {
  get value(): Slice<any> {
    return this.store.value;
  }

  constructor(private store: StoreProvider) {}

  fetchState<T extends Slice<T>>(
    slice: keyof FlexGeneratorState
  ): Observable<T> {
    // return this.http
    // .get<T>(`${api.local}/${slice}`)
    // .pipe(tap((state) => this.store.set<T>(slice, state as T)));

    return fakeApi$.pipe(
      map((state) => state[slice] as T),
      tap((state) => this.store.set<T>(slice, state as T)),
      shareReplay()
    );
  }

  get<T extends Slice<T>>(slice: string): Observable<T> {
    return this.store.select<T>(slice);
  }

  set<T extends Slice<T>>(slice: string, state: T): void {
    this.store.set<T>(slice, state);
  }
}
