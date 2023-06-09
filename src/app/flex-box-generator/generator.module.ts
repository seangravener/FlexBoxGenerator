import { NgModule } from '@angular/core';

import { FlexBoxGeneratorComponent } from './generator.component';
import { FlexCanvasComponent } from './components/flex-canvas/flex-canvas.component';
import { FlexContainerComponent } from './components/flex-container/flex-container.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexItemsService } from './components/flex-items/flex-items.service';
import { FlexItemsModule } from './components/flex-items/flex-items.module';

@NgModule({
  declarations: [
    FlexBoxGeneratorComponent,
    FlexCanvasComponent,
    FlexContainerComponent,
  ],
  imports: [CoreModule, SharedModule, FlexItemsModule, NgbModule],
  exports: [FlexBoxGeneratorComponent],
  providers: [FlexItemsService],
})
export class FlexBoxGeneratorModule {}
