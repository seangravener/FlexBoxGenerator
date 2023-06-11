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
import { FLEX_ITEMS } from '../../core/fixtures/flex-items';

let mockFlexItemsService = class implements Partial<FlexItemsService> {
  get flexItems$(): Observable<any> | undefined {
    return of(FLEX_ITEMS as Slice<FlexItem[]>);
  }
};

describe('CanvasComponent', () => {
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
