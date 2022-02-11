import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-domain",
  templateUrl: "./create-domain.component.html",
  styleUrls: ["./create-domain.component.css"],
})
export class CreateDomainComponent implements OnInit {
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

  ngOnInit() {}

  chooseColor(index: number) {
    this.selectedIndex = index;
  }
}
