import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { FlexItemsService } from '../flex-items/flex-items.service';

@Component({
  selector: 'flex-container',
  templateUrl: './flex-container.component.html',
  styleUrls: ['./flex-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexContainerComponent {
  canvasDisplayMode = 'flex';
  flexItems$ = this.flexItemsService.flexItems$;
  @HostBinding('class') defaultClasses = 'flex flex-col gap-4 p-4';
  @HostBinding('style.height.px') height = 500;

  constructor(private flexItemsService: FlexItemsService) {}
}
