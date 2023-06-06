import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexItemsOptionsComponent } from './flex-items-options.component';

describe('FlexItemsOptionsComponent', () => {
  let component: FlexItemsOptionsComponent;
  let fixture: ComponentFixture<FlexItemsOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexItemsOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexItemsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
