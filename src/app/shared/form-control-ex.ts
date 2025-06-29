import { FormControl, FormControlOptions } from "@angular/forms";

export function createFormControl<T>(value: T, opts: FormControlOptions & { nonNullable: true; displayName: string }): 
    FormControl<T> {
    const control = new FormControl<T>(value, opts);
    const a = control as any;
    a['displayName'] = opts?.displayName;
    return control;
}

export function createFormControlNullable<T>(value: T, opts: FormControlOptions & { nonNullable: false; displayName: string }): 
    FormControl<T | null> {
    const control = new FormControl<T>(value, opts);
    const a = control as any;
    a['displayName'] = opts?.displayName;
    return control;
}
