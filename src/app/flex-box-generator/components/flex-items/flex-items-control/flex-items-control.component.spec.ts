import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FlexItemsControlComponent } from './flex-items-control.component'

describe('FlexItemsControlComponent', () => {
  let component: FlexItemsControlComponent
  let fixture: ComponentFixture<FlexItemsControlComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexItemsControlComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FlexItemsControlComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
