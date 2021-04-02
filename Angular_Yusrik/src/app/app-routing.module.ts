import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { ActualaboutComponent} from './actualabout/actualabout.component';

const routes: Routes = [
  { path: 'students', component: StudentsComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'actualabout', component: ActualaboutComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }