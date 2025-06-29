import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from "@angular/forms";

import * as _ from 'lodash-es';

import { ValidationHelper } from "../helpers/validation-helper";

export abstract class BaseValidatableSubComponent<T extends { [K in keyof T]: AbstractControl<any>; }>
  implements ControlValueAccessor, Validator {

  abstract form: FormGroup<T>;

  constructor(
    protected fb: FormBuilder
  ) {
  }

  writeValue(value: any): void {
    if (value) {
      this.form.setValue(value);
    }
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.form.statusChanges.subscribe(fn);
  }

  validate(control: AbstractControl): ValidationErrors | null {
    ValidationHelper.logFormGroup('TODO FormGroup', this.form);

    const errors: { [key: string]: any } = { [ValidationHelper.COMPOSITE]: true };

    if (this.form.errors != null) {
      _.assign(errors, { '_form': { 'form': { ...this.form.errors } } });
    }

    for (const key in this.form.controls) {
      if (this.form.controls.hasOwnProperty(key)) {
        const control = this.form.controls[key];
        const controlErrors = control.errors;
        if (controlErrors) {
          errors[key] = { [ValidationHelper.DISPLAY_NAME]: (control as any)['displayName'], ...controlErrors };
        }
      }
    }

    return this.form.valid ? null : errors;
  }
}
