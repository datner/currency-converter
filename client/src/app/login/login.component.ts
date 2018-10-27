import { LoginService } from "./../login.service";
import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  transition,
  style,
  animate,
  keyframes
} from "@angular/animations";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  animations: [
    trigger("badLoginAnimation", [
      state("invalid", style({})),
      state("unchecked", style({})),
      state(
        "success",
        style({ transform: "translate(-50%, 80vh) rotate(-40deg)" })
      ),
      transition(
        "unchecked => success",
        animate("500ms cubic-bezier(.42,-0.67,.58,1.64)")
      ),
      transition(
        "unchecked => invalid",
        animate(
          250,
          keyframes([
            style({ transform: "translate(-60%, -50%)" }),
            style({ transform: "translate(-40%, -50%)" }),
            style({ transform: "translate(-60%, -50%)" }),
            style({ transform: "translate(-40%, -50%)" })
          ])
        )
      )
    ])
  ]
})
export class LoginComponent implements OnInit {
  user = "";
  password = "";
  badLoginAnimation = "unchecked";

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private LoginService: LoginService, private Router: Router) {}

  onLogin() {
    this.LoginService.login(this.user, this.password).subscribe(
      user => {
        this.badLoginAnimation = "success";
        setTimeout(() => {
          this.Router.navigateByUrl("/convert");
        }, 600);
      },
      error => {
        this.badLoginAnimation = "invalid";
      }
    );
  }

  resetState() {
    this.badLoginAnimation = "unchecked";
  }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    localStorage.getItem("login") && this.Router.navigateByUrl("/convert");
  }
}
