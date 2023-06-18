import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexItemActionsComponent } from './flex-item-actions.component';

describe('FlexItemActionsComponent', () => {
  let component: FlexItemActionsComponent;
  let fixture: ComponentFixture<FlexItemActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexItemActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexItemActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
