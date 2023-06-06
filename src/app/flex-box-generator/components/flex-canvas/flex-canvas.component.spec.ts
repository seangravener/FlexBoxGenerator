import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexCanvasComponent } from './flex-canvas.component';

describe('CanvasComponent', () => {
  let component: FlexCanvasComponent;
  let fixture: ComponentFixture<FlexCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
