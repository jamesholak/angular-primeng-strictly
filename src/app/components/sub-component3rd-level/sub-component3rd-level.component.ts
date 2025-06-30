import { Component, forwardRef, Input } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, FormGroupDirective, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgForm, Validators } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { BaseValidatableSubComponent } from '../../shared/base-validatable-sub-component';
import { createFormControl, createFormControlNullable } from '../../shared/form-control-ex';
import { FieldErrorListComponent } from "../common/field-error-list/field-error-list.component";

@Component({
  selector: 'app-sub-component3rd-level',
  imports: [
    // Project modules
    SharedModule,

    // Project components
    FieldErrorListComponent
  ],
  templateUrl: './sub-component3rd-level.component.html',
  styleUrl: './sub-component3rd-level.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SubComponent3rdLevelComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SubComponent3rdLevelComponent),
      multi: true
    }
  ],
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class SubComponent3rdLevelComponent extends BaseValidatableSubComponent<ISubComponent3rdLevelForm> {
  form: FormGroup<ISubComponent3rdLevelForm>;

  constructor(private myFb: FormBuilder) {
    super(myFb);

    this.form = new FormGroup<ISubComponent3rdLevelForm>({
      dateOption1: createFormControlNullable<Date | null>(null, {
        displayName: 'Date Option 1',
        nonNullable: false,
        validators: [Validators.required]
      })
    });
  }
}

interface ISubComponent3rdLevelForm {
  dateOption1: FormControl<Date | null>;
}
