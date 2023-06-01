import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsOptionsComponent } from './items-options.component';

describe('ItemsOptionsComponent', () => {
  let component: ItemsOptionsComponent;
  let fixture: ComponentFixture<ItemsOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
