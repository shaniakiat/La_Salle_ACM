import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ServiceWorkerModule } from '@angular/service-worker';
// import { environment } from '../environments/environment';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OfficersComponent } from './components/officers/officers.component';
import { EventsComponent } from './components/events/events.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { ProgrammingTeamComponent } from './components/programming-team/programming-team.component';
import { CsDepartmentComponent } from './components/cs-department/cs-department.component';
import { ContactComponent } from './components/contact/contact.component';

import { ScrollSpyDirective } from './scroll-spy.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OfficersComponent,
    EventsComponent,
    ResourcesComponent,
    ProgrammingTeamComponent,
    CsDepartmentComponent,
    ContactComponent,
    ScrollSpyDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ServiceWorkerModule.register('ngsw-worker.js', {
    //   enabled: environment.production,
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
