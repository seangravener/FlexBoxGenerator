import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexBoxGeneratorComponent } from './generator.component';
import { CanvasComponent } from './components/canvas/canvas.component';

@NgModule({
  declarations: [FlexBoxGeneratorComponent, CanvasComponent],
  imports: [CommonModule],
  exports: [FlexBoxGeneratorComponent],
})
export class FlexBoxGeneratorModule {}
