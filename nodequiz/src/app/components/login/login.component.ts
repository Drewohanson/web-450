import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  userLogin: string;
  form: FormGroup;

  constructor(private router: Router, private cookieService: CookieService, private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.form = this.fb.group({
      employeeId: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$")
        ])
      ]
    });
  }

  login() {
    const employeeId = this.form.controls["employeeId"].value;

    this.http.get("/api/employees/" + employeeId).subscribe(res => {
      if (res) {
        //this.cookieService.set('isAuthenticated', 'true', 1);
        this.router.navigate(['/']);
      } else {
        this.errorMessage = "Invalid Employee ID";
      }
    });
  }
}
