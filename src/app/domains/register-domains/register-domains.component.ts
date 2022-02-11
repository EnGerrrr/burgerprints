import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";


@Component({
  selector: "app-register-domains",
  templateUrl: "./register-domains.component.html",
  styleUrls: ["./register-domains.component.css"],
})
export class RegisterDomainsComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogContentExampleDialog,{
      width: '80vw',
    });
  }

  ngOnInit() {}
}

@Component({
  selector: "dialog-content-example-dialog",
  templateUrl: "dialog-content-example-dialog.html",
  styleUrls: ["dialog-content-example-dialog.css"]
})
export class DialogContentExampleDialog {}
