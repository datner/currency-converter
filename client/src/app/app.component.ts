import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  loggedIn: Boolean = !!localStorage.getItem("login");
  constructor() {
    // Very lazy authentication of login
    setInterval(() => {
      this.loggedIn = !!localStorage.getItem("login");
    }, 500);
  }
}
