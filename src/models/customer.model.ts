import { Address } from "./address.model";
import { PaymentOptionType } from "./payment-option.model";

export interface Customer {
  customerId: string;
  name: string;
  age: number;
  cellphone: string;
  address: Address;
  paymentOptions: PaymentOptionType[];
}