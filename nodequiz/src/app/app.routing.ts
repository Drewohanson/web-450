
import { NgModule } from "@angular/core";
import { BaseLayoutComponent } from "./shared";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./components/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SummaryComponent } from "./components/summary/summary.component";
import { QuizComponent } from "./components/quiz/quiz.component";
import { PresentationComponent } from "./components/presentation/presentation.component";

export const AppRoutes: Routes = [
  {
    path: "session",

    children: [
      { path: "", component: LoginComponent },
      { path: "login", component: LoginComponent },
      { path: "not-found", component: NotFoundComponent },
      { path: "presentation", component: PresentationComponent },
      { path: "quiz", component: QuizComponent }
    ]
  },
  {
    path: "home",
    component: BaseLayoutComponent,
    children: [
      {
        path: "",
        component: QuizComponent,

      },
      {
        path: "summary",
        component: SummaryComponent,

      }
    ]
  },
  { path: "**", redirectTo: "/session/not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
