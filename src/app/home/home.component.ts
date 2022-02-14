import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "@/_services";
import { Router } from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  name: "";
  constructor(private Authentication:AuthenticationService,private router:Router,
    private spinner: NgxSpinnerService) {}

    showSpinner() {
      this.spinner.show(undefined, { fullScreen: true });
      setTimeout(() => {
        this.spinner.hide();
      }, 800);
    }

  ngOnInit() {}


  logout() {
    localStorage.removeItem('currentUser');
    this.Authentication.currentUserSubject.next(null);
    this.router.navigate(['/login'])
  }
}
