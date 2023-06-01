import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface Box {
  title: string;
  color: string;
}

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CanvasComponent {
  canvasDisplayMode = 'flex';
  boxes: Box[] = [
    { title: 'Box 1', color: 'red' },
    { title: 'Box 2', color: 'red' },
    { title: 'Box 3', color: 'red' },
  ];


}
