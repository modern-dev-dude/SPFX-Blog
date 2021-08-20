declare interface IHelloWorldWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  fileNameTitle:string;
  supplierTitle:string;
  RequiredFieldText:string;
  codeTitle:string;
  invoiceDateTitle:string;
  valueDateTitle:string;
  fiscalYearTitle:string;
  remarksTitle:string;
}

declare module 'HelloWorldWebPartStrings' {
  const strings: IHelloWorldWebPartStrings;
  export = strings;
}
