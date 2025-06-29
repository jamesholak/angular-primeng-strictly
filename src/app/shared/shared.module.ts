import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DatePickerModule } from 'primeng/datepicker';
import { FieldsetModule } from 'primeng/fieldset';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectModule } from 'primeng/select';
import { TabsModule } from 'primeng/tabs';
import { TextareaModule } from 'primeng/textarea';

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
    DatePickerModule,
    FieldsetModule,
    InputNumberModule,
    InputTextModule,
    MessageModule,
    RadioButtonModule,
    SelectModule,
    TabsModule,
    TextareaModule
  ],
  imports: [
    // Angular modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // PrimeNG modules
    ButtonModule,
    CheckboxModule,
    DatePickerModule,
    FieldsetModule,
    InputNumberModule,
    InputTextModule,
    MessageModule,
    RadioButtonModule,
    SelectModule,
    TabsModule,
    TextareaModule
  ]
})
export class SharedModule { }
