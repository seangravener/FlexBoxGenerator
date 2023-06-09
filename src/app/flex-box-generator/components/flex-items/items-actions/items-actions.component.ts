import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FlexItemsService } from '../flex-items.service';

@Component({
  selector: 'items-actions',
  templateUrl: './items-actions.component.html',
  styleUrls: ['./items-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsActionsComponent {
  constructor(private flexItemsService: FlexItemsService) {}

  onAddItem() {
    this.flexItemsService.addItem();
  }

  onDeleteItem() {
    this.flexItemsService.deleteItem();
  }

  onResetItems() {
    this.flexItemsService.resetItems();
  }
}
