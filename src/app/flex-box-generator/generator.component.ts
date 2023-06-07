import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FlexItem } from './components/flex-items/flex-item.model';

@Component({
  selector: 'app-flex-box-generator',
  templateUrl: `./generator.component.html`,
  styles: [''],
})
export class FlexBoxGeneratorComponent {
  private flexItemsSubject = new BehaviorSubject<FlexItem[]>([]);
  flexItems$: Observable<FlexItem[]> = this.flexItemsSubject.asObservable();

  constructor() {
    this.flexItemsSubject.next([
      { content: 'Item 1', style: { backgroundColor: 'red' } },
      { content: 'Item 2', style: { backgroundColor: 'red' } },
      { content: 'Item 3', style: { backgroundColor: 'red' } },
      { content: 'Item 4', style: { backgroundColor: 'blue' } },
      { content: 'Item 5', style: { backgroundColor: 'blue' } },
    ] as FlexItem[]);
  }

  onNextItems(items: FlexItem[]) {
    this.flexItemsSubject.next(items);
  }
}
