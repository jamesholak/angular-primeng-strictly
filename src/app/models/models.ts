export interface IKeyValuePair {
  key: string;
  value: any;
}

export interface IMyMainModel1 {
  mainModelNumber: number;
  mainModelText: string;
  options1: IOptionsModel1;
  options2: IOptionsModel2;
}
export class MyMainModel1 implements IMyMainModel1 {
  mainModelNumber: number = 0;
  mainModelText: string = '';
  options1: IOptionsModel1 = {
    textOption1: '',
    textOption2: '',
    numberOption1: 0,
    numberOption2: 0,
    numberOption3: 0
  };
  options2: IOptionsModel2 = {
    booleanOption1: false
  };
}

export interface IMyMainModel1Full extends IMyMainModel1 {
  fullText: string,
  pairs: IKeyValuePair[];
}

export interface IMyMainModel2 {
  mainModelNumber2: number;
  mainModelText2: string;
  options1: IOptionsModel1;
  options2: IOptionsModel2;
}
export class MyMainModel2 implements IMyMainModel2 {
  mainModelNumber2: number = 0;
  mainModelText2: string = '';
  options1: IOptionsModel1 = {
    textOption1: '',
    textOption2: '',
    numberOption1: 0,
    numberOption2: 0,
    numberOption3: 0
  };
  options2: IOptionsModel2 = {
    booleanOption1: false
  };
}
export interface IMyMainModel2Full extends IMyMainModel2 {
  fullText2: string,
  pairs: IKeyValuePair[];
}

export interface IOptionsModel1 {
  textOption1: string;
  textOption2: string;
  numberOption1: number | null;
  numberOption2: number;
  numberOption3: number;
}

export interface IOptionsModel2 {
  booleanOption1: boolean;
}
