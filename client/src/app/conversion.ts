import { Currency } from "./currency";
export class Conversion {
  from: Currency;
  to: Currency;
  amount: number;
  timestamp: Date;
  date: string;
  time: string;

  constructor(data) {
    this.from = data.from;
    this.to = data.to;
    this.amount = data.amount;
    this.timestamp = new Date();
    this.date = `${this.timestamp.getDate()}/${this.timestamp.getMonth() + 1}/${this.timestamp.getFullYear()}`;
    this.time = `${this.timestamp.getHours()}:${this.timestamp.getMinutes()}`;
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
