import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComponent1Component } from './sub-component1.component';

describe('SubComponent1Component', () => {
  let component: SubComponent1Component;
  let fixture: ComponentFixture<SubComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubComponent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
