import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-domain-details-sup",
  templateUrl: "./domain-details-sup.component.html",
  styleUrls: ["./domain-details-sup.component.css"],
})
export class DomainDetailsSupComponent implements OnInit {
  selectedDomains ;
  selectedDomains2 ;
  domainsList : any[] = [
    "Abcxyz",
    "Aaaaa",
    "Abcabc",
    "Akdjs",
    "Cdsakdl",
    "Cyusaod",
    "Cqưkals",
    "Dkjkasd",
    "Fdjksj",
    "Gádlsad",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Mississippi",
    "Missouri",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  domainsList2 : any[] =[
    "112233",
    "223344",
    "334455",
    "445566",
    "556677",
    "667788",
    "778899"
  ];
  selectedIndex = 0;
  selectedIndex1: number;
  selectedIndex2: number;
  colorList = [
    {
      color: "#ed5565",
    },
    {
      color: "#fc6e51",
    },
    {
      color: "#ffce54",
    },
    {
      color: "#a0d468",
    },
    {
      color: "#4fc1e9",
    },
    {
      color: "#5d9cec",
    },
    {
      color: "#ac92ec",
    },
    {
      color: "#ec87c0",
    },
    {
      color: "#656d78",
    },
  ];

  constructor() {}

  ngOnInit() {}

  chooseColor(index: number) {
    this.selectedIndex = index;
  }

  select(index: number) {
    this.selectedIndex1= index
  }
  select1(index: number) {
    this.selectedIndex2= index
  }

  deleteItem(index: number) {
    this.selectedDomains.splice(index,1);
    // this.domainsList2.splice(this.domainsList2.indexOf(), 1)
  }
}
