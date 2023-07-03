import { ChangeDetectionStrategy, Component } from '@angular/core'
import { FlexContainerService } from '../flex-container/flex-container.service'
import { map } from 'rxjs'

@Component({
  selector: 'flex-output',
  templateUrl: './flex-output.component.html',
  styleUrls: ['./flex-output.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlexOutputComponent {
  flexContainer$ = this.flexContainerService.flexContainer$
  flexContainerStyles$ = this.flexContainer$.pipe(map((flexContainer) => flexContainer.style))
  constructor(private flexContainerService: FlexContainerService) {}
}
