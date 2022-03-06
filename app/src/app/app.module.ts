import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { MatCheckboxModule } from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import { OrderTableComponent } from './order-table/order-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    OrderTableComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
