import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core'
import { FlexItemsService } from '../flex-items/flex-items.service'
import { FlexContainerService } from './flex-container.service'
import { map, Observable } from 'rxjs'
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
    this.flexContainerService.flexContainer$.pipe(
      map((flexContainer) => {
        flexContainer.style = this.convertObjectKeysToKebab(flexContainer.style)
        return flexContainer
      }),
    )

  constructor(
    private readonly flexItemsService: FlexItemsService,
    private readonly flexContainerService: FlexContainerService,
  ) {}

  onContainerChange(flexItems: any[]) {
    this.containerChanges.emit(flexItems)
  }

  private camelToKebab(camelCaseString: string) {
    return camelCaseString.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  }

  private convertObjectKeysToKebab(obj: any) {
    const result: { [key: string]: string } = {}
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const kebabKey = this.camelToKebab(key)
        result[kebabKey] = obj[key]
      }
    }
    return result
  }
}
