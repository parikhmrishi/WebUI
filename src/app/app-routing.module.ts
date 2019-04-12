import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { CreatequizComponent } from './createquiz/createquiz.component';
import { QuestionsComponent } from './createquiz/questions/questions.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path:'home',  component : HomeComponent },
  { path: '',   redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent},
  {path:'createquiz',component:CreatequizComponent},
  {path:'questions',component:QuestionsComponent},
  {path:'header',component:HeaderComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
