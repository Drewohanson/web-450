
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BaseLayoutComponent } from "./shared";
import { LoginComponent } from "./components/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { SummaryComponent } from "./components/summary/summary.component";
import { TopicSelectionComponent } from "./components/topic-selection/topic-selection.component";

export const AppRoutes: Routes = [
  {
    path: "session",

    children: [
      { path: "", component: LoginComponent },
      { path: "login", component: LoginComponent },
      { path: "not-found", component: NotFoundComponent }
    ]
  },
  {
    path: "home",
    component: BaseLayoutComponent,
    children: [
      {
        path: "",
        component: TopicSelectionComponent,

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
