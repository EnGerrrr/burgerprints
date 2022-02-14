import { Component, OnInit, ViewChild } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
} from "ng-apexcharts";
import { dataCheckout } from "./data-checkout";
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/models/page-change-event';
import { NgxSpinnerService } from 'ngx-spinner';



export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
};

@Component({
  selector: "app-abandoned-checkout",
  templateUrl: "./abandoned-checkout.component.html",
  styleUrls: ["./abandoned-checkout.component.css"],
})
export class AbandonedCheckoutComponent implements OnInit {
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;



  // Pagination
  public pageSize = 10;
  public skip = 0;
  public pagedDestinations = [];
  public pageSizes = [ 10, 50, 100, 500 ];
  public total = dataCheckout.length;

  public ngOnInit(): void {
    this.pageData();
  }

  public onPageChange(e: PageChangeEvent): void {
    this.skip = e.skip;
    this.pageSize = e.take;
    this.pageData();
  }

  private pageData(): void {
    this.pagedDestinations = dataCheckout.slice(
      this.skip,
      this.skip + this.pageSize
    );
  }



// Customize Columns

  public columns: string[] = [
    "Date",
    "Customer name",
    "Email address",
    "Phone number",
    "Order quantity",
    "Cart",
    "Status",
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

  customizes = [
    { name: "Date" },
    { name: "Views" },
    { name: "ATC" },
    { name: "Initiated Checkouts" },
    { name: "Orders" },
    { name: "ATC rate" },
    { name: "Checkout rate" },
    { name: "Abandoned checkout" },
    { name: "Abandoned rate" },
  ];
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


  selecteddomain = this.domains[1].name;
  selectedTime = this.time[0].name;
  selection: string;
  selectedtime: string;
  selectedCar: string;


  constructor(private spinner: NgxSpinnerService) {


    this.chartOptions = {
      series: [
        {
          name: "",

          data: [37.98, 36.14],
        },
        {
          name: "",

          data: [0, 20.94],
        },
      ],
      chart: {
        height: 500,
        width: 1400,
        type: "bar",
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      responsive: [
        {
          breakpoint: 380,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "90%",
        },
      },
      dataLabels: {
        enabled: false,
      },

      legend: {
        position: "right",
        offsetY: 40,
      },
      fill: {
        opacity: 1,
        colors: ["rgb(239, 145, 27);"],
      },
      // title: {
      //   text: "My First Angular Chart"
      // },
      xaxis: {
        categories: ["8/2021", "9/2021"],
      },
    };
  }

  showSpinner() {
    this.spinner.show(undefined, { fullScreen: true });
    setTimeout(() => {
      this.spinner.hide();
    }, 800);
  }




  key: string = "order_date, name, amount, quantity, email ";
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
}
