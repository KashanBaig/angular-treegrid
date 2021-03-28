import { Component, OnInit } from "@angular/core";
import { sampleData } from "./datasource";
import {
  PageSettingsModel,
  SortSettingsModel,
  EditSettingsModel
} from "@syncfusion/ej2-angular-treegrid";

import { CommandModel } from '@syncfusion/ej2-grids';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public data: Object[];
  public sortSettings: SortSettingsModel;
  public pageSettings: PageSettingsModel;
  public editSettings: EditSettingsModel;
  public toolbar: string[];
  public numericParams: Object;
  public commands: CommandModel[];

  ngOnInit(): void {
    this.data = sampleData;
    this.sortSettings = {
      columns: [
        { field: "taskID", direction: "Ascending" }
      ]
    };
    this.pageSettings = { pageSize: 20 };
    this.editSettings = { 
      allowEditing: true, 
      allowAdding: true, 
      allowDeleting: true, 
      mode: 'Row' 
    };

    this.numericParams = { 
      params: { 
        format: 'n' 
      }
    };
    this.toolbar = ["Add", "Edit", "Delete", "Update", "Cancel"];

    this.commands = [
      { type: 'Edit', buttonOption: { iconCss: ' e-icons e-edit', cssClass: 'e-flat' } },
      { type: 'Delete', buttonOption: { iconCss: 'e-icons e-delete', cssClass: 'e-flat' } },
      { type: 'Save', buttonOption: { iconCss: 'e-icons e-update', cssClass: 'e-flat' } },
      { type: 'Cancel', buttonOption: { iconCss: 'e-icons e-cancel-icon', cssClass: 'e-flat' } }
    ];
  }
}
