import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  ViewChild,
} from '@angular/core'
import { startWith } from 'rxjs'
import { FlexItem } from './components/flex-items/flex-item.model'
import { StateService } from './core/services/state.service'
import { ThemeService } from './core/services/theme.service'
import { FlexContainer } from './components/flex-container/flex-container.model'

export type ThemeChangeEvent = {
  theme: string
  payload: any
}

@Component({
  selector: 'app-flex-box-generator',
  templateUrl: `./generator.component.html`,
  styles: [],
})
export class FlexBoxGeneratorComponent implements AfterViewInit {
  onThemeChange = new EventEmitter<ThemeChangeEvent>()

  // @HostListener('window:customEvent', ['$event'])
  // updateHtmlClass(event: ThemeChangeEvent) {
  //   const htmlRoot = document.querySelector('html');
  //   htmlRoot?.classList.remove(event.theme);
  //   htmlRoot?.classList.add(event.theme);

  //   // Access the payload data from the event
  //   const { payload } = event;
  //   console.log('Payload:', payload);
  // }

  constructor(
    private stateService: StateService,
    private themeService: ThemeService,
  ) {}

  flexItems$ = this.stateService.fetchState<FlexItem[]>('flexItems')
  flexContainer$ = this.stateService.fetchState<FlexContainer>('flexContainer')
  activeTheme$ = this.themeService.activeTheme$

  setTheme(theme: string): void {
    this.onThemeChange.emit({ theme, payload: {} })
    this.themeService.setTheme(theme as any)
  }

  onNextFlexContainer() {
    console.log('onNextFlexContainer')
    // this.stateService.set('flexContainer', flexContainer);
  }

  ngAfterViewInit(): void {
    this.setTheme('cupcake')
  }
}
