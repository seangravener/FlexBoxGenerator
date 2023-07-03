import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FlexContainerService } from '../flex-container/flex-container.service'
import { filter, map, of, switchMap } from 'rxjs'
import { FlexContainerStyleProps } from '../flex-container/flex-container.interface'

@Component({
  selector: 'flex-output',
  templateUrl: './flex-output.component.html',
  styleUrls: ['./flex-output.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexOutputComponent {
  flexContainer$ = this.flexContainerService.flexContainer$
  flexContainerStyles$ = this.flexContainer$.pipe(
    switchMap((container) => of(this.filterUnsetStyles(container.style))),
  )

  constructor(private flexContainerService: FlexContainerService) {}

  private filterUnsetStyles(styleObj: FlexContainerStyleProps | undefined) {
    return Object.fromEntries(
      Object.entries({ ...styleObj }).filter(
        ([key, value]) => value !== 'auto',
      ),
    )
  }
}
