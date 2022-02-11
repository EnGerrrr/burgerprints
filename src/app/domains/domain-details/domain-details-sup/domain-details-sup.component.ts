import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-domain-details-sup",
  templateUrl: "./domain-details-sup.component.html",
  styleUrls: ["./domain-details-sup.component.css"],
})
export class DomainDetailsSupComponent implements OnInit {
  selectedDomains ;
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


  selectedIndex = 0;

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

  ngOnInit() {}
  chooseColor(index: number) {
    this.selectedIndex = index;
  }
}
