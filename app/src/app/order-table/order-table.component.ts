import {Component, OnDestroy, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {OrderData} from "./orderData";
import {OrderService} from "../services/order.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})

export class OrderTableComponent implements OnInit, OnDestroy {
  ELEMENT_DATA: OrderData[] = [];
  displayedColumns = ['id', 'date', 'customer', 'dryWeightKg', 'status'];
  dataSource: MatTableDataSource<OrderData> = new MatTableDataSource<OrderData>(this.ELEMENT_DATA);
  notifierSubscription: Subscription = this._orderService.subjectNotifier.subscribe(change => {
    this.getAllOrders();
  })

  constructor(private _orderService: OrderService) {
  }

  ngOnInit(): void {
    this.getAllOrders();
  }

  public getAllOrders() {
    const resp = this._orderService.getOrders();
    resp.subscribe(orders => {
      console.log(orders)
      this.dataSource.data = orders as OrderData[]
    });
  }

  ngOnDestroy(): void {
    this.notifierSubscription.unsubscribe();
  }
}
