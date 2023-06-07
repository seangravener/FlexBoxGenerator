import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Output } from '@angular/core';
import { CONTAINER } from './flex-container.constants';
import { FlexContainer } from './flex-container.model';

@Component({
  selector: 'flex-container',
  templateUrl: './flex-container.component.html',
  styleUrls: ['./flex-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlexContainerComponent {
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
