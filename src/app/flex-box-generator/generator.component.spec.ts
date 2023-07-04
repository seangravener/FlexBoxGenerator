import { ComponentFixture, TestBed } from '@angular/core/testing'

import { FlexBoxGeneratorComponent } from './generator.component'

describe('FlexBoxGeneratorComponent', () => {
  let component: FlexBoxGeneratorComponent
  let fixture: ComponentFixture<FlexBoxGeneratorComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexBoxGeneratorComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(FlexBoxGeneratorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
