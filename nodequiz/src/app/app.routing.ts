
import { NgModule } from "@angular/core";
import { BaseLayoutComponent } from "./shared";
import { Routes, RouterModule } from "@angular/router";
import { AuthLayoutComponent } from "./shared/auth-layout/auth-layout.component";
import { AuthGuard } from "./shared/guards/auth-guard";
import { LoginComponent } from "./components/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SummaryComponent } from "./components/summary/summary.component";
import { QuizComponent } from "./components/quiz/quiz.component";
import { PresentationComponent } from "./components/presentation/presentation.component";
import { QuizSelectionComponent } from "./components/quiz-selection/quiz-selection";

export const AppRoutes: Routes = [
  {
    path: "session",

    component: AuthLayoutComponent,

    children: [
      { path: "",  },
      { path: "login", component: LoginComponent },
      { path: "not-found", component: NotFoundComponent },
     //{ path: "presentation", component: PresentationComponent },
     // { path: "quiz", component: QuizComponent }
    ]
  },
  {
    path: "home",
    component: BaseLayoutComponent,
    children: [
      {
        path: "quiz-selection",
        component: QuizSelectionComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "presentation/:id",
        component: PresentationComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "quiz/:id",
        component: QuizComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "summary",
        component: SummaryComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  { path: "**", redirectTo: "/session/not-found" }
];
/*
@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
*/
