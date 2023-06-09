import { Injectable } from '@angular/core';
import { StateService } from '../../core/services/state.service';
import { filter, startWith, takeWhile, tap } from 'rxjs';
import { FlexItem } from './flex-item.model';

@Injectable({ providedIn: 'root' })
export class FlexItemsService {
  flexItems: FlexItem[] = [];

  constructor(private stateService: StateService) {}

  flexItems$ = this.stateService.get<FlexItem[]>('flexItems').pipe(
    takeWhile((items) => !!items),
    tap((items) => (this.flexItems = items))
  );

  addItem() {
    this.stateService.set('flexItems', [...this.flexItems, new FlexItem()]);
  }

  deleteItem() {
    this.stateService.set('flexItems', [...this.flexItems.slice(0, -1)]);
  }

  resetItems() {
    this.stateService.set('flexItems', []);
  }
}
