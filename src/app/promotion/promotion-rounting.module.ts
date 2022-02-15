import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routesPromotion: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routesPromotion)],
  exports: [RouterModule],
})
export class PromotionRountingModule { }
