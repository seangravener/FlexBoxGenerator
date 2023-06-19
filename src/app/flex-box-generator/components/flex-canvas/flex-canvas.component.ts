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
    'container flex flex-col gap-3 border border-gray-900 p-3 my-3 mx-auto';

  @HostBinding('style.height.px') height = 500;

  constructor(private flexItemsService: FlexItemsService) {}
}
