import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { SkillsExperienceComponent } from './skills-experience/skills-experience.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
    {
        path:'education',component:EducationComponent
    },
    {
      path: 'skills', component:SkillsExperienceComponent
    },
    {
      path: 'summary',component:SummaryComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }