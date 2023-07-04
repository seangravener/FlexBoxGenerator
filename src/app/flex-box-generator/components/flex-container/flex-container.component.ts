import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core'
import { FlexItemsService } from '../flex-items/flex-items.service'
import { FlexContainerService } from './flex-container.service'
import { Observable } from 'rxjs'
import { FlexContainer } from './flex-container.model'

@Component({
  selector: 'flex-container',
  templateUrl: './flex-container.component.html',
  styleUrls: ['./flex-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexContainerComponent {
  container: FlexContainer | undefined
  @Output() containerChanges = new EventEmitter()

  flexItems$ = this.flexItemsService.flexItems$
  flexContainer$: Observable<FlexContainer> =
    this.flexContainerService.flexContainer$

  constructor(
    private flexItemsService: FlexItemsService,
    private flexContainerService: FlexContainerService,
  ) {}

  onContainerChange(flexItems: any[]) {
    // this.flexContainerService.set<FlexContainerProps>(flexItems);
    this.containerChanges.emit(flexItems)
  }
}
