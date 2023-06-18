import { NgModule } from '@angular/core';

import { FlexItemsComponent } from './flex-items.component';
import { FlexItemActionsComponent } from './flex-item-actions/flex-item-actions.component';
import { SharedModule } from '../../shared/shared.module';
import { FlexItemsService } from './flex-items.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [SharedModule, CommonModule],
  declarations: [FlexItemsComponent, FlexItemActionsComponent],
  exports: [FlexItemsComponent, FlexItemActionsComponent],
  providers: [FlexItemsService],
})
export class FlexItemsModule {}
