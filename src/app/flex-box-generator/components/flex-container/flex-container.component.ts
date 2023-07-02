import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Output } from '@angular/core'
import { FlexItemsService } from '../flex-items/flex-items.service'
import { FlexContainerService } from './flex-container.service'
import { Observable, map, shareReplay, takeWhile, tap } from 'rxjs'
import { FlexContainer } from './flex-container.model'
import { FlexContainerProps } from './flex-container.interface'

@Component({
  selector: 'flex-container',
  templateUrl: './flex-container.component.html',
  styleUrls: ['./flex-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexContainerComponent {
  container: FlexContainer | undefined
  @HostBinding('class') defaultClass =
    'flex flex-col gap-4 p-4 dark:bg-slate-900 border border-slate-700 rounded-md w-full'
  @HostBinding('style.height.px') height = 624 // @todo move to state
  @Output() containerChanges = new EventEmitter()

  flexItems$ = this.flexItemsService.flexItems$
  flexContainer$: Observable<FlexContainer> = this.flexContainerService.flexContainer$.pipe(
    takeWhile((container) => Boolean(container)),
    map((container) => new FlexContainer({ ...container })),
    tap((container) => (this.container = container)),
    shareReplay(),
  )

  constructor(private flexItemsService: FlexItemsService, private flexContainerService: FlexContainerService) {}

  onContainerChange(flexItems: any[]) {
    // this.flexContainerService.set<FlexContainerProps>(flexItems);
    this.containerChanges.emit(flexItems)
  }
}
