import { Conversion } from "./../conversion";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-last-conversion",
  templateUrl: "./last-conversion.component.html",
  styleUrls: ["./last-conversion.component.scss"]
})
export class LastConversionComponent implements OnInit {
  @Input()
  conversion: Conversion;

  constructor() {}

  ngOnInit() {}
}
