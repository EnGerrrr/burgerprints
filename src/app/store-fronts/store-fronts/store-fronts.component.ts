import { Component, OnInit } from "@angular/core";
import { PageChangeEvent } from "@progress/kendo-angular-pager";
import { dataStore } from "./dataStore";

@Component({
  selector: "app-store-fronts",
  templateUrl: "./store-fronts.component.html",
  styleUrls: ["./store-fronts.component.css"],
})
export class StoreFrontsComponent implements OnInit {
  valueChange = true;

  // Pagination
  public pageSize = 10;

  public skip = 0;
  public pagedDestinations = [];
  public total = dataStore.length;
  public pageSizes = [10, 50, 100, 500];
  public ngOnInit(): void {
    this.pageData();
  }

  public onPageChange(e: PageChangeEvent): void {
    this.skip = e.skip;
    this.pageSize = e.take;
    this.pageData();
  }

  private pageData(): void {
    this.pagedDestinations = dataStore.slice(
      this.skip,
      this.skip + this.pageSize
    );
  }

  onValueChange(value: boolean) {
    this.valueChange = value;
  }

  constructor() {}

  domains = [
    { id: 1, name: "All Domains" },
    { id: 2, name: "trangthanh.com" },
    { id: 3, name: "trabg.com" },
    { id: 4, name: "trangthanh2111.com" },
    { id: 5, name: "burgerprints.vn" },
    { id: 6, name: "30usd.com" },
  ];
  status = [
    { id: 1, name: "Status" },
    { id: 2, name: "Active" },
    { id: 3, name: "Inactive" },
  ];

  selecteddomain = this.domains[0].name;
  selectedstatus = this.status[0].name;
}
