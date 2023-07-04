import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

export type AvailableThemeNames = 'light' | 'dark' | 'cupcake'

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _activeTheme = new BehaviorSubject<AvailableThemeNames>('cupcake')
  activeTheme$: Observable<AvailableThemeNames> =
    this._activeTheme.asObservable()

  get activeTheme(): AvailableThemeNames {
    return this._activeTheme.getValue()
  }

  constructor() {}

  setTheme(theme: AvailableThemeNames): void {
    this._activeTheme.next(theme)
  }
}
