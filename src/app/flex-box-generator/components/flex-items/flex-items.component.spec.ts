import { ComponentFixture, TestBed } from '@angular/core/testing';
``
import { FlexItemsComponent } from './flex-items.component';

describe('CanvasComponent', () => {
  let component: FlexItemsComponent;
  let fixture: ComponentFixture<FlexItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
