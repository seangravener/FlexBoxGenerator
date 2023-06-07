import { NgModule } from '@angular/core';
import { FlexBoxGeneratorComponent } from './generator.component';
import { FlexCanvasComponent } from './components/flex-canvas/flex-canvas.component';
import { FlexContainerComponent } from './components/flex-container/flex-container.component';
import { SharedModule } from './shared/shared.module';
import { FlexItemsModule } from './components/flex-items/flex-items.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    FlexBoxGeneratorComponent,
    FlexCanvasComponent,
    FlexContainerComponent,
  ],
  imports: [CoreModule, SharedModule, FlexItemsModule],
  exports: [FlexBoxGeneratorComponent],
  providers: [],
})
export class FlexBoxGeneratorModule {}
