import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent2Component } from './main-component2.component';

describe('MainComponent2Component', () => {
  let component: MainComponent2Component;
  let fixture: ComponentFixture<MainComponent2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponent2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
