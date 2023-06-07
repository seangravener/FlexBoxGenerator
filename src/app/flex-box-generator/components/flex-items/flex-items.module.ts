import { NgModule } from '@angular/core';

import { FlexItemsComponent } from './flex-items.component';
import { ItemsActionsComponent } from './items-actions/items-actions.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [FlexItemsComponent, ItemsActionsComponent],
  exports: [FlexItemsComponent],
  providers: [],
})
export class FlexItemsModule {}
