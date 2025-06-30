import { Component, forwardRef, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module';

import { BaseValidatableSubComponent } from '../../../shared/base-validatable-sub-component';
import { createFormControl } from '../../../shared/form-control-ex';
import { FieldErrorListComponent } from "../../common/field-error-list/field-error-list.component";

@Component({
  selector: 'app-sub-component2',
  imports: [
    // Project modules
    SharedModule,

    // Project components
    FieldErrorListComponent
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
  /**
 * If true, the errors will be displayed as a p-message.
 */
  @Input() showErrorSummaryAsMessage: boolean = false;

  form: FormGroup<ISubComponent2Form>;

  constructor(private myFb: FormBuilder) {
    super(myFb);

    this.form = new FormGroup<ISubComponent2Form>({
      booleanOption1: createFormControl<boolean>(false, {
        displayName: 'Boolean Option 1',
        nonNullable: true,
        validators: [Validators.requiredTrue]
      })
    });
  }
}

interface ISubComponent2Form {
  booleanOption1: FormControl<boolean>;
}
