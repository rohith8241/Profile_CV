import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectsComponent } from './projects/projects.component';

const approute: Routes = [
  {path:'home', component: HomeComponent },
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'project', component: ProjectsComponent},
  {path:'sections',
  loadChildren: () => import('./sections/sections.module').then(m => m.SectionsModule)
},
{path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    approute,
    { enableTracing:true }
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
