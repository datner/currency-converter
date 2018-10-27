import { Router } from "@angular/router";
import { HistoryService } from "./../history.service";
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

  constructor(
    private router: Router,
    private CurrencyService: CurrencyService,
    private HistoryService: HistoryService
  ) {}

  onSwap(): void {
    [this.from, this.to] = [this.to, this.from];
  }

  onConvert(): void {
    const fromRate = this.rates[this.from];
    const toRate = this.rates[this.to];

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
      this.HistoryService.addConversion(this.lastConversion);
    }
  }

  getRates(): void {
    this.CurrencyService.getRates().subscribe(rates =>
      rates.forEach(rate => (this.rates[rate.currency] = rate))
    );
  }

  ngOnInit() {
    this.getRates();
    const { index } = this.router.routerState.snapshot.root.queryParams;
    if (index) {
      const c = JSON.parse(localStorage.getItem("history"))[index];
      [this.amount, this.from, this.to, this.lastConversion] = [
        c.amount,
        c.from.currency,
        c.to.currency,
        new Conversion(c)
      ];
    }
  }
}
