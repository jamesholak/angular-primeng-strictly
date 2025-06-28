import { Component, forwardRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { BaseValidatableSubComponent } from '../../shared/base-validatable-sub-component';

@Component({
  selector: 'app-sub-component1',
  imports: [
    // Project modules
    SharedModule,
  ],
  templateUrl: './sub-component1.component.html',
  styleUrl: './sub-component1.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SubComponent1Component),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SubComponent1Component),
      multi: true
    }
  ]
})
export class SubComponent1Component extends BaseValidatableSubComponent<ISubComponent1Form> {
  form: FormGroup<ISubComponent1Form>;

  constructor(private myFb: FormBuilder) {
    super(myFb);

    this.form = new FormGroup<ISubComponent1Form>({
      textOption1: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
      textOption2: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
      numberOption1: new FormControl<number>(0, { nonNullable: true, validators: [Validators.required, Validators.min(0)] }),
      numberOption2: new FormControl<number>(0, { nonNullable: true, validators: [Validators.required, Validators.min(0)] })
    });
  }
}

interface ISubComponent1Form {
  textOption1: FormControl<string>;
  textOption2: FormControl<string>;
  numberOption1: FormControl<number>;
  numberOption2: FormControl<number>;
}
