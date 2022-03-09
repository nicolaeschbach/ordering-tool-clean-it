import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {CreateOrderDialogComponent} from "./create-order-dialog/create-order-dialog.component";
import {Title} from "@angular/platform-browser";
import {CustomerDialogComponent} from "./customer-dialog/customer-dialog.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private dialog: MatDialog, private titleService : Title) {
    this.titleService.setTitle("Clean it! Ordering Tool")
  }

  openOrderDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(CreateOrderDialogComponent, dialogConfig);
  }

  openCustomerDialog() {
    this.dialog.open(CustomerDialogComponent);

  }
}


