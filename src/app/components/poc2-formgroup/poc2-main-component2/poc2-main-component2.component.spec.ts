import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poc2MainComponent2Component } from './poc2-main-component2.component';

describe('MainComponent2Component', () => {
  let component: Poc2MainComponent2Component;
  let fixture: ComponentFixture<Poc2MainComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Poc2MainComponent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poc2MainComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
