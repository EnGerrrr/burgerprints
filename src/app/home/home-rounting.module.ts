import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        redirectTo: '/platform/dashboard', pathMatch: 'full'
       },
      {
        path: "platform",
        loadChildren: () =>
          import("../platform/platform.module").then((m) => m.PlatformModule),
      },
      {
        path: "edituser",
        loadChildren: () =>
          import("app/pages/pages.module").then((m) => m.PagesModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
