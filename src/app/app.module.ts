import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FeedbackComponent } from './feedback/feedback.component'
import { MatDialogModule } from '@angular/material/dialog';
import { SectionsModule } from './sections/sections.module';
import { MatStepperModule } from '@angular/material/stepper';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProjectsComponent,
    FeedbackComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatDialogModule,
    SectionsModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
