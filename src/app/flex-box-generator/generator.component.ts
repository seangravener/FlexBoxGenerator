import { Component } from '@angular/core';
import { startWith } from 'rxjs';
import { FlexItem } from './components/flex-items/flex-item.model';
import { StateService } from './core/services/state.service';

@Component({
  selector: 'app-flex-box-generator',
  templateUrl: `./generator.component.html`,
  styles: [],
})
export class FlexBoxGeneratorComponent {
  constructor(private stateService: StateService) {}
  flexItems$ = this.stateService
    .fetchState<FlexItem[]>('flexItems')
    .pipe(startWith([]));
}
