import { NgModule } from '@angular/core'

import { FlexItemsComponent } from './flex-items.component'
import { FlexItemsControlComponent } from './flex-items-control/flex-items-control.component'
import { SharedModule } from '../../shared/shared.module'
import { FlexItemsService } from './flex-items.service'
import { CommonModule } from '@angular/common'

@NgModule({
  imports: [SharedModule, CommonModule],
  declarations: [FlexItemsComponent, FlexItemsControlComponent],
  exports: [FlexItemsComponent, FlexItemsControlComponent],
  providers: [FlexItemsService],
})
export class FlexItemsModule {}
