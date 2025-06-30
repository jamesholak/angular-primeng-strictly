import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poc2MainComponent1Component } from './poc2-main-component1.component';

describe('MainComponent1Component', () => {
  let component: Poc2MainComponent1Component;
  let fixture: ComponentFixture<Poc2MainComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Poc2MainComponent1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poc2MainComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
