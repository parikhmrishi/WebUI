import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { CreatequizComponent } from './createquiz/createquiz.component';
import { QuestionsComponent } from './createquiz/questions/questions.component';
import { ErrorComponent } from './error/error.component';
import { QuizdescComponent } from './createquiz/quizdesc/quizdesc.component';
import { PreviewComponent } from './createquiz/preview/preview.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthComponent },
  {
    path: 'createquiz', component: CreatequizComponent,
    children: [
      { path: 'quiz', component: QuizdescComponent },
      { path: 'question', component: QuestionsComponent },
      { path: 'preview', component: PreviewComponent },
    ]
  },
  { path: 'questions', component: QuestionsComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
