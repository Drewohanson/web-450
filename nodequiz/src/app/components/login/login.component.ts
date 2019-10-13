/*
=====================================
  ; Title: login.component.ts
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description: nodequiz
======================================
*/


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};

  constructor(private auth: AuthService, private router: Router, private http: HttpClient) { }

  loginUser() {
    this.auth.login(this.loginUserData).subscribe(
      res => {
        console.log(res)
        localStorage.setItem('token', res.token),
        localStorage.setItem('user', res.payload.subject)
        this.router.navigate(['/dashboard']);
      },
      err => console.log(err)
    )
  }

  ngOnInit() {
  }

}
