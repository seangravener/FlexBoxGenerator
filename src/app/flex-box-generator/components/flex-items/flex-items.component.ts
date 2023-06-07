import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

import { FlexItem } from "./flex-item.model";

@Component({
  selector: 'flex-items',
  templateUrl: './flex-items.component.html',
  styleUrls: ['./flex-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexItemsComponent {
  private _flexItems = new BehaviorSubject<FlexItem[]>([]);
  flexItems$: Observable<FlexItem[]> = this._flexItems.asObservable();

  @Input()
  set flexItems(value: FlexItem[]) {
    this._flexItems.next(value);
  }

  @Output() next: EventEmitter<FlexItem[]> = new EventEmitter();
  @Output() reset: EventEmitter<[]> = new EventEmitter();

  onAddItem() {
    this.nextItems([...this._flexItems.value, new FlexItem()]);
  }

  onDeleteItem() {
    this.nextItems([...this._flexItems.value.slice(0, -1)]);
  }

  nextItems(items: FlexItem[]) {
    this.next.emit(items);
  }

  resetItems() {
    this.reset.emit([]);
  }
}
