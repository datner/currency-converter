import { Router, NavigationEnd } from "@angular/router";
import { Component, OnInit, Input } from "@angular/core";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  @Input()
  loggedIn: Boolean;
  current: string;
  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.current = event.url;
      });
  }

  onClick(url: string): void {
    this.current = url;
  }
}
