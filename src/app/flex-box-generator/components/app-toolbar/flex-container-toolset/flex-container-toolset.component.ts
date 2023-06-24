import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { FlexContainerService } from '../../flex-container/flex-container.service';
import { FlexContainerStyleProps } from '../../flex-container/flex-container.interface';

@Component({
  selector: 'flex-container-toolset',
  templateUrl: './flex-container-toolset.component.html',
  styleUrls: ['./flex-container-toolset.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexContainerToolsetComponent {
  flexContainer$ = this.flexContainerService.flexContainer$;

  get flexContainer() {
    return this.flexContainerService.flexContainer;
  }

  get currentDisplayMode() {
    return this.flexContainer.style?.display;
  }

  constructor(private flexContainerService: FlexContainerService) {}

  nextContainer() {}

  resetItems() {
    this.flexContainerService.setStyleProps({});
  }

  onChangeDisplayMode(e: any) {
    this.toggleDisplayMode();
  }

  toggleDisplayMode() {
    this.flexContainerService.setStyleProps({
      display: this.currentDisplayMode === 'flex' ? 'block' : 'flex',
    });
  }
}
