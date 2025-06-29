import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleValidationTestsComponent } from './simple-validation-tests.component';

describe('SimpleValidationTestsComponent', () => {
  let component: SimpleValidationTestsComponent;
  let fixture: ComponentFixture<SimpleValidationTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleValidationTestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleValidationTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
