import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreateDomainComponent } from "../create-domain/create-domain.component";
import { DomainDetailsComponent } from "../domain-details/domain-details.component";
import { RegisterDomainsComponent } from "../register-domains/register-domains.component";
import { DomainsComponent } from "./domains.component";

const routesDomain: Routes = [
  { path: "", component: DomainsComponent },
  { path: "creat", component: CreateDomainComponent },
  { path: "register", component: RegisterDomainsComponent},
  { path: "details", component: DomainDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routesDomain)],
  exports: [RouterModule],
})
export class DomainsRountingModule {}
