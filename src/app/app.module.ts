import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/header/logo-ap/logo-ap.component';
import { SocialComponent } from './components/header/social/social.component';
import { LoginComponent } from './components/header/login/login.component';
import { AcercaDeComponent } from './components/header/acerca-de/acerca-de.component';
import { NavLinksComponent } from './components/header/nav-links/nav-links.component';
import { InicioComponent } from './components/header/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    LoginComponent,
    AcercaDeComponent,
    NavLinksComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
