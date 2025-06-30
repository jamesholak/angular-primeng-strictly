import { Component, forwardRef, Input } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, FormGroupDirective, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgForm, Validators } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module';

import { BaseValidatableSubComponent } from '../../../shared/base-validatable-sub-component';
import { createFormControl, createFormControlNullable } from '../../../shared/form-control-ex';
import { FieldErrorListComponent } from "../../common/field-error-list/field-error-list.component";

@Component({
  selector: 'app-poc2-sub-component3rd-level',
  imports: [
    // Project modules
    SharedModule,

    // Project components
    FieldErrorListComponent
  ],
  templateUrl: './sub-component3rd-level.component.html',
  styleUrl: './sub-component3rd-level.component.scss'
})
export class SubComponent3rdLevelComponent {
  @Input() form!: FormGroup<ISubComponent3rdLevelForm>;

  static createFormGroup(): FormGroup<ISubComponent3rdLevelForm> {
    const form = new FormGroup<ISubComponent3rdLevelForm>({
      dateOption1: createFormControlNullable<Date | null>(null, {
        displayName: 'Date Option 1',
        nonNullable: false,
        validators: [Validators.required]
      })
    });
    return form;
  }

  constructor(private fb: FormBuilder) {
  }
}

export interface ISubComponent3rdLevelForm {
  dateOption1: FormControl<Date | null>;
}