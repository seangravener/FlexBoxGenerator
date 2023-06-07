import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. It should only be imported in AppModule.'
      );
    }
  }
}
