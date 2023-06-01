import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexBoxGeneratorComponent } from './generator.component';
import { CanvasComponent } from './components/canvas/canvas.component';
import { ContainerOptionsComponent } from './components/canvas/container-options/container-options.component';
import { ItemsOptionsComponent } from './components/items-options/items-options.component';

@NgModule({
  declarations: [
    FlexBoxGeneratorComponent,
    CanvasComponent,
    ContainerOptionsComponent,
    ItemsOptionsComponent,
  ],
  imports: [CommonModule],
  providers: []
})
export class FlexBoxGeneratorModule {}
