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
import { dataProfit } from "./data-profit";
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
  selector: "app-profit",
  templateUrl: "./profit.component.html",
  styleUrls: ["./profit.component.css"],
})
export class ProfitComponent implements OnInit {
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;


// Pagination
  public pageSize = 10;
  public skip = 0;
  public pagedDestinations = [];
  public pageSizes = [10, 50, 100, 500 ];
  public total = dataProfit.length;

  public ngOnInit(): void {
    this.pageData();
  }

  public onPageChange(e: PageChangeEvent): void {
    this.skip = e.skip;
    this.pageSize = e.take;
    this.pageData();
  }

  private pageData(): void {
    this.pagedDestinations = dataProfit.slice(
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
    "Cost",
    "Profit",
    "Average margin",
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


  constructor( private spinner: NgxSpinnerService) {

    this.chartOptions = {
      series: [
        {
          name: "",

          data: [
            28.04, 1364.58, 31.82, 99.41, 27.45, 4.75, 263.53, 78.56, 13.72,
          ],
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

  key: string = "revenue, cost, time_value, profit, campaigns, orders ";
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
