import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [],
  exports: [
    // Angular modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // PrimeNG components
    ButtonModule,
    CheckboxModule,
    FieldsetModule,
    InputNumberModule,
    InputTextModule
  ],
  imports: [
    // Angular modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // PrimeNG modules
    ButtonModule,
    CheckboxModule,
    FieldsetModule,
    InputNumberModule,
    InputTextModule
  ]
})
export class SharedModule { }
