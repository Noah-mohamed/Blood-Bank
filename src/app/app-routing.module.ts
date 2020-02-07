import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { DonersComponent } from "./doners/doners.component";
import { RequisitionsComponent } from "./requisitions/requisitions.component";
import { AvailBloodComponent } from "./avail-blood/avail-blood.component";
import { AdminCampsComponent } from "./admin-camps/admin-camps.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AdminPageComponent } from "./admin-page/admin-page.component";
import { AdminInputDataComponent } from "./admin-input-data/admin-input-data.component";
import { LoginComponent } from "./login/login.component";
import { AvailBloodEditComponent } from "./avail-blood-edit/avail-blood-edit.component";
import { UserCampsComponent } from "./user-camps/user-camps.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "bankData/doners", component: DonersComponent },
  { path: "bankData/requisitions", component: RequisitionsComponent },
  { path: "bankData/bank", component: AvailBloodComponent },
  { path: "Camps", component: UserCampsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
