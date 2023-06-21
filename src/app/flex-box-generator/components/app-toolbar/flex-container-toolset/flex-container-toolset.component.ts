import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CONTAINER } from './flex-container.constants';
import { FlexContainer } from './flex-container.model';

@Component({
  selector: 'flex-container-toolset',
  templateUrl: './flex-container-toolset.component.html',
  styleUrls: ['./flex-container-toolset.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexContainerToolsetComponent {
  @Output() next: EventEmitter<FlexContainer[]> = new EventEmitter();
  @Output() reset: EventEmitter<[]> = new EventEmitter();

  nextContainer() {
    this.next.emit([CONTAINER as FlexContainer]);
  }

  resetItems() {
    this.reset.emit();
  }

  toggleCanvasDisplayMode() {
    // this.canvasDisplayMode = this.canvasDisplayMode === 'flex' ? 'grid' : 'flex';
  }
}
