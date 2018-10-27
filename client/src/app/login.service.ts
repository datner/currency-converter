import { Observable, from } from "rxjs";
import { Injectable } from "@angular/core";
import { User } from "./user";

const auths = [
  { username: "user1", password: "pass1", fullName: "John Doe" },
  { username: "user2", password: "pass2", fullName: "Adam Smith" },
  { username: "user3", password: "pass3", fullName: "Yuval Datner" },
  { username: "user4", password: "pass4", fullName: "Yuval Datner" }
];

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor() {}

  // Mock http, ready to transfer to an actual remote post
  private http = {
    post: (bogusUrl: string, login: Login): Observable<User> =>
      from(
        new Promise((resolve, reject) => {
          const user = auths.filter(
            auth =>
              login.username === auth.username &&
              login.password === auth.password
          );
          if (user[0]) {
            localStorage.setItem("login", "true");
            resolve(user[0]);
          } else {
            reject(
              new Error("User not found. Did you forget your password? ;)")
            );
          }
        })
      )
  };

  login(username: string, password: string): Observable<User> {
    return this.http.post("https://payconiq.com/api/login", {
      username: username,
      password: password
    });
  }
}

interface Login {
  username: string;
  password: string;
}
