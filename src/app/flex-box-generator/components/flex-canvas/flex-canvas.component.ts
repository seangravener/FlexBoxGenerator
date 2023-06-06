import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface Box {
  title: string;
  color: string;
}

@Component({
  selector: 'app-canvas',
  templateUrl: './flex-canvas.component.html',
  styleUrls: ['./flex-canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexCanvasComponent {
  canvasDisplayMode = 'flex';
  boxes: Box[] = [
    { title: 'Box 1', color: 'red' },
    { title: 'Box 2', color: 'red' },
    { title: 'Box 4', color: 'red' },
    { title: 'Box 5', color: 'red' },
    { title: 'Box 6', color: 'blue' },
  ];

}
