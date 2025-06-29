import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationStatusComponent } from './form-validation-status.component';

describe('FormValidationStatusComponent', () => {
  let component: FormValidationStatusComponent;
  let fixture: ComponentFixture<FormValidationStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValidationStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormValidationStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
