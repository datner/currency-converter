import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const redirectUrl = next["_routerState"]["url"];

    if (localStorage.getItem("login")) {
      return true;
    }

    this.router.navigateByUrl(
      this.router.createUrlTree(["/login"], {
        queryParams: {
          redirectUrl
        }
      })
    );
    return false;
  }
}
