import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoPagComponent } from './componentes/logo-pag/logo-pag.component';
import { SocialMediaComponent } from './componentes/social-media/social-media.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoPagComponent,
    SocialMediaComponent,
    BannerComponent,
    EncabezadoComponent,
    ExperienceComponent,
    EducacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
