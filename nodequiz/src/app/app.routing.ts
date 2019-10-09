
import { NgModule } from "@angular/core";
import { BaseLayoutComponent } from "./shared";
import { Routes, RouterModule } from "@angular/router";
import { AuthLayoutComponent } from "./shared/auth-layout/auth-layout.component";
import { AuthGuard } from "./shared/guards/auth-guard";
import { LoginComponent } from "./components/login/login.component";
import { SummaryComponent } from "./components/summary/summary.component";
import { QuizComponent } from "./components/quiz/quiz.component";
import { PresentationComponent } from "./components/presentation/presentation.component";
import { QuizSelectionComponent } from "./components/quiz-selection/quiz-selection.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

export const AppRoutes: Routes = [
  {
    path:"",
    component: BaseLayoutComponent,
    children:[
      {
        path:"",
        component: QuizSelectionComponent,
        //canActicate: [AuthGuard],
      },
      {
        path:"presentation/:id",
        component: PresentationComponent,
        //canActicate: [AuthGuard],
      },
      {
        path:"quiz/:id",
        component: QuizComponent,
        //canActicate: [AuthGuard],
      },
      {
        path:"summary",
        component: SummaryComponent,
        //canActicate: [AuthGuard],
      },

    ]
  },
  {
    path:"session",
    component:AuthLayoutComponent,
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "not-found",
        component: NotFoundComponent,
      },
    ]
  },
  {
    path:"**",
    redirectTo: "session/not-found"
  }
]
