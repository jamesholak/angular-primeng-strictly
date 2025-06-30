import { Component, forwardRef, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module';

import { BaseValidatableSubComponent } from '../../../shared/base-validatable-sub-component';
import { createFormControl } from '../../../shared/form-control-ex';
import { FieldErrorListComponent } from "../../common/field-error-list/field-error-list.component";

@Component({
  selector: 'app-poc2-sub-component2',
  imports: [
    // Project modules
    SharedModule,

    // Project components
    FieldErrorListComponent
  ],
  templateUrl: './sub-component2.component.html',
  styleUrl: './sub-component2.component.scss'
})
export class SubComponent2Component {
  /**
   * If true, the errors will be displayed as a p-message.
   */
  @Input() showErrorSummaryAsMessage: boolean = false;

  @Input() form!: FormGroup<ISubComponent2Form>;

  static createFormGroup(): FormGroup<ISubComponent2Form> {
    const form = new FormGroup<ISubComponent2Form>({
      booleanOption1: createFormControl<boolean>(false, {
        displayName: 'Boolean Option 1',
        nonNullable: true,
        validators: [Validators.requiredTrue]
      })
    });
    return form;
  }

  constructor() {
  }
}

export interface ISubComponent2Form {
  booleanOption1: FormControl<boolean>;
}
