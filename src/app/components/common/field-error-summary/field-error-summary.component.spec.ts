import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldErrorSummaryComponent } from './field-error-summary.component';

describe('FieldErrorSummaryComponent', () => {
  let component: FieldErrorSummaryComponent;
  let fixture: ComponentFixture<FieldErrorSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldErrorSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldErrorSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
