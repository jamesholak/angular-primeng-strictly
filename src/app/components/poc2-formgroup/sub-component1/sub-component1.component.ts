import { Component, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlContainer, FormBuilder, FormControl, FormGroup, FormGroupDirective, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module';

import { BaseValidatableSubComponent } from '../../../shared/base-validatable-sub-component';
import { createFormControl, createFormControlNullable } from '../../../shared/form-control-ex';
import { FieldErrorListComponent } from "../../common/field-error-list/field-error-list.component";
import { FieldErrorSummaryComponent } from "../../common/field-error-summary/field-error-summary.component";
import { ValidationHelper } from '../../../helpers/validation-helper';

import { ISubComponent3rdLevelForm, SubComponent3rdLevelComponent } from '../sub-component3rd-level/sub-component3rd-level.component';
import { IOptions3rdLevel } from '../../../models/models';

@Component({
  selector: 'app-poc2-sub-component1',
  imports: [
    // Project modules
    SharedModule,
    FieldErrorListComponent,
    FieldErrorSummaryComponent,

    // Project components
    SubComponent3rdLevelComponent
  ],
  templateUrl: './sub-component1.component.html',
  styleUrl: './sub-component1.component.scss'
})
export class SubComponent1Component {
  @Input() showCrossFieldValidationErrors = true;
  /**
 * If true, the errors will be displayed as a p-message.
 */
  @Input() showErrorSummaryAsMessage: boolean = false;

  @Input() form!: FormGroup<ISubComponent1Form>;

  static clsId: number = 1;

  static createFormGroup(showCrossFieldValidationErrors: boolean): FormGroup<ISubComponent1Form> {
    const textOption2DisplayName = 'Text Option 2';

    const form = new FormGroup<ISubComponent1Form>({
      textOption1: createFormControl<string>('', {
        displayName: 'Text Option 1 Display Name',
        nonNullable: true,
        validators: [Validators.required]
      }),
      textOption2: createFormControl<string>('', {
        displayName: textOption2DisplayName,
        nonNullable: true,
        validators: [
          Validators.required,
          this.createTextOption2ValidatorFn1(textOption2DisplayName),
          this.createTextOption2ValidatorFn2(textOption2DisplayName)
        ]
      }),
      numberOption1: createFormControlNullable<number>(0, {
        displayName: 'Number Option 1 Display Name',
        nonNullable: false,
        validators: [
          Validators.required,
          Validators.min(0)
        ]
      }),
      numberOption2: createFormControl<number>(0, {
        displayName: 'Number Option 2 Display Name',
        nonNullable: true,
        validators: [
          Validators.required, Validators.min(0), Validators.max(1000)
        ]
      }),
      numberOption3: createFormControl<number>(0, {
        displayName: 'Number Option 3 Display Name',
        nonNullable: true,
        validators: [
          Validators.required, Validators.min(0), Validators.max(1000)
        ]
      }),
      options3rdLevel: SubComponent3rdLevelComponent.createFormGroup()
    }, { validators: SubComponent1Component.createCrossFieldValidatorFn(showCrossFieldValidationErrors, 
      SubComponent1Component.clsId++) });

    return form;
  }

  constructor() {

  }

  static createTextOption2ValidatorFn1(displayName: string): ValidatorFn {
    const regex = /[1-2]+/;
    return ValidationHelper.createRegExValidatorFn('textOption2Validator1', `${displayName} must not contain numbers between 1 and 2`,
      regex);
  }
  static createTextOption2ValidatorFn2(displayName: string): ValidatorFn {
    const regex = /[3-4]+/;
    return ValidationHelper.createRegExValidatorFn('textOption2Validator2', `${displayName} must not contain numbers between 3 and 4`,
      regex);
  }

  static createCrossFieldValidatorFn(showCrossFieldValidationErrors: boolean, id: number): ValidatorFn {
    return (
      control: AbstractControl,
    ): ValidationErrors | null => {
      if (!showCrossFieldValidationErrors || id % 2 === 0) {
        return null;
      }
      return { message: 'Cross field validation error' };
    };
  }
}

export interface ISubComponent1Form {
  textOption1: FormControl<string>;
  textOption2: FormControl<string>;
  numberOption1: FormControl<number | null>;
  numberOption2: FormControl<number>;
  numberOption3: FormControl<number>;
  options3rdLevel: FormGroup<ISubComponent3rdLevelForm>;
}
