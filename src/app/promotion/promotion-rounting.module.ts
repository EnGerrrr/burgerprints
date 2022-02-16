import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotionDomainComponent } from './promotion-domain/promotion-domain.component';
import { PromotionStoreComponent } from './promotion-store/promotion-store.component';

const routesPromotion: Routes = [
  { path:"domain", component: PromotionDomainComponent},
  { path:"store", component: PromotionStoreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routesPromotion)],
  exports: [RouterModule],
})
export class PromotionRountingModule { }
