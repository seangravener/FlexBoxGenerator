import { NgModule } from '@angular/core';

import { FlexItemsComponent } from './flex-items.component';
import { ItemsActionsComponent } from './items-actions/items-actions.component';
import { SharedModule } from '../../shared/shared.module';
import { FlexItemsService } from './flex-items.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SharedModule, CommonModule],
  declarations: [FlexItemsComponent, ItemsActionsComponent],
  exports: [FlexItemsComponent],
  providers: [FlexItemsService],
})
export class FlexItemsModule {}
