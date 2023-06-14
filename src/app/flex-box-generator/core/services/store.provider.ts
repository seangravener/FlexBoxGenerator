import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, distinctUntilChanged, map, of, switchMap } from 'rxjs';

export interface Slice<T> {
  [T: string]: any;
}

@Injectable()
export class StoreProvider {
  private stateSubject = new BehaviorSubject<Slice<any>>({});
  private store$ = this.stateSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  get value() {
    return this.stateSubject.value;
  }

  // @todo consider using one type: object T
  // avoid returning multiple types
  // accept object or array as input type; StateSelectorType = T | T[]
  // standard return type of Slice (always return single type, which always wrapped in its slice container)
  // eg. select<FlexItem[]>('flexItems') ==> { flexItems: [ ... ] }
  // eg. select<FlexItem>('flexItems') ==> { flexItems: [ ... ] }  // allow this?
  // eg. select<SingleItem>('flexItems') ==> { singleItem: { childItems: [ ... ] }}

  select<T extends Slice<T | T[]>>(slice: string): Observable<T> {
    return this.store$.pipe(map(s => s[slice]));
  }

  select2<T>(slice: string): Observable<Slice<T>> {
    return this.store$.pipe(
      map((s) => s[slice]),
      switchMap((s) => of({ [slice]: s }) as Observable<Slice<T>>)
    );
  }

  set<T extends Slice<T>>(slice: string, state: T) {
    this.stateSubject.next({ ...this.value, [slice]: state });
  }
}
