import { Conversion } from "./../conversion";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HistoryService } from "../history.service";

@Component({
  selector: "app-history",
  templateUrl: "./history.component.html",
  styleUrls: ["./history.component.scss"]
})
export class HistoryComponent implements OnInit {
  histories: Conversion[];
  constructor(private router: Router, private historyService: HistoryService) {}

  onView(index: number): void {
    this.router.navigateByUrl(
      this.router.createUrlTree(["/convert"], {
        queryParams: {
          index
        }
      })
    );
  }

  onDelete(index: number): void {
    this.histories = this.historyService.deleteFromHistory(index);
  }

  ngOnInit() {
    this.histories = this.historyService.getHistory();
  }
}
