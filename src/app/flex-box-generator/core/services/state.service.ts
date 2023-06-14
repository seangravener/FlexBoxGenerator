import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap, tap } from 'rxjs';

import { Slice, StoreProvider } from './store.provider';
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
  get value(): Slice<any> {
    return this.store.value;
  }

  constructor(private store: StoreProvider) {}

  fetchState<T extends Slice<T>>(slice: string): Observable<T> {
    // return this.http
    // .get<T>(`${api.local}/${slice}`)
    // .pipe(tap((state) => this.store.set<T>(slice, state as T)));

    return of(api[slice] as T).pipe(
      tap((state) => this.store.set<T>(slice, state as T))
    );
  }

  get<T extends Slice<T | T[]>>(slice: string): Observable<T> {
    return this.store.select<T>(slice);
  }

  get2<T>(slice: string): Observable<Slice<T>> {
    return this.store
      .select2<T>(slice)
      .pipe(switchMap((s) => of({ [slice]: s }) as Observable<Slice<T>>));
  }

  set<T extends Slice<T>>(slice: string, state: T): void {
    this.store.set<T>(slice, state);
  }
}
