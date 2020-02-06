import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { BankDataComponent } from "./bank-data/bank-data.component";
import { DonersComponent } from "./doners/doners.component";
import { AdminCampsComponent } from "./admin-camps/admin-camps.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { AdminInputDataComponent } from "./admin-input-data/admin-input-data.component";
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BankDataComponent,
    DonersComponent,
    AdminCampsComponent,
    AdminLoginComponent,
    AdminPageComponent,
    AdminInputDataComponent,
    LoginComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
