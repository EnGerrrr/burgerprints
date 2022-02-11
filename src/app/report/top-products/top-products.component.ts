import { Component, OnInit } from '@angular/core';
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/models/page-change-event';
import { dataProducts } from './data-products';


@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.css']
})
export class TopProductsComponent implements OnInit {


  constructor() { }


// Pagination
public pageSize = 10 ;

public skip = 0;
public pagedDestinations = [];
public total = dataProducts.length;
public pageSizes = [ 10, 50, 100, 500 ];
public ngOnInit(): void {
  this.pageData();
}

public onPageChange(e: PageChangeEvent): void {
  this.skip = e.skip;
  this.pageSize = e.take;
  this.pageData();
}

private pageData(): void {
  this.pagedDestinations = dataProducts.slice(
    this.skip,
    this.skip + this.pageSize
  );
}


//Columns Customize

public columns: string[] = [
  "Date",
  "Traffic referrer name",
  "Views",
  "ATC",
  "AVV",
  "Checkout",
  "Orders",
  "Items",
];

public hiddenColumns: string[] = [];

public isHidden(columnName: string): boolean {
  return this.hiddenColumns.indexOf(columnName) > -1;
}

public isDisabled(columnName: string): boolean {
  return (
    this.columns.length - this.hiddenColumns.length === 0 &&
    !this.isHidden(columnName)
  );
}

public hideColumn(columnName: string): void {
  const hiddenColumns = this.hiddenColumns;

  if (!this.isHidden(columnName)) {
    hiddenColumns.push(columnName);
  } else {
    hiddenColumns.splice(hiddenColumns.indexOf(columnName), 1);
  }
}


  selected = [];

  domains = [
    { id: 1, name: "All Domains" },
    { id: 2, name: "30usd.com" },
  ];
  time = [
    { id: 1, name: "All time" },
    { id: 2, name: "Today" },
    { id: 3, name: "Last day" },
    { id: 4, name: "Last 7 days" },
    { id: 5, name: "This month" },
    { id: 6, name: "Last month" },
    { id: 7, name: "Last 30 days" },
    { id: 8, name: "Last 3 months" },
    { id: 9, name: "Customize Date" },
  ];




  selecteddomain = this.domains[0].name;
  selectedTime = this.time[0].name;
  selection: string;
  selectedtime: string;
  selectedCar: string;


  key: string = "time_value, atc, orders, source, total_sales, checkout, items, views ";
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

}
