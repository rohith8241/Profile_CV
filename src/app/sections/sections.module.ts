import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education/education.component';
import { SectionsRoutingModule } from './srctions-routing.module';
import { SchoolComponent } from './school/school.component';
import { HigherEducationComponent } from './higher-education/higher-education.component';
import { ProfessionalEducationComponent } from './professional-education/professional-education.component';
import { MatStepperModule } from '@angular/material/stepper';
import { SkillsExperienceComponent } from './skills-experience/skills-experience.component';
import { SummaryComponent } from './summary/summary.component';



@NgModule({
  declarations: [
    EducationComponent,
    SchoolComponent,
    HigherEducationComponent,
    ProfessionalEducationComponent,
    SkillsExperienceComponent,
    SummaryComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    // BrowserAnimationsModule
    MatStepperModule

  ],
  exports:[
    EducationComponent,
    SchoolComponent,
    HigherEducationComponent,
    ProfessionalEducationComponent,
    SkillsExperienceComponent
  ]
})
export class SectionsModule { }
