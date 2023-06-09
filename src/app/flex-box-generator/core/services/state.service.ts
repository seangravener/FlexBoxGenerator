import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

import { Slice, Store } from './store.provider';
import { FlexItem } from '../../components/flex-items/flex-item.model';

export type FlexItems = FlexItem[];
const api: Slice<FlexItems> = {
  flexItems: [
    { content: 'Item 1', style: { backgroundColor: 'red' } },
    { content: 'Item 2', style: { backgroundColor: 'red' } },
    { content: 'Item 3', style: { backgroundColor: 'red' } },
    { content: 'Item 4', style: { backgroundColor: 'blue' } },
    { content: 'Item 5', style: { backgroundColor: 'blue' } },
  ] as FlexItem[],
};

@Injectable({ providedIn: 'root' })
export class StateService {
  constructor(private store: Store) {}

  fetchState<T extends Slice<T>>(slice: string): Observable<T> {
    // return this.http
    // .get<T>(`${api.local}/${slice}`)
    // .pipe(tap((state) => this.store.set<T>(slice, state as T)));

    return of(api[slice] as T).pipe(
      tap((state) => this.store.set<T>(slice, state as T))
    );
  }

  get<T extends Slice<T>>(slice: string): Observable<T> {
    return this.store.select<T>(slice);
  }

  set<T extends Slice<T>>(slice: string, state: T): void {
    this.store.set<T>(slice, state);
  }

  value<T extends Slice<T>>(slice: string): T {
    return this.store.value[slice] as T;
  }
}
