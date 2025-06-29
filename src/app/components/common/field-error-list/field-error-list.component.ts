import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

import { SharedModule } from '../../../shared/shared.module';
import { ValidationHelper } from '../../../helpers/validation-helper';

@Component({
  selector: 'app-field-error-list, [app-field-error-list]',
  imports: [

    // Project modules
    SharedModule
  ],
  templateUrl: './field-error-list.component.html',
  styleUrl: './field-error-list.component.scss'
})
export class FieldErrorListComponent {
  @Input() displayName?: string;
  /**
   * If true, the errors will be displayed as a p-message.
   */
  @Input() showAsMessage: boolean = false;

  /**
   * Sets the errors to display.  This will also set the display name if it exists in the errors.
   */
  @Input() set errors(value: ValidationErrors | null) {
    this._errors = value;
    if (value) {
      this.displayName = value[ValidationHelper.DISPLAY_NAME];
    }
  }
  get errors(): ValidationErrors | null {
    return this._errors;
  }
  _errors: ValidationErrors | null = null;

  /**
   * Sets the source form control to display errors from.  This will also set the display name if it exists in the control.
   */
  @Input() set sourceFormControl(control: AbstractControl) {
    this._sourceFormControl = control;
    this.errors = control.errors;
    this.displayName = (control as any)['displayName'];
  }
  get sourceFormControl(): AbstractControl | undefined {
    return this._sourceFormControl;
  }
  _sourceFormControl: AbstractControl | undefined;

  errorKeys(): string[] {
    return ValidationHelper.errorKeys(this.errors);
  }

  getErrorMessage(errorKey: string) {
    return ValidationHelper.getErrorMessage(this.displayName, this.errors!, errorKey);
  }
}
