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

  getErrorList() {
    const list: ErrorData[] = [];
    this.controlsArray().forEach(control => {
      const errors = control.errors;
      if (!errors) {
        return;
      }

      // only the first level will pass controls to field error list, so we do that logic here.
      const isComposite = this.isComposite(errors);
      if (isComposite) {
        // If the control is a composite, it might have other composites
        Object.keys(errors).forEach(errorKey => {
          this.addToErrorDataList(errors[errorKey], list);
        });
      } else {
        const errorData = new ErrorData();
        // We use isComposite to control which properties will be sent to the field error list.
        // For the top level items, we will pass the control into the field error list.
        errorData.control = control;
        errorData.isComposite = false;
        list.push(errorData);
      }
    });
    return list;
  }

  private addToErrorDataList(errors: ValidationErrors | null, list: ErrorData[]) {
    if (!errors) {
      return;
    }
    const isComposite = this.isComposite(errors);
    if (isComposite) {
      // If the control is a composite, it might have other composites
      Object.keys(errors).forEach(errorKey => {
        this.addToErrorDataList(errors[errorKey], list);
      });
    } else {
      const errorData = new ErrorData();
      // We use isComposite to control which properties will be sent to the field error list.
      // For composite errors, we will pass the errors into the field error list.
      errorData.isComposite = true;
      errorData.errors = errors;
      list.push(errorData);
    }
  }
}

class ErrorData {
  public control?: AbstractControl<any>;
  public errors?: ValidationErrors;
  public isComposite: boolean = false;
}
