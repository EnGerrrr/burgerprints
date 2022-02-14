import { Component, OnInit } from '@angular/core';
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/models/page-change-event';
import { dataEarning } from './data-earning';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-earning-source',
  templateUrl: './earning-source.component.html',
  styleUrls: ['./earning-source.component.css']
})
export class EarningSourceComponent implements OnInit {

  constructor( private spinner: NgxSpinnerService) { }


// Pagination
public pageSize = 10 ;

public skip = 0;
public pagedDestinations = [];
public total = dataEarning.length;
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
  this.pagedDestinations = dataEarning.slice(
    this.skip,
    this.skip + this.pageSize
  );
}


//Columns Customize

public columns: string[] = [
  "Product name",
  "Product category",
  "Quantity",
  "Revenue",
  "Discounts",
  "Returns",
  "Tax",
  "Profit",
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


  key: string = "product_name, product_category, quantity, revenue, discount, returns, tax, profit ";
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }


  showSpinner() {
    this.spinner.show(undefined, { fullScreen: true });
    setTimeout(() => {
      this.spinner.hide();
    }, 800);
  }
}
