import { Injectable } from '@angular/core';
import { StateService } from '../../core/services/state.service';
import { filter, map, share, shareReplay, startWith, takeWhile, tap } from 'rxjs';
import { FlexItem } from './flex-item.model';
import { DEFAULT_FLEX_ITEMS } from './flex-item.constants';

@Injectable({ providedIn: 'root' })
export class FlexItemsService {
  flexItems: FlexItem[] = [];

  constructor(private stateService: StateService) {}

  flexItems$ = this.stateService.get<FlexItem[]>('flexItems').pipe(
    takeWhile((items) => Boolean(items)),
    map((items) => items.map((item) => new FlexItem(item))),
    tap((items) => (this.flexItems = items)),
    shareReplay()
  );

  addItem() {
    this.stateService.set('flexItems', [...this.flexItems, new FlexItem()]);
  }

  deleteItem() {
    this.stateService.set('flexItems', [...this.flexItems.slice(0, -1)]);
  }

  resetItems() {
    this.stateService.set('flexItems', DEFAULT_FLEX_ITEMS);
  }
}
