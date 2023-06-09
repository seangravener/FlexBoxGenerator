import { ComponentFixture, TestBed } from '@angular/core/testing';
// import {
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting,
// } from '@angular/platform-browser-dynamic/testing';

import { FlexCanvasComponent } from './flex-canvas.component';
import { Observable, of } from 'rxjs';
import { Slice } from '../../core/services/store.provider';
import { FlexItemsService } from '../flex-items/flex-items.service';
import { FlexItem } from '../flex-items/flex-item.model';

let mockFlexItemsService = class implements Partial<FlexItemsService> {
  get flexItems$(): Observable<any> | undefined {
    return of({
      flexItems: [
        { content: 'Item 1', style: { backgroundColor: 'red' } },
        { content: 'Item 2', style: { backgroundColor: 'red' } },
        { content: 'Item 3', style: { backgroundColor: 'red' } },
        { content: 'Item 4', style: { backgroundColor: 'blue' } },
        { content: 'Item 5', style: { backgroundColor: 'blue' } },
      ],
    } as Slice<FlexItem[]>);
  }
};

fdescribe('CanvasComponent', () => {
  let component: FlexCanvasComponent;
  let fixture: ComponentFixture<FlexCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexCanvasComponent],
      providers: [
        { provide: FlexItemsService, useValue: mockFlexItemsService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FlexCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
