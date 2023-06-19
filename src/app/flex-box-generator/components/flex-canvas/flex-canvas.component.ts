import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
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

  @HostBinding('class') defaultClasses =
    'flex flex-col gap-4 p-4 bg-slate-100';

  @HostBinding('style.height.px') height = 500;

  constructor(private flexItemsService: FlexItemsService) {}
}
