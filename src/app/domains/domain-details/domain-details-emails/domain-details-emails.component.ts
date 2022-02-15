import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-domain-details-emails',
  templateUrl: './domain-details-emails.component.html',
  styleUrls: ['./domain-details-emails.component.css']
})
export class DomainDetailsEmailsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogContentExampleDialog1,{
      width: '80vw',
    });
  }

  ngOnInit() {
  }

}
@Component({
  selector: "dialog-content-example-dialog",
  templateUrl: "./dialog-content-example-dialog.html",
  styleUrls: ["./dialog-content-example-dialog.css"]
})
export class DialogContentExampleDialog1 {}
