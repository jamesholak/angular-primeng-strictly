import { AbstractControl, FormControl, FormGroup } from "@angular/forms";

export class ValidationHelper {
  public static logFormGroup<T extends { [K in keyof T]: AbstractControl<any, any>; }>(name: string, form: FormGroup<T>) {
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
}

export interface IKeyAccessable {
  [key: string]: any | undefined;
}
