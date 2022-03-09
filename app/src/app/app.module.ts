import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from './app.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import {OrderTableComponent} from './order-table/order-table.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {HttpClientModule} from "@angular/common/http";
import {OrderService} from "./services/order.service";
import {MatButtonModule} from "@angular/material/button";
import { CreateOrderDialogComponent } from './create-order-dialog/create-order-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatGridListModule} from "@angular/material/grid-list";
import { CustomerDialogComponent } from './customer-dialog/customer-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderTableComponent,
    CreateOrderDialogComponent,
    CustomerDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
