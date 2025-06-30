import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SharedModule } from './shared/shared.module';
import { IMyMainModel1, IMyMainModel1Full, IMyMainModel2, IMyMainModel2Full } from './models/models';

import { MainComponentComponent } from './components/main-component/main-component.component';
import { MainComponent2Component } from './components/main-component2/main-component2.component';
import { SimpleValidationTestsComponent } from './components/simple-validation-tests/simple-validation-tests.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,

    CommonModule,

    // Project modules
    SharedModule,

    // Project components
    MainComponentComponent,
    MainComponent2Component,
    SimpleValidationTestsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeng-tests';

  readonly defaultMainModel1: IMyMainModel1Full = {
    mainModelNumber: 1,
    mainModelText: 'Main Model 1',
    options1: {
      textOption1: 'Main Model 1 Text Option 1',
      textOption2: 'Main Model 1 Text Option 2 34',
      numberOption1: null,
      numberOption2: -11112,
      numberOption3: 11113,
      options3rdLevel: {
        dateOption1: null
      }
    },
    options2: {
      booleanOption1: false
    },
    // Extra properties not bound by UI/the form
    fullText: 'Full Text for Main Model 1',
    pairs: [
      { key: 'Key 1', value: 'Value 1' },
      { key: 'Key 2', value: 'Value 2' },
      { key: 'Key 3', value: 'Value 3' }
    ]
  }
  mainModel1: IMyMainModel1 = { ...this.defaultMainModel1 };

  readonly defaultMainModel1_2: IMyMainModel1Full = {
    mainModelNumber: 12,
    mainModelText: 'Main Model 1 #2',
    options1: {
      textOption1: 'Main Model 1 #2 Text Option 1',
      textOption2: 'Main Model one #two Text Option 99',
      numberOption1: 1,
      numberOption2: 2,
      numberOption3: 3,
      options3rdLevel: {
        dateOption1: new Date()
      }
    },
    options2: {
      booleanOption1: true
    },
    // Extra properties not bound by UI/the form
    fullText: 'Full Text for Main Model 1',
    pairs: [
      { key: 'Key 1', value: 'Value 1' },
      { key: 'Key 2', value: 'Value 2' },
      { key: 'Key 3', value: 'Value 3' }
    ]
  }
  mainModel1_2: IMyMainModel1 = { ...this.defaultMainModel1_2 };

  readonly defaultMainModel2: IMyMainModel2Full = {
    mainModelNumber2: 2222,
    mainModelText2: 'Main Model 2',
    options1: {
      textOption1: 'Main Model 2 Text Option 1',
      textOption2: 'Main Model 2 Text Option 2',
      numberOption1: 22221,
      numberOption2: 22222,
      numberOption3: 22223,
      options3rdLevel: {
        dateOption1: new Date()
      }
    },
    options2: {
      booleanOption1: true
    },
    // Extra properties not bound by UI/the form
    fullText2: 'Full Text for Main Model 2',
    pairs: [
      { key: 'MainModel2Key', value: 'Main Model 2 Value' }
    ]
  }
  mainModel2: IMyMainModel2 = { ...this.defaultMainModel2 };

  bindMainModel1() {
    this.mainModel1 = { ...this.defaultMainModel1 };
  }

  bindMainModel1_2() {
    this.mainModel1_2 = { ...this.defaultMainModel1_2 };
  }

  bindMainModel2() {
    this.mainModel2 = { ...this.defaultMainModel2 };
  }
}
