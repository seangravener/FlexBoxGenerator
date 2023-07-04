import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FlexContainerToolsetComponent } from './flex-container-toolset.component'

describe('FlexContainerToolsetComponent', () => {
  let component: FlexContainerToolsetComponent
  let fixture: ComponentFixture<FlexContainerToolsetComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexContainerToolsetComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FlexContainerToolsetComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
