export interface PaymentOption {
  type: PaymentOptionType;
  number: number;
  valid: number;
  securityCode: number;
  cardName: string;
}

export type PaymentOptionType = 'credit card' | 'debit card' | 'cash';
