import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FlexItemsService } from '../flex-items.service'

@Component({
  selector: 'flex-items-control',
  templateUrl: './flex-items-control.component.html',
  styleUrls: ['./flex-items-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexItemsControlComponent {
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
