import { Conversion } from "./../conversion";
import { CurrencyService } from "./../currency.service";
import { Component, OnInit } from "@angular/core";
import { Currency } from "../currency";

@Component({
  selector: "app-convert",
  templateUrl: "./convert.component.html",
  styleUrls: ["./convert.component.scss"]
})
export class ConvertComponent implements OnInit {
  amount: Number;
  from: string = "";
  to: string = "";
  rates: Object = {};
  badInput: string;
  lastConversion: Conversion;
  converted: Boolean;

  constructor(private CurrencyService: CurrencyService) {}

  onSwap(): void {
    [this.from, this.to] = [this.to, this.from];
  }

  onConvert(): void {
    const fromRate = this.rates[this.from];
    const toRate = this.rates[this.to];
    console.log(`convert ${this.from} to ${this.to}`);
    console.log(fromRate, toRate);

    // the laziest error handling ever
    if (!fromRate && !toRate) {
      this.badInput = "both";
    } else if (!fromRate) {
      this.badInput = "from";
    } else if (!toRate) {
      this.badInput = "to";
    } else {
      this.badInput = "";
      this.lastConversion = new Conversion({
        from: fromRate,
        to: toRate,
        amount: this.amount
      });
      this.converted = true;
    }
  }

  getRates(): void {
    this.CurrencyService.getRates().subscribe(rates =>
      rates.forEach(rate => (this.rates[rate.currency] = rate))
    );
  }

  ngOnInit() {
    this.getRates();
  }
}
