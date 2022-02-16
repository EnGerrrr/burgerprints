import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionRountingModule } from './promotion-rounting.module';
import { PromotionComponent } from './promotion.component';
import { PromotionDomainComponent } from './promotion-domain/promotion-domain.component';
import { PromotionStoreComponent } from './promotion-store/promotion-store.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialExampleModule } from "material.module";

@NgModule({
  declarations: [
    PromotionComponent,
    PromotionDomainComponent,
    PromotionStoreComponent
  ],
  imports: [
    CommonModule,
    PromotionRountingModule,
    NgSelectModule,
    MaterialExampleModule
  ]
})
export class PromotionModule { }
