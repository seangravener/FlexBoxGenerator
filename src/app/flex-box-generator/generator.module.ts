import { NgModule } from '@angular/core'

import { FlexBoxGeneratorComponent } from './generator.component'
import { FlexContainerComponent } from './components/flex-container/flex-container.component'
import { FlexContainerToolsetComponent } from './components/flex-container-toolset/flex-container-toolset.component'
import { SharedModule } from './shared/shared.module'
import { CoreModule } from './core/core.module'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FlexItemsService } from './components/flex-items/flex-items.service'
import { FlexItemsModule } from './components/flex-items/flex-items.module'
import { ThemeService } from './core/services/theme.service'
import { FlexOutputComponent } from './components/flex-output/flex-output.component'

@NgModule({
  declarations: [
    FlexBoxGeneratorComponent,
    FlexContainerComponent,
    FlexContainerToolsetComponent,
    FlexOutputComponent,
  ],
  imports: [CoreModule, SharedModule, FlexItemsModule, NgbModule],
  exports: [FlexBoxGeneratorComponent],
  providers: [FlexItemsService, ThemeService],
})
export class FlexBoxGeneratorModule {}
