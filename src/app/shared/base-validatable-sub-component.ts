import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from "@angular/forms";
import { ValidationHelper } from "../helpers/validation-helper";

export abstract class BaseValidatableSubComponent<T extends { [K in keyof T]: AbstractControl<any, any>; }>
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

    return this.form.valid ? null : { invalid: true };
  }
}
