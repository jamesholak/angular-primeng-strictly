import { Component, Input } from '@angular/core';
import { ControlContainer, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';

import * as _ from 'lodash-es';

import { SharedModule } from '../../../shared/shared.module';
import { ValidationHelper } from '../../../helpers/validation-helper';
import { IMyMainModel1, IOptionsModel1, IOptionsModel2, MyMainModel1 } from '../../../models/models';

import { FieldErrorSummaryComponent } from "../../common/field-error-summary/field-error-summary.component";
import { FormValidationStatusComponent } from '../../common/form-validation-status/form-validation-status.component';
import { SubComponent1Component } from '../sub-component1/sub-component1.component';
import { SubComponent2Component } from '../sub-component2/sub-component2.component';

@Component({
  selector: 'app-main-component',
  imports: [
    // Project modules
    SharedModule,

    // Project components
    FieldErrorSummaryComponent,
    FormValidationStatusComponent,
    SubComponent1Component,
    SubComponent2Component
  ],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class MainComponentComponent {
  @Input() set myModel(value: IMyMainModel1) {
    this.value = value;

    // Reduce the value to only the properties that are in the form
    let newFormValue = new MyMainModel1();
    _.assign(newFormValue, _.pick(value, _.keys(newFormValue)));
    this.form.setValue(newFormValue);
  }

  @Input() showCrossFieldValidationErrors = true;

  /**
  * If true, the errors will be displayed as a p-message.
  */
  @Input() showErrorSummaryAsMessage: boolean = false;

  form: FormGroup<IMainComponentForm>;
  value: IMyMainModel1 | undefined;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      mainModelNumber: new FormControl<number>(0, { nonNullable: true, validators: [Validators.required] }),
      mainModelText: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
      options1: new FormControl<IOptionsModel1>({
        textOption1: '',
        textOption2: '',
        numberOption1: 0,
        numberOption2: 0,
        numberOption3: 0,
        options3rdLevel: {
          dateOption1: null
        }
      }, { nonNullable: true, validators: [Validators.required] }),
      options2: new FormControl<IOptionsModel2>({
        booleanOption1: false
      }, { nonNullable: true, validators: [Validators.required] })
    });
  }


  checkForm() {
    ValidationHelper.logFormGroup('MainComponent', this.form);
  }

  updateValue() {
    // Update the existing value with the form values (this should only be done if valid)
    _.assign(this.value, _.pick(this.form.value, _.keys(new MyMainModel1())));
    console.log('MainComponent1 Value:');
    console.log('this.value:', this.value);
    console.log('this.form.value:', this.form.value);
    console.log('');
  }
}

interface IMainComponentForm {
  mainModelNumber: FormControl<number>;
  mainModelText: FormControl<string>;
  options1: FormControl<IOptionsModel1>;
  options2: FormControl<IOptionsModel2>;
}
