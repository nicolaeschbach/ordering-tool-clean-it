import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {OrderData} from "./orderData";
import {OrderService} from "../services/order.service";
import {OrderTableDataSource, OrderTableItem} from "./order-table-datasource";
import {Subscription} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})

export class OrderTableComponent implements OnInit, OnDestroy {
  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  // @ViewChild(MatTable) table!: MatTable<OrderTableItem>;
  ELEMENT_DATA : OrderData[] = [];
  displayedColumns = ['id', 'date', 'customer', 'dryWeightKg', 'status'];
  dataSource : MatTableDataSource<OrderData> = new MatTableDataSource<OrderData>(this.ELEMENT_DATA);
  // dataSource : OrderTableDataSource = new OrderTableDataSource();
  notifierSubscription: Subscription = this._orderService.subjectNotifier.subscribe(change => {
    this.getAllOrders();
  })

  constructor(private _orderService : OrderService) {
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
