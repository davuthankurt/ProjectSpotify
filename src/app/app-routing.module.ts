import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { TrendsComponent } from "./components/trends/trends.component";


const routes: Routes = [
  { path: "trends", component: TrendsComponent },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/home",
  },
  { path: "home", component: HomeComponent },
  // { path: "home:id", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
