import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable, delay, of, tap } from 'rxjs';

import { Slice, StoreProvider } from './store.provider';
import { DEFAULT_FLEX_ITEMS } from '../../components/flex-items/flex-item.constants';
import { FlexItem } from '../../components/flex-items/flex-item.model';

const fakeApi$: Observable<any> = of(DEFAULT_FLEX_ITEMS);

@Injectable({ providedIn: 'root' })
export class StateService {
  get value(): Slice<any> {
    return this.store.value;
  }

  constructor(private store: StoreProvider) {}

  fetchState<T extends Slice<T>>(slice: string): Observable<T> {
    // return this.http
    // .get<T>(`${api.local}/${slice}`)
    // .pipe(tap((state) => this.store.set<T>(slice, state as T)));

    return fakeApi$.pipe(
      tap((state) => this.store.set<T>(slice, state as T))
    );
  }

  get<T extends Slice<T>>(slice: string): Observable<T> {
    return this.store.select<T>(slice);
  }

  set<T extends Slice<T>>(slice: string, state: T): void {
    this.store.set<T>(slice, state);
  }
}
