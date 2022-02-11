import { Component, OnInit } from "@angular/core";
import { PageChangeEvent } from "@progress/kendo-angular-pager";
import { data } from "./dataDomains";

@Component({
  selector: "app-domains",
  templateUrl: "./domains.component.html",
  styleUrls: ["./domains.component.css"],
})
export class DomainsComponent implements OnInit {
  valueChange = true;

  // Pagination
  public pageSize = 10;

  public skip = 0;
  public pagedDestinations = [];
  public total = data.length;
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
    this.pagedDestinations = data.slice(this.skip, this.skip + this.pageSize);
  }

  onValueChange(value: boolean) {
    this.valueChange = value;
  }

  constructor() {}
}
