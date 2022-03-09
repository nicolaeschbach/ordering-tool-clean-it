import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import {OrderData} from "./orderData";

export interface OrderTableItem {
  id: number;
  date: Date;
  customer: string;
  dryWeightKg: number;
  status: string;
}

const EXAMPLE_DATA: OrderTableItem[] = [
  {id: 17, date: new Date(2022, 2,6), customer: 'H. Schmutz', dryWeightKg: 12, status: 'Received'},
  {id: 14, date: new Date(2022, 2,3), customer: 'P. Sauber', dryWeightKg: 5.2, status: 'Cleaned'},
  {id: 12, date: new Date(2022, 1,25), customer: 'T. Bosch', dryWeightKg: 4, status: 'Returned'},
  {id: 4, date: new Date(2021, 5,17), customer: 'L. White', dryWeightKg: 6.3, status: 'Returned'},


];

/**
 * Data source for the OrderTable view.
 */
export class OrderTableDataSource extends DataSource<OrderTableItem> {
  data: OrderTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * @returns A stream of the Orders to be rendered.
   */
  connect(): Observable<OrderTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: OrderTableItem[]): OrderTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: OrderTableItem[]): OrderTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'customer': return compare(a.customer, b.customer, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        case 'date': return compareDate(a.date, b.date);
        case 'dryWeightKg': return compare(a.dryWeightKg, b.dryWeightKg, isAsc);

        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name/status columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

/** Simple sort comparator for date */
function compareDate(a: Date, b: Date): number {
  return a.getTime() - b.getTime();
}
