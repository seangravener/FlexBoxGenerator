import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { FlexItem } from '../flex-items/flex-item.model';

@Component({
  selector: 'flex-canvas',
  templateUrl: './flex-canvas.component.html',
  styleUrls: ['./flex-canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexCanvasComponent {
  canvasDisplayMode = 'flex';
  @Input() flexItems$: Observable<FlexItem[]> = of([]);
}
