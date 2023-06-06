import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexContainerOptionsComponent } from './flex-container-options.component';

describe('FlexContainerOptionsComponent', () => {
  let component: FlexContainerOptionsComponent;
  let fixture: ComponentFixture<FlexContainerOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexContainerOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexContainerOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
