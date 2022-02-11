import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { DomainsRountingModule } from "./domains-rounting.module";
import { DomainsComponent } from "./domains.component";
import { CreateDomainComponent } from "../create-domain/create-domain.component";
import { RegisterDomainsComponent } from "../register-domains/register-domains.component";
import { DomainDetailsComponent } from "../domain-details/domain-details.component";
import { DialogContentExampleDialog } from "../register-domains/register-domains.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MaterialExampleModule } from "material.module";
import { PagerModule } from '@progress/kendo-angular-pager';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead'
import { DomainDetailsSupComponent } from "../domain-details/domain-details-sup/domain-details-sup.component";
import { DomainDetailsSettingsComponent } from "../domain-details/domain-details-settings/domain-details-settings.component";
import { DomainDetailsHdftComponent } from "../domain-details/domain-details-hdft/domain-details-hdft.component";
import { DomainDetailsPromotionsComponent } from "../domain-details/domain-details-promotions/domain-details-promotions.component";
import { DomainDetailsEmailsComponent } from "../domain-details/domain-details-emails/domain-details-emails.component";
import { DomainDetailsGoogleComponent } from "../domain-details/domain-details-google/domain-details-google.component";

import { NgSelectModule } from '@ng-select/ng-select';
// import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
@NgModule({
  declarations: [
    DomainsComponent,
    CreateDomainComponent,
    RegisterDomainsComponent,
    DialogContentExampleDialog,
    DomainDetailsComponent,
    DomainDetailsSupComponent,
    DomainDetailsSettingsComponent,
    DomainDetailsHdftComponent,
    DomainDetailsPromotionsComponent,
    DomainDetailsEmailsComponent,
    DomainDetailsGoogleComponent
  ],
  imports: [
    CommonModule,
    DomainsRountingModule,
    MatDialogModule,
    MaterialExampleModule,
    PagerModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    NgSelectModule,
    // NgSelectModule,
    FormsModule
  ],
  entryComponents: [
    DialogContentExampleDialog
  ],
  bootstrap: [DomainDetailsComponent]
})
export class DomainsModule {}
