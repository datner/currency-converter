import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ConvertComponent } from "./convert/convert.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavComponent } from "./nav/nav.component";
import { LastConversionComponent } from "./last-conversion/last-conversion.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    ConvertComponent,
    NavComponent,
    LastConversionComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
