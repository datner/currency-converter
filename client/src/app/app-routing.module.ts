import { HistoryComponent } from "./history/history.component";
import { AuthGuard } from "./auth.guard";
import { LoginComponent } from "./login/login.component";
import { ConvertComponent } from "./convert/convert.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "convert", component: ConvertComponent, canActivate: [AuthGuard] },
  { path: "history", component: HistoryComponent, canActivate: [AuthGuard] },
  {
    path: "",
    redirectTo: "/convert",
    pathMatch: "full"
  },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
