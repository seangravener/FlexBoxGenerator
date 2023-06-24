import { Injectable } from '@angular/core';
import { StateService } from '../../core/services/state.service';
import {
  FlexContainerProps,
  FlexContainerStyleProps,
} from './flex-container.interface';
import { tap } from 'rxjs';
import { FlexContainer } from './flex-container.model';
import { DEFAULT_FLEX_CONTAINER } from './flex-container.constants';

@Injectable({
  providedIn: 'root',
})
export class FlexContainerService {
  flexContainer: FlexContainerProps = {};
  flexContainer$ = this.stateService
    .get<FlexContainerProps>('flexContainer')
    .pipe(tap((flexContainer) => (this.flexContainer = flexContainer)));

  constructor(private stateService: StateService) {}

  setStyleProps(styleProps: FlexContainerStyleProps) {
    this.stateService.set<FlexContainer>(
      'flexContainer',
      new FlexContainer({
        style: { ...this.flexContainer.style, ...styleProps },
      })
    );
  }

  reset() {
    this.stateService.set<FlexContainer>('flexContainer', {
      ...DEFAULT_FLEX_CONTAINER,
    });
  }
}
