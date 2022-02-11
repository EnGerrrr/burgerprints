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
import { dataSale } from "./data-sale-report";
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/models/page-change-event';






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
  selector: "app-sale-report",
  templateUrl: "./sale-report.component.html",
  styleUrls: ["./sale-report.component.css"],
})
export class SaleReportComponent implements OnInit {
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;


// Pagination
  public pageSize = 10;
  public skip = 0;
  public pagedDestinations = [];
  public pageSizes = [10, 50, 100, 500 ];
  public total = dataSale.length;

  public ngOnInit(): void {
    this.pageData();
  }

  public onPageChange(e: PageChangeEvent): void {
    this.skip = e.skip;
    this.pageSize = e.take;
    this.pageData();
  }

  private pageData(): void {
    this.pagedDestinations = dataSale.slice(
      this.skip,
      this.skip + this.pageSize
    );
  }


// Customize Columns
  public columns: string[] = [
    "Date",
    "Orders",
    "Revenue",
    "AOV",
    "Discounts",
    "Returns",
    "Canceled",
    "Tax",
    "Shipping",
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


  constructor() {

    this.chartOptions = {
      series: [
        {
          name: "",

          data: [1, 4, 1, 7, 2, 1, 10, 4, 1],
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
          columnWidth: "80%",
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
        categories: [
          "7/2020",
          "11/2020",
          "1/2021",
          "5/2021",
          "6/2021",
          "7/2021",
          "9/2021",
          "10/2021",
          "12/2021",
        ],
      },
    };
  }


  key: string = "revenue, time_order, shipping, profit, total_orders, tax, canceled, returns  ";
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }


}
