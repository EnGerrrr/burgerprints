import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionRountingModule } from './promotion-rounting.module';
import { PromotionComponent } from './promotion.component';



@NgModule({
  declarations: [
    PromotionComponent
  ],
  imports: [
    CommonModule,
    PromotionRountingModule
  ]
})
export class PromotionModule { }
