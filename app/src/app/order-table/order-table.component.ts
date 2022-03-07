import {Component, OnInit} from '@angular/core';
import { OrderTableDataSource, OrderTableItem } from './order-table-datasource';
import {MatTableDataSource} from "@angular/material/table";
import {OrderData} from "../orderData";
import {OrderService} from "../order.service";

@Component({
  selector: 'order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  ELEMENT_DATA : OrderData[] = [];
  displayedColumns = ['id', 'date', 'customer', 'dryWeightKg', 'status'];
  dataSource : MatTableDataSource<OrderData> = new MatTableDataSource<OrderData>(this.ELEMENT_DATA);

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
}
