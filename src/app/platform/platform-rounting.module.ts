import { CreateInfoComponent } from './../create-info/create-info.component';
import { CreateComponent } from './../create/create.component';
import { DesignComponent } from './../design/design.component';
import { CampaignComponent } from './../campaign/campaign.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './platform.component';
import { DashBoardComponent } from '@/dash-board/dash-board.component';
import { AuthGuard } from '@/_helpers';
import { OrderComponent } from '@/order/order.component';
import { AbandonedOrderComponent } from '@/order/abandoned-order/abandoned-order.component';
import { ConversionFunnelComponent } from '@/report/conversion-funnel/conversion-funnel.component';
import { SaleReportComponent } from '@/report/sale-report/sale-report.component';
import { ProfitComponent } from '@/report/profit/profit.component';
import { AbandonedCheckoutComponent } from '@/report/abandoned-checkout/abandoned-checkout.component';
import { EarningSourceComponent } from '@/report/earning-source/earning-source.component';
import { TopProductsComponent } from '@/report/top-products/top-products.component';
import { SaleInDayComponent } from '@/report/sale-in-day/sale-in-day.component';
import { TopCampaignComponent } from '@/report/top-campaign/top-campaign.component';
import { StoreFrontsComponent } from '@/store-fronts/store-fronts/store-fronts.component';
import { FrontEditComponent } from '@/store-fronts/front-edit/front-edit.component';
import { CreatStoreComponent } from "@/store-fronts/creat-store/creat-store.component";

const routes: Routes = [
    {
    path:'',
     component:PlatformComponent,
      // canActivate: [AuthGuard],
    children:[
        {path:'dashboard',component:DashBoardComponent},
        {path:'campaign',component:CampaignComponent},
        {path:'campaign/design',component:DesignComponent},
        {path:'campaign/create',component:CreateComponent},
        {path:'campaign/create-info',component:CreateInfoComponent},
        {path:'orders/all-order', component:OrderComponent},
        {path:'orders/abandoned-order', component:AbandonedOrderComponent},
        {path:'report/conversion-funnel', component:ConversionFunnelComponent},
        {path:'report/sale-report', component:SaleReportComponent},
        {path:'report/profit', component: ProfitComponent},
        {path:'report/abandoned-checkout', component: AbandonedCheckoutComponent},
        {path:'report/earning-source', component: EarningSourceComponent},
        {path:'report/top-products', component: TopProductsComponent},
        {path:'report/sale-in-day', component: SaleInDayComponent},
        {path:'report/top-campaign', component: TopCampaignComponent},
        {path:'storefronts', component: StoreFrontsComponent},
        {path:'storefronts/edit', component: FrontEditComponent},
        {path:'storefronts/create', component: CreatStoreComponent},
        {
          path:"domains",
          loadChildren: () =>
            import("../domains/domains/domains.module").then((m) => m.DomainsModule),
        },
        {
          path:"promotion",
          loadChildren: () =>
            import("../promotion/promotion.module").then((m) => m.PromotionModule),
        }
    ],
  },



]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class PlatformRoutingModule {}
