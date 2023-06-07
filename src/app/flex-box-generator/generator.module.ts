import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexBoxGeneratorComponent } from './generator.component';
import { FlexCanvasComponent } from './components/flex-canvas/flex-canvas.component';
import { FlexContainerComponent } from './components/flex-container/flex-container.component';
import { FlexItemsComponent } from './components/flex-items/flex-items.component';
import { CoreModule } from './core/core.module';
import { ItemsActionsComponent } from './components/flex-items/items-actions/items-actions.component';

@NgModule({
  declarations: [
    FlexBoxGeneratorComponent,
    FlexCanvasComponent,
    FlexContainerComponent,
    FlexItemsComponent,
    // FlexItemsActionsComponent,
    ItemsActionsComponent,
  ],
  imports: [CommonModule, CoreModule],
  exports: [FlexBoxGeneratorComponent],
  providers: [],
})
export class FlexBoxGeneratorModule {}
