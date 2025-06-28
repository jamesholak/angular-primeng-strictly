import { Component, forwardRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { BaseValidatableSubComponent } from '../../shared/base-validatable-sub-component';

@Component({
  selector: 'app-sub-component2',
  imports: [
    // Project modules
    SharedModule,
  ],
  templateUrl: './sub-component2.component.html',
  styleUrl: './sub-component2.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SubComponent2Component),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SubComponent2Component),
      multi: true
    }
  ]
})
export class SubComponent2Component extends BaseValidatableSubComponent<ISubComponent2Form> {
  form: FormGroup<ISubComponent2Form>;

  constructor(private myFb: FormBuilder) {
    super(myFb);

    this.form = new FormGroup<ISubComponent2Form>({
      booleanOption1: new FormControl<boolean>(false, { nonNullable: true, validators: [Validators.required] })
    });
  }
}

interface ISubComponent2Form {
  booleanOption1: FormControl<boolean>;
}
