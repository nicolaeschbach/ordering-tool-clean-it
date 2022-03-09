import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../services/customer.service";
import {CreateOrderData} from "../createOrderData";
import {HttpClient} from "@angular/common/http";
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-create-order-dialog',
  templateUrl: './create-order-dialog.component.html',
  styleUrls: ['./create-order-dialog.component.css']
})
export class CreateOrderDialogComponent implements OnInit {

  customers: any = [];

  model = new CreateOrderData( 0,0);

  constructor(private customerService : CustomerService, private orderService : OrderService, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.getCustomerData();
  }

  submitForm() {
    console.log("Submit")
    this.http
      .post('http://localhost:8080/ordering-tool/orders', this.model)
      .subscribe({
        next: (response) => {
          console.log(response)
          this.orderService.notifyAboutChange();
        },
        error: (error) => console.log(error),
      });
  }

  getCustomerData(): void {
    const resp = this.customerService.getCustomers();
    resp.subscribe(customerData => {
      console.log(customerData)
      this.customers = customerData;
    });
  }
}
