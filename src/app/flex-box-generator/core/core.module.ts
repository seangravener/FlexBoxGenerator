import { NgModule } from '@angular/core';
import { StateService } from './services/state.service';
import { StoreService } from './services/store.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [StateService, StoreService],
})
export class CoreModule { }
