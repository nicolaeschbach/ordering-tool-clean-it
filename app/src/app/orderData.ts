import {CustomerData} from "./customerData";

export interface OrderData {
  id: number;
  data: string;
  dryWeightKg: number;
  customer: CustomerData;
}
