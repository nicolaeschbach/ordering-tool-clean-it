import {CustomerData} from "../customerData";

export interface OrderData {
  id: number;
  date: string;
  dryWeightKg: number;
  customer: CustomerData;
  status: string;
}
