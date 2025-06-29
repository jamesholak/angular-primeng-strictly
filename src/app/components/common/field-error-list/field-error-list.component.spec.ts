import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldErrorListComponent } from './field-error-list.component';

describe('FieldErrorListComponent', () => {
  let component: FieldErrorListComponent;
  let fixture: ComponentFixture<FieldErrorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FieldErrorListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldErrorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
