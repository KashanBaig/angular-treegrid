import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TreeGridModule } from "@syncfusion/ej2-angular-treegrid";
import {
  PageService,
  SortService,
  FilterService,
  EditService,
  ToolbarService
} from "@syncfusion/ej2-angular-treegrid";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TreeGridModule],
  providers: [PageService, SortService, FilterService, EditService, ToolbarService],
  bootstrap: [AppComponent]
})
export class AppModule {}
