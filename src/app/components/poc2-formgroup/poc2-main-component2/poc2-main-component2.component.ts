import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import * as _ from 'lodash-es';

import { SharedModule } from '../../../shared/shared.module';
import { ValidationHelper } from '../../../helpers/validation-helper';
import { IMyMainModel2, IOptionsModel1, IOptionsModel2, MyMainModel2 } from '../../../models/models';

import { FieldErrorSummaryComponent } from "../../common/field-error-summary/field-error-summary.component";
import { FormValidationStatusComponent } from '../../common/form-validation-status/form-validation-status.component';
import { ISubComponent1Form, SubComponent1Component } from '../sub-component1/sub-component1.component';
import { ISubComponent2Form, SubComponent2Component } from '../sub-component2/sub-component2.component';

@Component({
  selector: 'app-poc2-main-component2',
  imports: [
    // Project modules
    SharedModule,

    // Project components
    FieldErrorSummaryComponent,
    FormValidationStatusComponent,
    SubComponent1Component,
    SubComponent2Component
  ],
  templateUrl: './poc2-main-component2.component.html',
  styleUrl: './poc2-main-component2.component.scss'
})
export class Poc2MainComponent2Component {
  @Input() set myModel(value: IMyMainModel2) {
    this.value = value;

    // Reduce the value to only the properties that are in the form
    let newFormValue = new MyMainModel2();
    _.assign(newFormValue, _.pick(value, _.keys(newFormValue)));
    this.form.setValue(newFormValue);
  }

  /**
  * If true, the errors will be displayed as a p-message.
  */
  @Input() showErrorSummaryAsMessage: boolean = false;

  form: FormGroup<IMainComponent2Form>;
  value: IMyMainModel2 | undefined;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      mainModelNumber2: new FormControl<number>(0, { nonNullable: true, validators: [Validators.required] }),
      mainModelText2: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
      options1: SubComponent1Component.createFormGroup(false),
      options2: SubComponent2Component.createFormGroup()
    });
  }

  checkForm() {
    ValidationHelper.logFormGroup('MainComponent', this.form);
  }

  updateValue() {
    // Update the existing value with the form values (this should only be done if valid)
    _.assign(this.value, _.pick(this.form.value, _.keys(new MyMainModel2())));
    console.log('MainComponent2 Value:');
    console.log('this.value:', this.value);
    console.log('this.form.value:', this.form.value);
    console.log('');
  }
}

interface IMainComponent2Form {
  mainModelNumber2: FormControl<number>;
  mainModelText2: FormControl<string>;
  options1: FormGroup<ISubComponent1Form>;
  options2: FormGroup<ISubComponent2Form>;
}
