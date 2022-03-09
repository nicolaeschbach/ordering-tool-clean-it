import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) {
  }

  subjectNotifier: Subject<null> = new Subject<null>();

  notifyAboutChange() {
    this.subjectNotifier.next(null);
  }

  public getOrders() {
    return this.httpClient.get("http://localhost:8080/ordering-tool/orders");
  }
}
