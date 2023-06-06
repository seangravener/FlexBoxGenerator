import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexBoxGeneratorComponent } from './generator.component';
import { FlexCanvasComponent } from './components/flex-canvas/flex-canvas.component';
import { FlexContainerOptionsComponent } from './components/flex-container-options/flex-container-options.component';
import { FlexItemsOptionsComponent } from './components/flex-items-options/flex-items-options.component';

@NgModule({
  declarations: [
    FlexBoxGeneratorComponent,
    FlexCanvasComponent,
    FlexContainerOptionsComponent,
    FlexItemsOptionsComponent,
  ],
  imports: [CommonModule],
  exports: [FlexBoxGeneratorComponent],
  providers: [],
})
export class FlexBoxGeneratorModule {}
