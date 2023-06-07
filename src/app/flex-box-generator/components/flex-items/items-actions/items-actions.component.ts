import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'items-actions',
  templateUrl: './items-actions.component.html',
  styleUrls: ['./items-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsActionsComponent {

  onAddItem() {
    console.log('Add item');
  }

  onDeleteItem() {
    console.log('Delete item');
  }
}
