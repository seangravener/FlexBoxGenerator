import { Injectable } from '@angular/core';
import { StateService } from '../../core/services/state.service';
import { map, shareReplay, takeWhile, tap } from 'rxjs';
import { FlexItem } from './flex-item.model';
import { DEFAULT_FLEX_ITEMS, DEFAULT_STYLES } from './flex-item.constants';
import { FlexContainerService } from '../flex-container/flex-container.service';

@Injectable({ providedIn: 'root' })
export class FlexItemsService {
  flexItems: FlexItem[] = [];

  constructor(
    private stateService: StateService,
    private flexContainerService: FlexContainerService
  ) {}

  flexItems$ = this.stateService.get<FlexItem[]>('flexItems').pipe(
    takeWhile((items) => Boolean(items)),
    map((items) => items.map((item) => new FlexItem({ ...item }))),
    tap((items) => (this.flexItems = items)),
    shareReplay()
  );

  addItem() {
    this.stateService.set('flexItems', [
      ...this.flexItems,
      new FlexItem({ style: DEFAULT_STYLES, content: this.generateEmoji() }),
    ]);
  }

  deleteItem() {
    this.stateService.set('flexItems', [...this.flexItems.slice(0, -1)]);
  }

  resetItems() {
    this.stateService.set('flexItems', DEFAULT_FLEX_ITEMS);
    this.flexContainerService.reset();
  }

  generateEmoji() {
    // prettier-ignore
    const possibleEmojis = ['👋','😋','💯','🎱','🎨','👍','💡','🫧','⚡','👊'];
    return possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
  }
}
