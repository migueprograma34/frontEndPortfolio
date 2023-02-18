import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoPagComponent } from './componentes/logo-pag/logo-pag.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ExperienceComponent } from './componentes/experience/experience.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componentes/hys/hys.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { InterceptorService } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/experience/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experience/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditeducacionComponent } from './componentes/educacion/editeducacion.component';
import { EditSkillComponent } from './componentes/hys/edit-skill.component';
import { NewSkillComponent } from './componentes/hys/new-skill.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EditAcercaDeComponent } from './componentes/acerca-de/edit-acerca-de.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoPagComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienceComponent,
    EducacionComponent,
    HysComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
