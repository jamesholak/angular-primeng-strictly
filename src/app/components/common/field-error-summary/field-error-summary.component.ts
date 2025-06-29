import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module';

import { FieldErrorListComponent } from '../field-error-list/field-error-list.component'
import { ValidationHelper } from '../../../helpers/validation-helper';

@Component({
  selector: 'app-field-error-summary',
  imports: [

    // Project modules
    SharedModule,

    // Project components
    FieldErrorListComponent
  ],
  templateUrl: './field-error-summary.component.html',
  styleUrl: './field-error-summary.component.scss'
})
export class FieldErrorSummaryComponent {
  @Input()
  set form(value: FormGroup<any>) {
    this._form = value;
  }
  get form(): FormGroup<any> {
    return this._form;
  }
  private _form!: FormGroup<any>;

  @Input() showFormErrors = true;
  @Input() showControlErrors = true;

  /**
 * If true, the errors will be displayed as a p-message.
 */
  @Input() showAsMessage: boolean = false;

  controlsArray(): AbstractControl<any>[] {
    return Object.values(this.form.controls);
  }

  errorKeys(errors: ValidationErrors | null): string[] {
    return ValidationHelper.errorKeys(errors);
  }

  isComposite(errors: ValidationErrors | null): boolean {
    return errors ? errors[ValidationHelper.COMPOSITE] === true : false;
  }

  getKeys(value: any): string[] {
    return Object.keys(value);
  }
}
