import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-promotion-domain",
  templateUrl: "./promotion-domain.component.html",
  styleUrls: ["./promotion-domain.component.scss"],
})
export class PromotionDomainComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}
}
