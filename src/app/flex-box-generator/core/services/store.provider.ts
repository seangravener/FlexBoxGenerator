import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, distinctUntilChanged, map } from 'rxjs';

export interface Slice<T> {
  [T: string]: any;
}

@Injectable()
export class Store {
  private stateSubject = new BehaviorSubject<Slice<any>>({});
  private store$ = this.stateSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  get value() {
    return this.stateSubject.value;
  }

  select<T extends Slice<T | T[]>>(slice: string): Observable<T> {
    return this.store$.pipe(map(s => s[slice]));
  }

  set<T extends Slice<T>>(slice: string, state: T) {
    this.stateSubject.next({ ...this.value, [slice]: state });
  }
}
