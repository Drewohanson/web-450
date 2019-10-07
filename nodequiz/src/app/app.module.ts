import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from "@angular/router";
import { AppRoutes } from "./app.routing";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from "./app.component";
import { BaseLayoutComponent } from "./shared";
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { SummaryComponent } from './components/summary/summary.component';
import { LoginComponent } from "./components/login/login.component";
import { PresentationComponent } from './components/presentation/presentation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './shared/guards/auth-guard';
import { MatDialogModule } from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout'
import { CarouselModule } from 'primeng/carousel';
import { QuizSelectionComponent } from "./components/quiz-selection/quiz-selection.component";

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    SummaryComponent,
    LoginComponent,
    NotFoundComponent,
    AuthLayoutComponent,
    PresentationComponent,
    QuizComponent,
    QuizSelectionComponent
  ],
 imports: [
  BrowserModule,
  BrowserModule,
  BrowserAnimationsModule,
  MatButtonModule,
  BrowserAnimationsModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatCheckboxModule,
  MatDialogModule,
  MatRadioModule,
  FormsModule,
  ReactiveFormsModule,
  FlexLayoutModule,
  HttpClientModule,
  CommonModule,
    CarouselModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false })
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
