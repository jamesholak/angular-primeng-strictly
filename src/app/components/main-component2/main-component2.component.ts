import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import * as _ from 'lodash-es';

import { SharedModule } from '../../shared/shared.module';
import { ValidationHelper } from '../../helpers/validation-helper';
import { IMyMainModel2, IOptionsModel1, IOptionsModel2, MyMainModel2 } from '../../models/models';

import { FieldErrorSummaryComponent } from "../common/field-error-summary/field-error-summary.component";
import { SubComponent1Component } from '../sub-component1/sub-component1.component';
import { SubComponent2Component } from '../sub-component2/sub-component2.component';

@Component({
  selector: 'app-main-component2',
  imports: [
    // Project modules
    SharedModule,

    // Project components
    FieldErrorSummaryComponent,
    SubComponent1Component,
    SubComponent2Component
  ],
  templateUrl: './main-component2.component.html',
  styleUrl: './main-component2.component.scss'
})
export class MainComponent2Component {
  @Input() set myModel(value: IMyMainModel2) {
    this.value = value;

    // Reduce the value to only the properties that are in the form
    let newFormValue = new MyMainModel2();
    _.assign(newFormValue, _.pick(value, _.keys(newFormValue)));
    this.form.setValue(newFormValue);
  }

  form: FormGroup<IMainComponent2Form>;
  value: IMyMainModel2 | undefined;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      mainModelNumber2: new FormControl<number>(0, { nonNullable: true, validators: [Validators.required] }),
      mainModelText2: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
      options1: new FormControl<IOptionsModel1>({
        textOption1: '',
        textOption2: '',
        numberOption1: 0,
        numberOption2: 0,
        numberOption3: 0
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
  options1: FormControl<IOptionsModel1>;
  options2: FormControl<IOptionsModel2>;
}
