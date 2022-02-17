import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-promotion-domain",
  templateUrl: "./promotion-domain.component.html",
  styleUrls: ["./promotion-domain.component.scss"],
})
export class PromotionDomainComponent implements OnInit {
  isShown: boolean = true;
  isShowAmount: boolean = false;

  domains = [
    { site_name: "Trang Thanh", name: "trangthanh.com" },
    { site_name: "trangthanh21", name: "trangthanh2111.com" },
    { site_name: "linh", name: "linklinklink.com" },
    { site_name: "9uioip", name: "9uioip.com" },
    { site_name: "test domain", name: "testtestmaipham.com" },
    { site_name: "domain_subaccount", name: "subaccount123.com" },
    { site_name: "menahandmade", name: "menahandmade.com" },
    { site_name: "Tradathuoclao", name: "tradathuoclao.com" },
    { site_name: "abc122", name: "abc122burger.com" },
    { site_name: "Animal Shop", name: "animalshopburger.com" },
    { site_name: "Hungdt", name: "furydesign12121.com" },
    { site_name: "abczcsncau", name: "gsagsad3.com" },
    { site_name: "Burgerprints.vn", name: "burgerprints.vn" },
    { site_name: "BurgerPrints", name: "30usd.com" },
    { site_name: "Hung Shirt", name: "hungdt.com" },
  ];

  numberValue = 3;
  numberValue1 = 10;
  numberValue2 = 5;
  numberValue3 = 15;
  numberValue4 = 10;
  numberValue5 = 20;
  numberValue6 = 50;
  numberValue7 = 0;

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  toggleShow() {
    this.isShown = !this.isShown;
  }

  showAmount() {
    this.isShowAmount = !this.isShowAmount;
  }

  showSpinner() {
    this.spinner.show(undefined, { fullScreen: true });
    setTimeout(() => {
      this.spinner.hide();
    }, 500);
  }

  showSuccess() {
    this.toastr.success("Update successful", "Successfully!", {
      timeOut: 2000,
    });
  }

  showSuccessFreeShipping() {
    this.toastr.success("Update Free shipping success", "Successfully!", {
      timeOut: 2000,
    });
  }
  showSuccessPromotion() {
    this.toastr.success("Update promotion success", "Successfully!", {
      timeOut: 2000,
    });
  }

  //Modal CREATE NEW PROMOTION
  isVisibleMiddle = false;
  isConfirmLoading = false;

  showModal(): void {
    this.isVisibleMiddle = true;

  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisibleMiddle = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisibleMiddle = false;
  }

 // Modal delete promotion
 isVisible = false;
  isOkLoading = false;

  showModalDeletePromotion(): void {
    this.isVisible = true;

  }

  handleOkDeletePromotion(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 1000);
  }

  handleCancelDeletePromotion(): void {
    this.isVisible = false;
  }

  ngOnInit() {}
}
