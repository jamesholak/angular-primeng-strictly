import { Component } from '@angular/core';

import { FieldErrorListComponent } from "../common/field-error-list/field-error-list.component";
import { SharedModule } from '../../shared/shared.module';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { createFormControl, createFormControlNullable } from '../../shared/form-control-ex';
import { IKeyValuePair } from '../../models/models';


@Component({
  selector: 'app-simple-validation-tests',
  imports: [
    // Project modules
    SharedModule,

    // Project components
    FieldErrorListComponent
  ],
  templateUrl: './simple-validation-tests.component.html',
  styleUrl: './simple-validation-tests.component.scss'
})
export class SimpleValidationTestsComponent {
  form: FormGroup<ISimpleValidationTestsForm>;

  constructor(private fb: FormBuilder) {
    const textOption1DisplayName = 'Text Option 1';

    this.form = new FormGroup<ISimpleValidationTestsForm>({
      dateOption1: createFormControlNullable<Date | null>(null, {
        displayName: 'Date Option 1',
        nonNullable: false,
        validators: [Validators.required]
      }),
      numberOption1: createFormControlNullable<number | null>(null, {
        displayName: 'Number Option 1',
        nonNullable: false,
        validators: [Validators.required]
      }),
      radioButtonOption1: createFormControlNullable<IKeyValuePair | null>(null, {
        displayName: 'Radio Button Option 1',
        nonNullable: false,
        validators: [Validators.required]
      }),
      selectOption1: createFormControlNullable<IKeyValuePair | null>(null, {
        displayName: 'Select Option 1',
        nonNullable: false,
        validators: [Validators.required]
      }),
      textareaOption1: createFormControl<string>('', {
        displayName: 'Textarea Option 1',
        nonNullable: true,
        validators: [Validators.required]
      }),
      textOption1: createFormControl<string>('', {
        displayName: textOption1DisplayName,
        nonNullable: true,
        validators: [Validators.required]
      })
    });
  }


  selectOptions1Options: IKeyValuePair[] = [
    { key: 'option1', value: 'Option 1' },
    { key: 'option2', value: 'Option 2' },
    { key: 'option3', value: 'Option 3' }
  ];

  checkForm() {
    if (this.form.valid) {
      // Form is valid, do something
    } else {
      // Form is invalid, mark all fields as touched
      this.form.markAllAsTouched();
    }
  }
}

interface ISimpleValidationTestsForm {
  dateOption1: FormControl<Date | null>;
  numberOption1: FormControl<number | null>;
  radioButtonOption1: FormControl<IKeyValuePair | null>;
  selectOption1: FormControl<IKeyValuePair | null>;
  textareaOption1: FormControl<string>;
  textOption1: FormControl<string>;
}
