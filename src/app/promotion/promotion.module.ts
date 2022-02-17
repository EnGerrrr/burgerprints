import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromotionRountingModule } from './promotion-rounting.module';
import { PromotionComponent } from './promotion.component';
import { PromotionDomainComponent } from './promotion-domain/promotion-domain.component';
import { PromotionStoreComponent } from './promotion-store/promotion-store.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialExampleModule } from "material.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';

import { NgZorroAntdModule, NZ_ICONS } from 'ng-zorro-antd';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_I18N, en_US } from 'ng-zorro-antd';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

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
    MaterialExampleModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
  ],
  providers   : [ { provide: NZ_I18N, useValue: en_US },  { provide: NZ_ICONS, useValue: icons } ]
})
export class PromotionModule { }
