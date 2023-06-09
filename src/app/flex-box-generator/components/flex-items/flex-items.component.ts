import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FlexItemsService } from './flex-items.service';

@Component({
  selector: 'flex-items',
  templateUrl: './flex-items.component.html',
  styleUrls: ['./flex-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexItemsComponent {
  flexItems$ = this.flexItemsService.flexItems$;

  constructor(private flexItemsService: FlexItemsService) {}

  onAddItem() {
    this.flexItemsService.addItem();
  }

  onDeleteItem() {
    this.flexItemsService.deleteItem();
  }

  resetItems() {
    this.flexItemsService.resetItems();
  }
}
