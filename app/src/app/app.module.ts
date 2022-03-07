import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTableModule } from "@angular/material/table";
import { OrderTableComponent } from './order-table/order-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from "@angular/common/http";
import { OrderService } from "./order.service";

@NgModule({
  declarations: [
    AppComponent,
    OrderTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
