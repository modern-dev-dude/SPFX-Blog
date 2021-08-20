import * as React from "react";
import styles from "./HelloWorld.module.scss";
import { ListView, IViewField, SelectionMode } from "@pnp/spfx-controls-react";
import * as strings from "HelloWorldWebPartStrings";

const _items = [
  {
    name: "Test",
    Supplier: "Test",
    Code: "23FeT345",
    cfc: "Test",
    dateOfInvoce: "08/20/2021",
    dateOfValue: "08/20/2021",
    fiscalYear: "2021",
    visadirName: "Steve Tester",
    visa1Name: "Larry Tester",
    visa2Name: "Test",
    remarks:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
  {
    name: "asdasdasd",
    Supplier: "Test",
    Code: "23FeT345",
    cfc: "Test",
    dateOfInvoce: "08/20/2021",
    dateOfValue: "08/20/2021",
    fiscalYear: "2021",
    visadirName: "Steve Tester",
    visa1Name: "Larry Tester",
    visa2Name: "Test",
    remarks:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
  {
    name: "Test",
    Supplier: "Test",
    Code: "23FeT345",
    cfc: "Test",
    dateOfInvoce: "08/20/2021",
    dateOfValue: "08/20/2021",
    fiscalYear: "2021",
    visadirName: "Steve Tester",
    visa1Name: "Larry Tester",
    visa2Name: "Test",
    remarks:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
  {
    name: "Test",
    Supplier: "Test",
    Code: "23FeT345",
    cfc: "Test",
    dateOfInvoce: "08/20/2021",
    dateOfValue: "08/20/2021",
    fiscalYear: "2021",
    visadirName: "Steve Tester",
    visa1Name: "Larry Tester",
    visa2Name: "Test",
    remarks:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
  {
    name: "Test",
    Supplier: "Test",
    Code: "23FeT345",
    cfc: "Test",
    dateOfInvoce: "08/20/2021",
    dateOfValue: "08/20/2021",
    fiscalYear: "2021",
    visadirName: "Steve Tester",
    visa1Name: "Larry Tester",
    visa2Name: "Test",
    remarks:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop",
  },
];
const viewFields: IViewField[] = [
  {
    name: "name",
    displayName: strings.fileNameTitle,
    linkPropertyName: "serverRelativeUrl",
    isResizable: true,
    sorting: true,
    minWidth: 200,
    maxWidth: 300,
  },
  {
    name: "Supplier",
    displayName: strings.supplierTitle,
    isResizable: true,
    sorting: true,
    minWidth: 130,
    maxWidth: 200,
  },
  {
    name: "Code",
    displayName: strings.codeTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: true,
    minWidth: 60,
    maxWidth: 200,
  },
  {
    name: "cfc",
    displayName: "CFC",
    isResizable: true,
    sorting: true,
    minWidth: 30,
    maxWidth: 200,
  },
  {
    name: "dateOfInvoce",
    displayName: strings.invoiceDateTitle,
    isResizable: true,
    sorting: true,
    minWidth: 90,
    maxWidth: 100,
  },
  {
    name: "dateOfValue",
    displayName: strings.valueDateTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: true,
    minWidth: 90,
    maxWidth: 150,
  },
  {
    name: "fiscalYear",
    displayName: strings.fiscalYearTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: true,
    minWidth: 50,
  },
  {
    name: "visadirName",
    displayName: "Dir",
    linkPropertyName: "c",
    isResizable: true,
    sorting: true,
    minWidth: 100,
    maxWidth: 150,
  },
  {
    name: "visa1Name",
    displayName: "Visa 1",
    linkPropertyName: "c",
    isResizable: true,
    sorting: true,
    minWidth: 100,
    maxWidth: 150,
  },
  {
    name: "visa2Name",
    displayName: "Visa 2",
    linkPropertyName: "c",
    isResizable: true,
    sorting: true,
    minWidth: 100,
    maxWidth: 150,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
  {
    name: "remarks",
    displayName: strings.remarksTitle,
    linkPropertyName: "c",
    isResizable: true,
    sorting: false,
    minWidth: 100,
    maxWidth: 200,
  },
];
const HelloWorld = () => {
  const _getDropFiles = (args) => {
    console.log(args);
  };
  const _getSelection = (args) => {
    console.log(args);
  };

  return (
    <div className={styles.helloWorld}>
      <div className={styles.container}>
        <div className={styles.row}>
          <ListView
            items={_items}
            viewFields={viewFields}
            iconFieldName="ServerRelativeUrl"
            compact={true}
            selectionMode={SelectionMode.multiple}
            selection={_getSelection}
            showFilter={true}
            // defaultFilter="John"
            filterPlaceHolder="Search..."
            // groupByFields={groupByFields}
            dragDropFiles={true}
            onDrop={_getDropFiles}
            stickyHeader={true}
          />
        </div>
      </div>
    </div>
  );
};
export default HelloWorld;
