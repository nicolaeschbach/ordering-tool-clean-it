import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) {  }

  public getOrders() {
    return this.httpClient.get("http://localhost:8080/ordering-tool/orders");
    // return [
    //   {"id":1,"orderDate":"2022-02-28","dryWeightKg":4.0,"customer":{"id":1,"name":"Meier","surname":"Robert","orders":[1]}},
    //   {"id":2,"orderDate":"2022-02-28","dryWeightKg":4.0,"customer":{"id":2,"name":"Keller","surname":"Tobias","orders":[2]}}
    // ]
  }
}
