import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Router } from "@angular/router";

@Component({
  selector: "app-base-layout",
  templateUrl: "./base-layout.component.html",
  styleUrls: ["./base-layout.component.css"]
})
export class BaseLayoutComponent implements OnInit {
  constructor(private cookie: CookieService, private router: Router) {}

  ngOnInit() {}

  logOut() {
    this.cookie.get("isAuthenticated");
    this.cookie.delete("isAuthenticated");
    this.router.navigate(["/session/login"]);
  }

  navHome() {
    this.router.navigate(["/home"]);
  }
}
