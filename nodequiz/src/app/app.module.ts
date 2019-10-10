/*
=====================================
  ; Title: app.module.ts
  ; Author: Drew Hanson
  ; Date: October 8 2019
  ; Description: app.module.ts
======================================
*/


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import { AppRoutes } from './app.routing';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './shared';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { SummaryComponent } from './components/summary/summary.component';
import { QuizSelectionComponent} from './components/quiz-selection/quiz-selection.component';
import { LoginComponent } from './components/login/login.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './shared/guards/auth-guard';
import { CookieService } from 'ngx-cookie-service';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout'
import { CarouselModule } from 'primeng/carousel';



@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    SummaryComponent,
    QuizSelectionComponent,
    LoginComponent,
    NotFoundComponent,
    AuthLayoutComponent,
    PresentationComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false }),
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CookieService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
