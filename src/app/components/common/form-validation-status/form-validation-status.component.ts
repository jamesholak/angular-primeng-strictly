import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-validation-status',
  imports: [],
  templateUrl: './form-validation-status.component.html',
  styleUrl: './form-validation-status.component.scss'
})
export class FormValidationStatusComponent {
  @Input() form!: FormGroup<any>;
}
