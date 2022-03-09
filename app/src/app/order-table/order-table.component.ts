import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {OrderData} from "./orderData";
import {OrderService} from "../services/order.service";
import {debounceTime, fromEvent, map, Subscription} from "rxjs";


@Component({
  selector: 'order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})

export class OrderTableComponent implements OnInit, OnDestroy {
  @ViewChild('searchInput', {static: true}) searchInput: ElementRef;
  ELEMENT_DATA: OrderData[] = [];
  displayedColumns = ['id', 'date', 'customer', 'dryWeightKg', 'status'];
  dataSource: MatTableDataSource<OrderData> = new MatTableDataSource<OrderData>(this.ELEMENT_DATA);
  notifierSubscription: Subscription = this.orderService.subjectNotifier.subscribe(change => {
    this.getAllOrders();
  })

  constructor(private orderService: OrderService) {
    this.searchInput = new ElementRef(HTMLInputElement);
  }

  ngOnInit(): void {
    this.getAllOrders();
    fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , debounceTime(500)
    ).subscribe( filterString => {
      this.applyFilter(filterString)
    });
  }

  public getAllOrders() {
    const resp = this.orderService.getOrders();
    resp.subscribe(orders => {
      this.dataSource.data = orders as OrderData[]
    });
  }

  ngOnDestroy(): void {
    this.notifierSubscription.unsubscribe();
  }

  public applyFilter = (filterString: string) => {
      this.dataSource.filter = filterString.trim().toLowerCase();
  }
}
