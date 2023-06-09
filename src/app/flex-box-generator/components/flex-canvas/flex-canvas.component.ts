import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FlexItemsService } from '../flex-items/flex-items.service';

@Component({
  selector: 'flex-canvas',
  templateUrl: './flex-canvas.component.html',
  styleUrls: ['./flex-canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexCanvasComponent {
  canvasDisplayMode = 'flex';
  flexItems$ = this.flexItemsService.flexItems$;

  constructor(private flexItemsService: FlexItemsService) {}
}
