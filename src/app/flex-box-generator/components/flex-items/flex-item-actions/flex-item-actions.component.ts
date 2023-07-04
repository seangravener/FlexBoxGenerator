import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FlexItemsService } from '../flex-items.service'

@Component({
  selector: 'flex-item-actions',
  templateUrl: './flex-item-actions.component.html',
  styleUrls: ['./flex-item-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexItemActionsComponent {
  constructor(private flexItemsService: FlexItemsService) {}

  onAddItem() {
    this.flexItemsService.addItem()
  }

  onDeleteItem() {
    this.flexItemsService.deleteItem()
  }

  onResetItems() {
    this.flexItemsService.resetItems()
  }
}
