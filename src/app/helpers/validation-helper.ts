import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export class ValidationHelper {
  public static readonly COMPOSITE = '_composite';
  public static readonly DISPLAY_NAME = '_display_name';

  public static logFormGroup<T extends { [K in keyof T]: AbstractControl<any>; }>(name: string, form: FormGroup<T>) {
    console.log("========================================");
    console.log(`Form Group: ${name}`);
    console.log("form.valid", form.valid);
    console.log("form.value", form.value);
    console.log("form.errors", form.errors);
    Object.keys(form.controls).forEach(key => {
      var obj = (form.controls as IKeyAccessable)[key];
      const control = obj as FormControl<any>;
      console.log('Key:', key, 'Value:', control.value, 'Valid:', control.valid, 'Errors:', control.errors);
    });
    console.log("========================================");
    console.log("");
  }


  public static createRegExValidatorFn(key: string, message: string, regeEx: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const invalid = regeEx.test(control.value);
      return invalid ? { [key]: { value: control.value, message: message } } : null;
    };
  }

  public static errorKeys(errors: ValidationErrors | null): string[] {
    if (!errors) {
      return [];
    }

    return Object.keys(errors).filter(key => key != ValidationHelper.COMPOSITE && key != ValidationHelper.DISPLAY_NAME);
  }

  public static getErrorMessage(displayName: string | undefined, errors: ValidationErrors, errorKey: string) {
    displayName = displayName || 'Value';
    let error = errors[errorKey];

    // If errors is a composite, the errors have one extra level for each control or _form.
    if (false && errors[ValidationHelper.COMPOSITE] !== undefined) {
      // there should only be one key in the composite error object
      error = error[Object.keys(error)[0]];
    }

    const message = error['message'];
    if (typeof message === 'string') {
      return message;
    }
    if (errorKey === 'message') {
      return error;
    }

    // { 'required' : true } so error === true
    if (errorKey === 'required') {
      if (error === true) {
        return `${displayName} is required`;
      }
    }

    // { max: 1000, actual: 11112 }
    if (errorKey === 'min') {
      return `${displayName} must be greater than or equal to ${error['min']}`;
    }

    // { min: 1000, actual: 11112 }
    if (errorKey === 'max') {
      return `${displayName} must be less than or equal to ${error['max']}`;
    }

    console.log('TODO: handle other error types', error);
    return `${displayName} is invalid`;
  }
}

export interface IKeyAccessable {
  [key: string]: any | undefined;
}
