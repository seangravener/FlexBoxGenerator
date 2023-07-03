import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexOutputComponent } from './flex-output.component';

describe('FlexOutputComponent', () => {
  let component: FlexOutputComponent;
  let fixture: ComponentFixture<FlexOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
