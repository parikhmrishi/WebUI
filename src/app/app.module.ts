import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { environment } from '../environments/environment.prod';

import { DataService } from './services/userData.service';
import { SidemenuComponent } from './home/sidemenu/sidemenu.component';
import { CreatequizComponent } from './createquiz/createquiz.component';
import { QuestionsComponent } from './createquiz/questions/questions.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { QuizdescComponent } from './createquiz/quizdesc/quizdesc.component';
import { PreviewComponent } from './createquiz/preview/preview.component';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(environment.clientId)
  }
])

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    SidemenuComponent,
    CreatequizComponent,
    QuestionsComponent,
    ErrorComponent,
    HeaderComponent,
    QuizdescComponent,
    PreviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SocialLoginModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
