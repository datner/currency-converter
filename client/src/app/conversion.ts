import { Currency } from "./currency";
export class Conversion {
  from: Currency;
  to: Currency;
  amount: number;
  constructor(data) {
    this.from = data.from;
    this.to = data.to;
    this.amount = data.amount;
  }
  get sum(): string {
    return ((this.amount * this.from.rate) / this.to.rate).toPrecision(6);
  }

  get toRate(): string {
    return (this.from.rate / this.to.rate).toPrecision(6);
  }
  get fromRate(): string {
    return (this.to.rate / this.from.rate).toPrecision(6);
  }
}
