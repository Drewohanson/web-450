
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthGuardService } from "./shared/auth-guard/auth-guard.service";

@Component({
  selector: "app-root",
  template: "<router-outlet></router-outlet>"
})
export class AppComponent {
  title = "Node Quiz";

  constructor(

    private router: Router,
    private authGuard: AuthGuardService
  ) {

  }
}
