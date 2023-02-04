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
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoPagComponent,
    SocialMediaComponent,
    BannerComponent,
    EncabezadoComponent,
    ExperienceComponent,
    EducacionComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
