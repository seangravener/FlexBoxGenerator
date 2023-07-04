import { NgModule, Optional, SkipSelf } from '@angular/core'
import { StateService } from './services/state.service'
import { StoreProvider } from './services/store.provider'

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [StateService, StoreProvider],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. It should only be imported in the root AppModule.',
      )
    }
  }
}
