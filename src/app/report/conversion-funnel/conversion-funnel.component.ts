import { Component, OnInit, ViewChild } from "@angular/core";
import { PageChangeEvent } from '@progress/kendo-angular-dropdowns/dist/es2015/common/models/page-change-event';
import { DATA } from "./customers";
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
  selector: "app-conversion-funnel",
  templateUrl: "./conversion-funnel.component.html",
  styleUrls: ["./conversion-funnel.component.css"],
})
export class ConversionFunnelComponent implements OnInit {
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;




// Pagination
  public pageSize = 10 ;

  public skip = 0;
  public pagedDestinations = [];
  public total = DATA.length;
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
    this.pagedDestinations = DATA.slice(
      this.skip,
      this.skip + this.pageSize
    );
  }


//Columns Customize

  public columns: string[] = [
    "Date",
    "Views",
    "ATC",
    "Initiated Checkouts",
    "Orders",
    "ATC rate",
    "Checkout rate",
    "Abandoned checkout",
    "Abandoned rate",
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




  selecteddomain = this.domains[0].name;
  selectedTime = this.time[0].name;
  selection: string;
  selectedtime: string;
  selectedCar: string;


  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Add to car",

          data: [
            12, 69, 71, 78, 78, 17, 10, 20, 68, 64, 32, 13, 15, 11, 3, 32, 0, 1,
            0, 0, 0, 1, 1, 0, 1, 0, 4, 0, 1, 7, 3, 2, 4, 10, 9, 1, 2,
          ],
        },
        {
          name: "Orders",
          data: [
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
            0, 0, 0, 4, 0, 1, 7, 2, 1, 0, 10, 4, 0, 1,
          ],
        },

        {
          name: "Total-views",
          data: [
            144, 41, 12, 580, 291, 105, 236, 240, 24, 13, 118, 84, 31, 57, 88,
            83, 15, 69, 13, 39, 5, 14, 24, 5, 17, 12, 8, 12, 0, 0, 1, 8, 21, 20,
            115, 26, 18,
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
          columnWidth: "70%",
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
      },
      xaxis: {
        categories: [
          "9/2018",
          "10/2018",
          "11/2018",
          "12/2018",
          "1/2019",
          "2/2019",
          "3/2019",
          "4/2019",
          "5/2019",
          "6/2019",
          "7/2019",
          "8/2019",
          "9/2019",
          "10/2019",
          "11/2019",
          "12/2019",
          "1/2020",
          "2/2020",
          "3/2020",
          "4/2020",
          "5/2020",
          "6/2020",
          "7/2020",
          "8/2020",
          "9/2020",
          "10/2020",
          "11/2020",
          "12/2020",
          "1/2021",
          "2/2021",
          "3/2021",
          "4/2021",
          "5/2021",
          "6/2021",
          "7/2021",
          "8/2021",
          "9/2021",
          "10/2021",
          "11/2021",
          "12/2021",
        ],
      },
    };
  }



  key: string = "views, time_value, paid ";
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
}
